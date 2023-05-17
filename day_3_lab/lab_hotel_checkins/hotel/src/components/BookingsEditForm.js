import {useState} from "react";


const BookingsEditForm = ({handleBookingUpdate, bookingToEdit, handleEditClicked}) => {
    
    const [buttonChecked, setButtonChecked] = useState(false)
    
    const [formData, setFormData] = useState({
        name: bookingToEdit.name,
        email: bookingToEdit.email,
        status: buttonChecked
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
        handleBookingUpdate(bookingToEdit._id, formData)
        // Reset the form input values
        setFormData({
            name: "",
            email: "",
            status: ""
        });
        handleEditClicked(null)
    }

    return (
        <form onSubmit={onSubmit} className="bookings-edit-form" id="bookings-form" >
            <h2>Edit {bookingToEdit.name} Booking</h2>
            <div className="formWrap">
                <label htmlFor="name">Name:</label>
                <input 
                    onChange={onChange} 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name} />
            </div>
            <div className="formWrap">
                <label htmlFor="email">Email:</label>
                <input
                    onChange={onChange} 
                    type="text" 
                    id="email" 
                    name="email"
                    value={formData.email} />
            </div>
            <div className="formWrap">
                <label htmlFor="status">Status:</label>
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

export default BookingsEditForm;