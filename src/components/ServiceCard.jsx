const ServiceCard = ({title,icon}) => {
    return (
        <div className="w-[203px] max-md:w-[130px] h-[153px] flex flex-col justify-center items-center gap-[15px] rounded-[8px] bg-[#FAFBFE] hover:border hover:border-[#2AA7FF] hover:bg-[#2AA7FF14] text-[#ABB6C7] hover:text-[#2AA7FF] cursor-pointer">
            <img width={60} height={60} className="max-md:w-[40px]" src={icon} alt={title}/>
            <p className="font-Poppins font-[400] text-[18px] leading-[27px] tracking-[0.02em] text-center max-md:text-[14px]">{title}</p>
        </div>
    )
}
export default ServiceCard;
