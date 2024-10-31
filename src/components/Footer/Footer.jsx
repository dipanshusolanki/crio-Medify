import logo from "../../assets/medify_logo.svg";

const Footer = () => {
    return (
        <footer className="w-full h-[467px] bg-[#1B3C74] relative z-10 max-md:px-[30px] max-md:py-[10px] max-md:h-fit">
            <div className="container pl-[60px] max-md:px-[0px] pt-[40px] mx-auto h-full max-md:flex max-md:justify-start max-md:flex-col max-md:items-center">
                <div className="mb-[60px] pt-[42px] max-md:h-fit flex max-md:items-center justify-between max-md:flex-col max-md:p-0 max-md:gap-[40px]">
                    <div className="w-[358px] h-[235px] max-md:w-full max-md:h-fit max-md:flex-row max-md:gap-[60px] flex flex-col items-start justify-between gap-[120px]">
                        <div>
                            <img className="min-w-[126px] min-h-[36px] max-md:min-w-[106px] max-md:min-h-fit" src={logo} alt="footerlogo"/>
                        </div>
                        <div className="flex gap-[16px] max-md:gap-[8px]">
                            <img width={36} height={36} className="max-md:w-[30px]" src="/facebook.svg" alt="facebook"/>
                            <img width={36} height={36} className="max-md:w-[30px]" src="/x.svg" alt="x"/>
                            <img width={36} height={36} className="max-md:w-[30px]" src="/youtube.svg" alt="youtube"/>
                            <img width={36} height={36} className="max-md:w-[30px]" src="/pinterest.svg" alt="pinterest"/>
                        </div>
                    </div>
                    <div className="flex gap-[41px] max-md:h-fit max-md:gap-[22px] font-Poppins font-[400] text-[16px] text-[#FFFFFF] tracking-[0.02em] max-md:flex-wrap max-md:justify-start max-md:pl-[15px] max-md:items-center">
                        <div className="w-[232px] h-[180px] max-md:w-[150px] flex flex-col gap-[25px] items-start justify-between max-md:h-fit">
                            <p className="cursor-pointer w-[209px] h-[33px] flex gap-[14px] items-center"><span><img src="/arrow.svg" alt="linkpointer"/></span>About Us</p>
                            <p className="cursor-pointer w-[209px] h-[33px] flex gap-[14px] items-center"><span><img src="/arrow.svg" alt="linkpointer"/></span>Our Pricing</p>
                            <p className="cursor-pointer w-[209px] h-[33px] flex gap-[14px] items-center"><span><img src="/arrow.svg" alt="linkpointer"/></span>Our Gallery</p>
                            <p className="cursor-pointer w-[209px] h-[33px] flex gap-[14px] items-center"><span><img src="/arrow.svg" alt="linkpointer"/></span>Appointment</p>
                            <p className="cursor-pointer w-[209px] h-[33px] flex gap-[14px] items-center"><span><img src="/arrow.svg" alt="linkpointer"/></span>Privacy Policy</p>
                        </div>
                        <div className="w-[232px] h-[180px] max-md:w-[150px] flex flex-col gap-[25px] items-start justify-between max-md:h-fit">
                            <p className="cursor-pointer w-[209px] h-[33px] flex gap-[14px] items-center"><span><img src="/arrow.svg" alt="linkpointer"/></span>Orthology</p>
                            <p className="cursor-pointer w-[209px] h-[33px] flex gap-[14px] items-center"><span><img src="/arrow.svg" alt="linkpointer"/></span>Neurology</p>
                            <p className="cursor-pointer w-[209px] h-[33px] flex gap-[14px] items-center"><span><img src="/arrow.svg" alt="linkpointer"/></span>Dental Care</p>
                            <p className="cursor-pointer w-[209px] h-[33px] flex gap-[14px] items-center"><span><img src="/arrow.svg" alt="linkpointer"/></span>Opthamology</p>
                            <p className="cursor-pointer w-[209px] h-[33px] flex gap-[14px] items-center"><span><img src="/arrow.svg" alt="linkpointer"/></span>Cardiology</p>
                        </div>
                        <div className="h-[180px] max-md:w-[150px] flex flex-col gap-[25px] items-start justify-between max-md:h-fit">
                            <p className="cursor-pointer w-[209px] h-[33px] flex gap-[14px] items-center"><span><img src="/arrow.svg" alt="linkpointer"/></span>About Us</p>
                            <p className="cursor-pointer w-[209px] h-[33px] flex gap-[14px] items-center"><span><img src="/arrow.svg" alt="linkpointer"/></span>Our Pricing</p>
                            <p className="cursor-pointer w-[209px] h-[33px] flex gap-[14px] items-center"><span><img src="/arrow.svg" alt="linkpointer"/></span>Our Gallery</p>
                            <p className="cursor-pointer w-[209px] h-[33px] flex gap-[14px] items-center"><span><img src="/arrow.svg" alt="linkpointer"/></span>Appointment</p>
                            <p className="cursor-pointer w-[209px] h-[33px] flex gap-[14px] items-center"><span><img src="/arrow.svg" alt="linkpointer"/></span>Privacy Policy</p>
                        </div>
                    </div>
                </div>
                <div className="max-md:text-center w-full h-[60px] max-md:h-fit max-md:pt-[30px] mb-[30px] flex items-end border-t-[1px] border-t-[#FFFFFF1A] font-Poppins font-[400] text-[16px] leading-[28px] tracking-[0.02em] text-[#FFFFFF]">
                    Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
                </div>
            </div>
        </footer>
    )
}
export default Footer
