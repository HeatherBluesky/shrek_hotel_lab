import {useState, useEffect} from "react";
import { getGuestBookings } from "../components/BookingsService";
import { putBooking } from "../components/BookingsService";
import BookingList from "../components/BookingList";
import BookingsForm from "../components/BookingForm";

const HotelContainer = () => {
    const [guestBookings, setGuestBookings] = useState([])
    const [bookingToEdit, setBookingToEdit] = useState(null)

    useEffect(() => {
      getGuestBookings().then((allBookings) => {
        setGuestBookings(allBookings);
      })
    },[bookingToEdit])

    const addBooking = (booking) => {
        setGuestBookings([...guestBookings, booking]);
    }

    const removeBooking = (id) => {
        const bookingsToKeep = guestBookings.filter(booking => booking._id !== id)
        setGuestBookings(bookingsToKeep)
    }

    const handleEditClicked = (booking) => {
        setBookingToEdit(booking)
    }

    const handleBookingUpdate = (id, booking) => {
        putBooking(id, booking)
        let updatedBookingIndex = guestBookings.indexOf(booking)
        
        let newBookings = [...guestBookings]
        newBookings[updatedBookingIndex] = booking
        setGuestBookings(newBookings)
    }

    return (  
        <div>
        <h1> this is a container filled with bookings </h1>
        <BookingsForm addBooking={addBooking}/>
        <BookingList
        guestBookings={guestBookings}
        removeBooking={removeBooking}
        handleEditClicked={handleEditClicked} 
        bookingToEdit={bookingToEdit}
        handleBookingUpdate={handleBookingUpdate}/>
        </div>
    );
}
 
export default HotelContainer;