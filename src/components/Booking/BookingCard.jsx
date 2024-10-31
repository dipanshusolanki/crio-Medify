import Hospital from "/hospitalicon.png"
import Like from "/likeicon.svg";


const BookingCard = ({booking}) => {
    return (
        <>
            {
                booking !== undefined &&
                <>
                    <div className="max-md:w-full max-md:p-[8px] w-[916px] h-fit rounded-[15px] bg-[#FFFFFF] p-[24px] flex flex-col justify-start items-start">
                        <div className="w-full h-fit flex gap-[14px] items-start justify-between max-md:gap-[7px]">
                            <div className="w-[487px] h-[220px] max-md:w-full max-md:h-fit max-md:gap-[4px] flex gap-[8px] items-start">
                                <div className="max-md:min-w-[40px] max-md:min-h-[40px] min-w-[140px] min-h-[140px] flex items-end justify-center">
                                    <img src={Hospital} alt="hospitalicon"/>
                                </div>
                                <div className="max-md:pt-[12px] pt-[43px] pl-[10px] flex flex-col gap-[12px] justify-start items-start">
                                    <p className="max-md:w-[160px] max-md:text-[14px] w-[477px] font-Poppins font-[600] text-[20px] leading-[28px] text-[#14BEF0]">{booking["Hospital Name"]}</p>
                                    <div className="flex flex-col gap-[12px] items-start justify-start">
                                        <div className="flex flex-col gap-[6px]">
                                            <div>
                                                <p className="max-md:w-[160px] max-md:text-[12px] font-Poppins font-[700] text-[14px] leading-[20px] text-[#414146]">{`${booking["City"].charAt(0).toUpperCase() + booking["City"].toLowerCase().slice(1)}, ${booking["State"]}`}</p>
                                                <p className="max-md:w-[160px] max-md:text-[12px] font-Poppins font-[400] text-[14px] leading-[20px] text-[#414146]">Smilessence
                                                    Center for Advanced Dentistry + 1 more
                                                </p>
                                            </div>
                                        </div>
                                        <div className="max-md:w-[160px] w-[317px] h-[39px] border-t-[1px] border-t-[#E8E8F0] border-dashed flex justify-start items-end">
                                            <div
                                                className="w-[44px] h-[22px] flex justify-center items-center bg-[#00A500] rounded-[4px]">
                                                <img className="w-[14px] h-[14px]" src={Like} alt="likeicon"/>
                                                <span
                                                    className="font-Poppins font-[700] text-[14px] leading-[14px] text-[#FFFFFF]">5</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="max-md:w-full max-md:h-fit w-[276px] h-[220px] flex justify-center items-start gap-[14px] max-md:gap-[10px] pt-[42px] max-md:flex-col max-md:items-center max-md:justify-start max-md:self-start max-md:p-0 max-md:pt-[20px]">
                                <div className="max-md:w-[130px] max-md:h-[30px] w-[84px] h-[32px] rounded-[3px] border border-[#2AA7FF] flex justify-center items-center font-Poppins font-[400] text-[14px] leading-[20px] text-[#2AA7FF]">
                                    {booking.time}
                                </div>
                                <div className="max-md:w-[130px] max-md:min-h-[30px] max-md:h-fit max-md:text-center max-w-[158px] h-[32px] px-[5px] rounded-[3px] border border-[#00A500] flex justify-center items-center font-Poppins font-[700] text-[14px] max-md:font-[600] leading-[20px] text-[#007100]">
                                    {booking.date}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}
export default BookingCard
