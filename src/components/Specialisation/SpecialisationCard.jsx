const SpecialisationCard = ({icon, title}) => {
    return (
        <div className="w-[270px] max-md:w-[170px] h-[180px] max-md:h-[160px] max-md:px-[10px] py-[22px] px-[70px] flex flex-col items-center justify-center gap-[22px] max-md:gap-[16px] bg-[#FFFFFF] shadow-specialisation-card rounded-[10px] cursor-pointer hover:border hover:border-[#2AA7FF] hover:bg-[#2AA7FF14] text-[#ABB6C7] hover:text-[#2AA7FF]">
            <img src={icon} alt={title} className="max-md:w-[45px]" />
            <p className="font-Poppins font-[500] text-[16px] max-md:text-[14px] leading-[27px] text-center text-[#ABB6C7]">{title}</p>
        </div>
    )
}
export default SpecialisationCard
