
const Faq = () => {
    return (
        <section className="w-full h-[709px] max-md:h-fit overflow-hidden">
            <div className="container mx-auto h-full max-md:w-full max-md:py-[50px] max-md:px-[20px] pt-[10px] pb-[15px] flex flex-col gap-[76px] max-md:gap-[56px] items-start">
                <div className="w-full h-fit font-Poppins flex justify-start items-center gap-[2px] flex-col pt-[15px]">
                    <p className="font-[600] text-[16px] max-md:text-[16px] leading-[27px] text-center text-[#2AA7FF]">Get Your Answer</p>
                    <p className="font-[600] text-[48px] max-md:text-[36px] leading-[67px] max-md:leading-[54px] text-center text-[#1B3C74]">Frequently Asked Questions</p>
                </div>
                <div className="flex justify-around w-full items-center max-md:px-[50px] max-md:flex-col max-md:justify-start max-md:items-center max-md:gap-[40px]">
                    <div className="w-[500px] h-[479px] max-md:w-full max-md:h-fit relative rounded-[8px] bg-[#FFFFFF] shadow-faq-poster">
                        <div className="">
                            <img src="/faqposter.png" alt="faqposter" className="w-full h-full rounded-[8px]" />
                        </div>
                        <div className="absolute w-[241px] h-[104px] max-md:w-[170px] max-md:h-[60px] rounded-[8px] bg-[#FFFFFF] shadow-faq-shadow-stats flex gap-[15px] justify-center items-center z-[5] top-[59%] -left-[20%] max-md:-left-[15%] max-md:top-[65%]">
                            <img src="/smiley.svg" alt="smiley" width={37} height={37} className="max-md:w-[24px]" />
                            <div className="font-Poppins text-left">
                                <p className="font-[600] text-[24px] max-md:text-[16px] max-md:leading-[23px] leading-[33px] text-[#1B3C74]">84k+</p>
                                <p className="font-[400] text-[17px] max-md:text-[13px] leading-[28px] text-[#77829D]">Happy Patients</p>
                            </div>
                        </div>
                        <div className="absolute z-[5] w-[80px] h-[80px] max-md:w-[65px] max-md:h-[65px] rounded-[40px] shadow-faq-shadow-icon bg-[#FFFFFF] flex justify-center items-center top-[28%] max-md:top-[35%] -right-[7.5%] ">
                            <img src="/hands.svg" alt="hands"/>
                        </div>
                    </div>
                    <div className="w-[464px] h-[382px] flex flex-col gap-[24px] max-md:gap-[6px] max-md:leading-[25px] font-Poppins font-[600] text-[19px] leading-[30px] text-[#1B3C74] max-md:px-[50px]">
                        <div className="w-full pl-[15px] pr-[10px] py-[20px] flex justify-between items-baseline max-md:items-center">
                            <p className="max-md:max-w-[80%]">Why choose our medical for your family?</p>
                            <img width={16} height={18} src="/plus.svg" alt="expand"/>
                        </div>
                        <div className="w-full pl-[15px] pr-[10px] py-[20px] flex justify-between items-baseline max-md:items-center">
                            <p className="max-md:max-w-[80%]">Why we are different from others?</p>
                            <img width={16} height={18} src="/plus.svg" alt="expand"/>
                        </div>
                        <div className="w-full pl-[15px] pr-[10px] py-[20px] flex justify-between items-baseline max-md:items-center">
                            <p className="max-md:max-w-[80%]">Trusted & experience senior care & love</p>
                            <img width={16} height={18}  src="/plus.svg" alt="expand"/>
                        </div>
                        <div className="w-full pl-[15px] pr-[10px] py-[20px] flex justify-between items-baseline max-md:items-center">
                            <p className="max-md:max-w-[80%]">How to get appointment for emergency <span>cases?</span></p>
                            <img width={16} height={18}  src="/plus.svg" alt="expand"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Faq
