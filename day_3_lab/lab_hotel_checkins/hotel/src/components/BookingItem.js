import { deleteBooking } from "./BookingsService";

const BookingItem = ({booking, removeBooking, handleEditClicked, }) => {
    console.log("component mounted");

    const handleDelete = () => {
        deleteBooking(booking._id).then(()=>{
            removeBooking(booking._id);
        })
    }

    const handleEdit = () => {
        handleEditClicked(booking)
    }
    
    return (  
        <>
                <h1> guest name: {booking.name}</h1>
                <p> email: {booking.email}</p>
                <p> status: {String(booking.status)}</p>
                <button onClick={handleDelete}>Delete </button>
                <button onClick={handleEdit}> Edit </button>
                

           
        </>


    );
}
 
export default BookingItem;