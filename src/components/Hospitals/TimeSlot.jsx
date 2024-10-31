const TimeSlot = ({data, clickHandler}) => {
    return (
        <button onClick={()=> {
            clickHandler(data)
        }} className="w-[84px] h-[32px] flex justify-center items-center rounded-[3px] border border-[#2AA7FF]">
            <span className="font-Poppins font-[400] text-[14px] leading-[20px] text-[#2AA7FF]">{data.time}</span>
        </button>
    )
}
export default TimeSlot
