import Hospital from "/hospitalicon.png"
import Like from "/likeicon.svg"
import LeftNav from "/left.svg"
import RightNav from "/right.svg"
import TimeSlot from "./TimeSlot.jsx";
import {useState} from "react";
import saveBookingtoLocalStorage from "../../utilities/saveBookingtoLocalStorage.js";
import {useNavigate} from "react-router-dom";


const HospitalCard = ({hospital}) => {
    const navigate = useNavigate();
    const [isBooking, setIsBooking] = useState(false);

    const handleClick = (bookingData) => {
        const time = bookingData.time;
        let date = new Date().toLocaleDateString('en-GB',{ day: 'numeric', month: 'long', year: 'numeric' });
        saveBookingtoLocalStorage({...hospital,time,date});
        setIsBooking(false);
        navigate("/bookings");
    };

    return (
        <>
            {
                hospital !== undefined &&
                <>
                    <div className="w-[916px] max-md:w-full h-fit rounded-[15px] bg-[#FFFFFF] p-[24px] max-md:p-[8px] flex flex-col justify-start items-start">
                        <div className="w-full h-fit flex gap-[14px] max-md:gap-[7px] items-start justify-between">
                            <div className="w-[487px] max-md:w-full max-md:h-fit h-[220px] flex gap-[8px] max-md:gap-[4px] items-start">
                                <div className="min-w-[140px] max-md:min-w-[40px] min-h-[140px] max-md:min-h-[40px] flex items-end justify-center">
                                    <img src={Hospital} alt="hospitalicon"/>
                                </div>
                                <div className="pt-[43px] max-md:pt-[12px] pl-[10px] flex flex-col gap-[12px] justify-start items-start">
                                    <p className="w-[477px] max-md:w-[160px] font-Poppins font-[600] text-[20px] max-md:text-[14px] leading-[28px] text-[#14BEF0]">{hospital["Hospital Name"]}</p>
                                    <div className="flex flex-col gap-[12px] items-start justify-start">
                                        <div className="flex flex-col gap-[6px]">
                                            <div>
                                                <p className="font-Poppins font-[700] max-md:w-[160px] text-[14px] max-md:text-[12px] leading-[20px] text-[#414146]">{`${hospital["City"].charAt(0).toUpperCase() + hospital["City"].toLowerCase().slice(1)}, ${hospital["State"]}`}</p>
                                                <p className="font-Poppins font-[400] max-md:w-[160px] text-[14px] max-md:text-[12px] leading-[20px] text-[#414146]">Smilessence
                                                    Center for Advanced Dentistry + 1 more
                                                </p>
                                            </div>
                                            <div className="flex gap-[8px] items-start justify-start max-md:w-[160px]">
                                                <span className="font-Poppins font-[700] text-[14px] leading-[20px] text-[#02A401]">FREE</span>
                                                <span className="font-Poppins font-[400] text-[14px] leading-[20px]">
                                                    <span className="line-through">
                                                        ₹500
                                                    </span>
                                                    Consultation fee at clinic
                                                </span>
                                            </div>
                                        </div>
                                        {
                                            !isBooking &&
                                            <>
                                                <div className="w-[317px] max-md:w-[160px] h-[39px] border-t-[1px] border-t-[#E8E8F0] border-dashed flex justify-start items-end">
                                                    <div
                                                        className="w-[44px] h-[22px] flex justify-center items-center bg-[#00A500] rounded-[4px]">
                                                        <img className="w-[14px] h-[14px]" src={Like} alt="likeicon"/>
                                                        <span
                                                            className="font-Poppins font-[700] text-[14px] leading-[14px] text-[#FFFFFF]">5</span>
                                                    </div>
                                                </div>
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="w-[236px] h-[220px] max-md:w-full max-md:h-fit self-end flex flex-col justify-end items-center gap-[16px] pb-[12px]">
                                <p className="font-Poppins font-[500] text-[14px] max-md:text-[10px] leading-[20px] text-[#01A400]">Available
                                    Today</p>
                                <button
                                    onClick={() => {
                                        setIsBooking((prev) => (!prev))
                                    }}
                                    className="w-[212px] max-md:w-fit max-md:px-[5px] h-[40px] flex justify-center items-center bg-[#2AA7FF] border border-[#14BEF0] font-Poppins font-[500] text-[14px] max-md:text-[10px] leading-[21px] text-[#FFFFFF] rounded-[4px]">Book
                                    FREE Center Visit
                                </button>
                            </div>
                        </div>
                        {
                            isBooking &&
                            <>
                                <div className="w-full h-[278px] max-md:h-fit mt-[24px] flex flex-col justify-start items-center gap-[10px] border-t border-t-[#F0F0F5]">
                                    <span className="w-[44px] h-[5px] rounded-[3px] bg-[#00A500] mb-[10px]"></span>
                                    <div className="w-full h-[261px] max-md:h-fit max-md:flex max-md:flex-col max-md:items-center max-md:justify-start">
                                        <div className="w-full max-md:w-full max-md:h-fit h-[58px] flex justify-between items-center max-md:gap-[5px] max-md:justify-center gap-[10px]">
                                            <div className="min-w-[48px] max-md:min-w-[32px] max-md:min-h-[32px] min-h-[48px] rounded-[24px] border border-[#E0E0E4] flex justify-center items-center">
                                                <img className="w-[20px] h-[20px]" src={LeftNav} alt="left"/>
                                            </div>
                                            <div className="w-full h-[59px] max-md:h-fit flex justify-center">
                                                <div className="w-[205px] h-[59px] max-md:w-[33%] border-b-[4px] border-[#2AA7FF] flex flex-col items-center justify-center gap-[3px]">
                                                    <p className="font-Poppins font-[700] text-[16px] leading-[22px] text-[#414146] max-md:text-[14px]">Today</p>
                                                    <p className="font-Poppins font-[400] text-[12px] leading-[17px] text-[#01A400] max-md:text-[10px] max-md:px-[8px] max-md:text-center max-md:pb-[5px]">11
                                                        Slots Available</p>
                                                </div>
                                                <div className="w-[205px] h-[59px] max-md:w-[33%] border-b-[4px] border-[#F0F0F5] flex flex-col items-center justify-center gap-[3px]">
                                                    <p className="font-Poppins font-[700] text-[16px] leading-[22px] text-[#414146] max-md:text-[14px]">Tomorrow</p>
                                                    <p className="font-Poppins font-[400] text-[12px] leading-[17px] text-[#01A400] max-md:text-[10px] max-md:px-[8px] max-md:text-center max-md:pb-[5px]">17
                                                        Slots Available</p>
                                                </div>
                                                <div className="w-[205px] h-[59px] max-md:w-[33%] border-b-[4px] border-[#F0F0F5] flex flex-col items-center justify-center gap-[3px]">
                                                    <p className="font-Poppins font-[700] text-[16px] leading-[22px] text-[#414146] max-md:text-[14px]">Fri,
                                                        5 May</p>
                                                    <p className="font-Poppins font-[400] text-[12px] leading-[17px] text-[#01A400] max-md:text-[10px] max-md:px-[8px] max-md:text-center max-md:pb-[5px]">18
                                                        Slots Available</p>
                                                </div>
                                            </div>
                                            <div className="min-w-[48px] min-h-[48px] max-md:min-w-[32px] max-md:min-h-[32px] rounded-[24px] border border-[#E0E0E4] flex justify-center items-center">
                                                <img className="w-[20px] h-[20px]" src={RightNav} alt="right"/>
                                            </div>
                                        </div>
                                        <div className="w-full h-[202px] max-md:h-fit">
                                            <div className="w-full h-[73px] border-b border-b-[#F0F0F5] flex justify-start items-center gap-[4px] max-md:h-fit max-md:py-[15px] max-md:items-start max-md:gap-[10px]">
                                                <div className="w-[143px] max-md:w-[130px] h-[40px] pl-[30px] flex justify-start items-center max-md:items-start">
                                                    Morning
                                                </div>
                                                <div className="w-fit max-w-[610px] h-[40px] flex justify-start items-center gap-[31px] max-md:w-full max-md:flex-wrap max-md:gap-[15px] max-md:h-fit">
                                                    <TimeSlot data={{time:"11:30 AM"}} clickHandler={handleClick}/>
                                                </div>
                                            </div>
                                            <div className="w-full h-[73px] border-b border-b-[#F0F0F5] flex justify-start items-center gap-[4px] max-md:h-fit max-md:py-[15px] max-md:items-start max-md:gap-[10px]">
                                                <div className="w-[143px] h-[40px] pl-[30px] max-md:w-[130px] flex justify-start items-center max-md:items-start">Afternoon
                                                </div>
                                                <div className="w-fit max-w-[610px] h-[40px] flex justify-start items-center gap-[31px] max-md:w-full max-md:flex-wrap max-md:gap-[15px] max-md:h-fit">
                                                    <TimeSlot  data={{time:"12:00 PM"}} clickHandler={handleClick}/>
                                                    <TimeSlot  data={{time:"12:30 PM"}}  clickHandler={handleClick}/>
                                                    <TimeSlot  data={{time:"01:30 PM"}}  clickHandler={handleClick}/>
                                                    <TimeSlot  data={{time:"02:00 PM"}}  clickHandler={handleClick}/>
                                                    <TimeSlot  data={{time:"02:30 PM"}}  clickHandler={handleClick}/>
                                                </div>
                                            </div>
                                            <div className="w-full h-[73px] flex justify-start items-center gap-[4px] max-md:h-fit max-md:py-[15px] max-md:items-start max-md:gap-[10px]">
                                                <div className="w-[143px] h-[40px] max-md:w-[130px] pl-[30px] flex justify-start items-center max-md:items-start">
                                                    Evening
                                                </div>
                                                <div className="w-fit max-w-[610px] h-[40px] flex justify-start items-center gap-[31px] max-md:w-full max-md:flex-wrap max-md:gap-[15px] max-md:h-fit">
                                                    <TimeSlot  data={{time:"06:00 PM"}}  clickHandler={handleClick}/>
                                                    <TimeSlot  data={{time:"06:30 PM"}} clickHandler={handleClick}/>
                                                    <TimeSlot  data={{time:"07:00 PM"}} clickHandler={handleClick}/>
                                                    <TimeSlot  data={{time:"07:30 PM"}} clickHandler={handleClick}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                </>
            }
        </>
    )
}
export default HospitalCard
