const saveBookingtoLocalStorage = (newBooking) =>{
    const bookings = JSON.parse(localStorage.getItem("bookings"));
    bookings.push(newBooking);
    localStorage.setItem("bookings", JSON.stringify(bookings));
}

export default saveBookingtoLocalStorage;
