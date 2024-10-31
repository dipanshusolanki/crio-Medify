const fetchBookingsLS = () =>{
    return JSON.parse(localStorage.getItem('bookings'));
}

export default fetchBookingsLS;
