import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import CircularProgress from "@mui/material/CircularProgress";
import {useEffect, useState} from "react";
import fetchBookingsLS from "../../utilities/fetchBookingsLS.js";
import CheckupAd from "/freecheckupad.png";
import BookingCard from "./BookingCard.jsx";

const Booking = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [bookingList, setBookingList] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [searchText, setSearchText] = useState("");

    const searchHandler = () => {
        setIsLoading(true);
        const searchQuery = searchText.toLowerCase().trim();
        const filteredBookings = bookingList.filter((booking) => (booking["Hospital Name"].toLowerCase().includes(searchQuery)))
        setBookings(filteredBookings);
        setIsLoading(false);
    }

    useEffect(() => {
        const localBookings = fetchBookingsLS();
        setBookingList(localBookings);
        setBookings(localBookings);
        setIsLoading(false);
    }, []);

    return (
        <section className="relative w-full h-fit bg-hospital-cardholder-bg pb-[123px] max-md:pb-[60px] ">
            <div className="w-full h-[110px] rounded-b-[16px] bg-hospital-bg flex items-end pb-[18px] max-md:h-[120px] max-md:justify-center max-md:items-center">
                <div className="font-Poppins w-[403px] h-[46px] font-[700] text-[40px] max-md:text-[32px] leading-[45px] text-center text-[#FFFFFF] ml-[170px] max-md:ml-0 max-md:-mt-[30px]">My Bookings</div>
                <div className="w-[55%] max-md:w-[94%] max-md:h-fit h-[111px] absolute top-[53px] max-md:top-[75px] max-md:right-[3%] right-[10%] rounded-[15px] bg-[#ffffff] shadow-hospital-searchbar flex justify-center items-center">
                    <div className="w-full h-fit flex justify-center items-center gap-[20px] py-[27px] px-[24px] max-md:gap-[10px] max-md:py-[12px] max-md:px-[14px]">
                        <input value={searchText} onChange={(event)=>{setSearchText(event.target.value)}} placeholder="Search By Hospital" className="w-[75%] max-md:w-full h-[50px] bg-[#FAFBFC] rounded-[8px] border border-[#F0F0F0] pl-[25px]" type="text" name="search"/>
                        <button
                            onClick={searchHandler}
                            className="w-[231px] h-[56px] max-md:w-[180px] max-md:h-[50px] bg-[#2AA8FF] font-[500] text-[16px] leading-[24px] text-[#FFFFFF] rounded-[8px] tracking-[0.02em] flex items-center justify-center gap-[6px] py-[12px] pl-[12px] pr-[18px] max-md:px-[5px] max-md:py-[5px]">
                            <SearchSharpIcon className="max-md:w-[15px] w-[26px] h-[26px] max-md:h-[15px]"
                            />
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <>
                {
                    !isLoading ?
                    <>
                        {
                            (bookings && bookings.length !==0) ?
                            <>
                                <div className="max-md:mt-[80px] max-md:w-full max-md:h-fit max-md:px-[20px] w-[1440px] mx-auto mt-[170px] min-h-[269px] flex flex-col gap-[24px]">
                                    <div className="flex justify-between w-full">
                                        <div className="flex flex-col justify-start items-start gap-[20px] max-md:w-full max-md:h-fit max-md:py-[20px]">
                                            {
                                                bookings.map((booking, index) => (
                                                    <BookingCard key={index} booking={booking}/>
                                                ))
                                            }
                                        </div>
                                        <div className="w-[363px] h-[268px] max-md:hidden">
                                            <img className="w-full h-full" src={CheckupAd} alt="checkad"/>
                                        </div>
                                    </div>
                                </div>
                            </> :
                            <>
                                <div className="max-md:w-full max-md:h-[100px] max-md:mt-[150px] max-md:text-[26px] max-md:text-center w-[1440px] h-[400px] mt-[170px] mx-auto flex justify-center items-center font-Poppins font-[400] text-[40px] text-[#1B3C74 uppercase">
                                    No Bookings Found!
                                </div>
                            </>
                        }
                    </> :
                    <>
                        <div className="max-md:w-full max-md:h-[200px] max-md:mt-[250px] w-[1440px] h-[400px] mt-[170px] mx-auto flex justify-center items-center">
                            <CircularProgress size="5rem"/>
                        </div>
                    </>
                }
            </>
        </section>
    )
}
export default Booking
