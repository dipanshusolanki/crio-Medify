const SpecialistCard = ({specialist}) => {
    const {name, specialisation, profile} = specialist;

    return (
        <div className="w-[370px] h-[505px] flex flex-col gap-[15px] items-start overflow-hidden">
            <div className="w-[370px] h-[415px] shadow-specialist-card">
                <img className="w-full h-auto" src={profile} alt={name}/>
            </div>
            <div className="w-full h-[75px] flex flex-col items-center">
                <p className="font-Poppins font-[400] text-[24px] leading-[48px] text-center text-[#1B3C74]">{name}</p>
                <p className="font-Poppins font-[600] text-[16px] leading-[27px] text-center text-[#2AA7FF]">{specialisation}</p>
            </div>
        </div>
    )
}
export default SpecialistCard
