import BookingItem from "./BookingItem"
import BookingsEditForm from "./BookingsEditForm";

const BookingList = ({guestBookings, removeBooking,handleEditClicked,handleBookingUpdate, bookingToEdit}) => {
    const bookingsList = guestBookings.map((booking)=> {
        if(bookingToEdit != null){
    
            if(booking._id == bookingToEdit._id){
                return(
                    <BookingsEditForm bookingToEdit={booking} key={booking._id} handleBookingUpdate={handleBookingUpdate} handleEditClicked={handleEditClicked}/>
                )
            }else{
                return <BookingItem
                booking={booking} 
                key={booking._id} 
                removeBooking={removeBooking} 
                handleEditClicked={handleEditClicked} 
                bookingToEdit={bookingToEdit}
                handleBookingUpdate={handleBookingUpdate}/>
            }
        }else{
            return(
                <BookingItem
                booking={booking} 
                key={booking._id} 
                removeBooking={removeBooking} 
                handleEditClicked={handleEditClicked} 
                bookingToEdit={bookingToEdit}
                handleBookingUpdate={handleBookingUpdate}/>
        )
    }
    
});

    return (  

        <>
        {bookingsList}
        </>
    );
}
 
export default BookingList;