import {useState} from "react"
import { postBooking } from "./BookingsService"

const BookingsForm = ({addBooking}) => {
    
    const [buttonChecked, setButtonChecked] = useState(false)
    
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        status: buttonChecked,
    })

    const onChange = (e) =>{
        const newFormData = Object.assign({}, formData);
        newFormData[e.target.name] = e.target.value;
        setFormData(newFormData);
    }

    const onCheckboxClicked = (e) => {
        if(formData.status === buttonChecked){
            let newState = {...formData}
            newState.status = !buttonChecked
            setFormData(newState)
        }
        setButtonChecked(!buttonChecked)
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        postBooking(formData).then((data)=>{
            addBooking(data);
        })
        // Reset the form input values
        setFormData({
            name: "",
            email: "",
            status: false,
        });
    }

    return (
        <form onSubmit={onSubmit} id="bookings-form" >
            <h2>Add a Booking</h2>
            <div className="formWrap">
                <label htmlFor="name">Name:</label>
                <input 
                    onChange={onChange} 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name} 
                    required/>
            </div>
            <div className="formWrap">
                <label htmlFor="email">Email:</label>
                <input
                    onChange={onChange} 
                    type="text" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    required />
            </div>
            <div className="formWrap">
                <label htmlFor="date">Status:</label>
                <input 
                    onChange={onCheckboxClicked} 
                    type="checkbox"
                    id="status" 
                    name="status" 
                    value={formData.status}/>
            </div>

            <input type="submit" value="Save" id="save"/>
	    </form>

    );
}

export default BookingsForm;