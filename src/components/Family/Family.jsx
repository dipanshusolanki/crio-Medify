
const Family = () => {
    return (
        <section className="w-full h-[789px] max-md:h-fit max-md:py-[56px] bg-hero-bg pt-[46px] relative overflow-hidden">
            <div className="container h-[715px] max-md:h-fit max-md:w-full mx-auto flex max-md:flex-col max-md:justify-start max-md:items-center justify-center gap-48 max-md:gap-[60px] items-start">
                <div className="h-full w-[575px] max-md:w-full max-md:h-fit flex flex-col justify-center max-md:justify-start max-md:items-center items-start font-Poppins">
                    <p className="font-[600] text-[17px] max-md:text-[14px] leading-[18px] text-[#2AA7FF] mb-[8px]">CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</p>
                    <h2 className="font-[600] text-[48px] max-md:text-[36px] leading-[67px] text-[#1B3C74] mb-[14px]">Our Families</h2>
                    <p className="font-Poppins font-[400] text-[17px] leading-[40px] text-[#77829D] max-w-[501px] tracking-[0.02em] max-md:px-[40px] max-md:text-center max-md:leading-[36px]">
                        We will work with you to develop individualised care plans,
                        including management of chronic diseases.
                        If we cannot assist,
                        we can provide referrals or advice about the type of practitioner you require.
                        We treat all enquiries sensitively and in the strictest confidence.
                    </p>
                </div>
                <div className="h-full w-[585px] max-md:w-full max-md:h-fit px-[30px] flex gap-[35px] max-md:gap-[16px] items-center justify-center">
                    <div className="flex flex-col gap-[35px] pb-[50px] max-md:gap-[16px]">
                        <div className="w-[242px] h-[304px] rounded-[8px] bg-[#FFFFFF] shadow-family-card flex flex-col justify-center items-center gap-[20px] max-md:gap-[16px] max-md:w-[170px] max-md:h-fit max-md:py-[28px]">
                            <div className="flex flex-col items-center justify-center gap-[15px] max-md:gap-[5px]">
                                <img className="w-[100px] h-[100px] max-md:w-[70px] max-md:h-[70px] max-md:p-[20px] p-[25px] rounded-[50px] bg-[#EBF7FF]"
                                     src="/HandIcon.svg" alt="handicon"/>
                                <p className="font-Poppins font-[600] text-[48px] max-md:text-[32px] leading-[48px] text-[#1B3C74]">5000+</p>
                            </div>
                            <p className="font-Poppins font-[500] text-[18px] max-md:text-[14px] leading-[28px] text-center text-[#77829D]">Happy
                                Patients</p>
                        </div>
                        <div className="w-[242px] h-[304px] rounded-[8px] bg-[#FFFFFF] shadow-family-card flex flex-col justify-center items-center gap-[20px] max-md:gap-[16px] max-md:w-[170px] max-md:h-fit max-md:py-[28px]">
                            <div className="flex flex-col items-center justify-center gap-[15px] max-md:gap-[5px]">
                                <img className="w-[110px] h-[110px] p-[25px] rounded-[50px] bg-[#FFF7E6] max-md:w-[70px] max-md:h-[70px] max-md:p-[20px]" src="/PharmacyIcon.svg" alt="pharmacyicon"/>
                                <p className="font-Poppins font-[600] text-[48px] leading-[48px] text-[#1B3C74] max-md:text-[32px]">1000+</p>
                            </div>
                            <p className="font-Poppins font-[500] text-[18px] leading-[28px] text-center text-[#77829D] max-md:text-[14px]">Laboratories</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[35px] pt-[50px] max-md:gap-[16px]">
                        <div className="w-[252px] h-[304px] rounded-[8px] bg-[#FFFFFF] shadow-family-card flex flex-col justify-center items-center gap-[20px] max-md:gap-[16px] max-md:w-[170px] max-md:h-fit max-md:py-[28px]">
                            <div className="flex flex-col items-center justify-center gap-[15px] max-md:gap-[5px]">
                                <img className="w-[110px] h-[110px] p-[25px] rounded-[50px] bg-[#FFF2F0] max-md:w-[70px] max-md:h-[70px] max-md:p-[20px]" src="/HospitalIcon.svg" alt="hospitalicon"/>
                                <p className="font-Poppins font-[600] text-[48px] leading-[48px] text-[#1B3C74] max-md:text-[32px]">200+</p>
                            </div>
                            <p className="font-Poppins font-[500] text-[18px] leading-[28px] text-center text-[#77829D] max-md:text-[14px]">Hospitals</p>
                        </div>
                        <div className="w-[252px] h-[304px] rounded-[8px] bg-[#FFFFFF] shadow-family-card flex flex-col justify-center items-center gap-[20px] max-md:gap-[16px] max-md:w-[170px] max-md:h-fit max-md:py-[28px]">
                            <div className="flex flex-col items-center justify-center gap-[15px] max-md:gap-[5px]">
                                <img className="w-[110px] h-[110px] p-[25px] rounded-[50px] bg-[#EBFAF1] max-md:w-[70px] max-md:h-[70px] max-md:p-[20px]" src="/DoctorIcon.svg" alt="doctoricon"/>
                                <p className="font-Poppins font-[600] text-[48px] leading-[48px] text-[#1B3C74] max-md:text-[32px]">700+</p>
                            </div>
                            <p className="font-Poppins font-[500] text-[18px] leading-[28px] text-center text-[#77829D] max-md:text-[14px]">Expert Doctors</p>
                        </div>
                    </div>
                </div>
            </div>
            <img className="absolute z-[5] top-[30%] left-[0%]" src="/family-left.svg" alt="left-graphic" />
            <img className="absolute z-[5] top-[62%] right-[0%]" src="/family-right.svg" alt="right-graphic" />
        </section>
    )
}
export default Family
