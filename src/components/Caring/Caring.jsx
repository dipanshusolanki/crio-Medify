import Check from '/caring-check.svg'

const Caring = () => {
    return (
        <section className="w-full h-[598px] max-md:h-fit overflow-hidden pt-[65px] max-md:py-[60px] max-md:px-[40px] bg-hero-bg">
            <div className="w-[1440px] max-md:w-full h-[486px] max-md:h-fit mx-auto flex max-md:flex-col max-md:justify-start max-md:items-center gap-60 max-md:gap-[50px] justify-center items-center">
                <div className="w-[519px] max-md:w-[340px] max-md:-ml-[15px] h-full">
                    <img className="w-full h-full" src="/Caring.png" alt="patientcaring"/>
                </div>
                <div className="flex flex-col items-start gap-[20px] max-md:w-full max-md:items-center max-md:justify-start">
                    <div className="max-md:flex max-md:flex-col max-md:items-center">
                        <p className="font-Poppins font-[600] text-[16px] max-md:text-[14px] leading-[27px] text-[#2AA7FF]">
                            HELPING PATIENTS FROM AROUND THE GLOBE!!
                        </p>
                        <p className="font-Poppins font-[600] text-[48px] max-md:text-[40px] leading-[67px] text-[#2AA7FF]">
                            <span className="text-[#1B3C74]">Patient</span> Caring
                        </p>
                    </div>
                    <div className="flex flex-col items-start gap-[38px] max-md:w-full max-md:justify-center">
                        <p className="font-Poppins font-[500] text-[17px] leading-[29px] text-[#77829D] w-[609px] max-md:w-fit max-md:px-[10px] text-center">
                            Our goal is to deliver quality of care in a courteous,
                            respectful, and compassionate manner.
                            We hope you will allow us to care for you and strive
                            to be the first and best choice for healthcare.
                        </p>
                        <div className="flex flex-col items-start gap-[27px] max-md:px-[10px]">
                            <p className="flex items-center gap-[10px] h-[27px]">
                                <img width={20} height={20} src={Check} alt="check"/>
                                <span className="font-Roboto font-[600] text-[18px] leading-[27px] text-[#1B3C74]">
                                Stay Updated About Your Health
                            </span>

                            </p>
                            <p className="flex items-center gap-[10px] h-[27px]">
                                <img width={20} height={20} src={Check} alt="check"/>
                                <span className="font-Roboto font-[600] text-[18px] leading-[27px] text-[#1B3C74]">
                            Check Your Results Online
                            </span>
                            </p>
                            <p className="flex items-center gap-[10px] h-[27px]">
                                <img width={20} height={20} src={Check} alt="check"/>
                                <span className="font-Roboto font-[600] text-[18px] leading-[27px] text-[#1B3C74]">
                                Manage Your Appointments
                            </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Caring
