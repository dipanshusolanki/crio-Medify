
const Download = () => {
    return (
        <section className="w-[full] h-[542px] max-md:h-fit bg-hero-bg overflow-hidden">
            <div className="container max-md:w-full mx-auto h-full w-[1440px] flex justify-between items-center max-md:py-[50px] max-md:px-[30px]">
                <div className="h-full w-[550px] max-md:hidden">
                    <div className="relative z-10 top-[116px] h-full">
                        <div className="absolute left-0 top-[70px] w-[302px] h-[427px] z-[1]">
                            <img className="w-full h-full" src="/SeekPng%201.png" alt="topPhone"/>
                            <img className="absolute top-[30px] left-[10px] rounded-tr-3xl rounded-tl-3xl"
                                 src="/phoneContent.png" alt="content"/>
                        </div>
                        <div className="absolute left-[200px] w-[302px] h-[427px]">
                            <img className="w-full h-full" src="/SeekPng%201.png" alt="bottomPhone"/>
                            <img className="absolute top-[30px] left-[10px] rounded-tr-3xl rounded-tl-3xl"
                                 src="/phoneContent.png" alt="content"/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col max-md:justify-start max-md:items-center gap-[56px] max-md:gap-[38px] mt-[150px] max-md:mt-0 max-md:w-full max-md:h-fit ">
                    <div className=" flex gap-[19px] items-center max-md:flex-col max-md:justify-start max-md:items-center">
                        <div className="rotate-[79] max-md:hidden">
                            <img src="/Vector.svg" alt="arrow"/>
                        </div>
                        <div className="flex flex-col gap-[13px] max-md:justify-start max-md:items-center max-md:text-center">
                            <p className="font-Poppins max-md:w-fit font-[600] text-[48px] max-md:text-[36px] max-md:leading-[46px] leading-[67px] text-[#1B3C74]">Download
                                the
                                <br/>
                                <span className="text-[#2AA7FF]">Medify </span>
                                App
                            </p>
                            <p className="font-Poppins font-[500] text-[16px] leading-[24px] text-[#414146] mt-[8px]">Get the link to download the app</p>
                            <div className="font-Poppins flex max-md:items-center gap-[47px] max-md:gap-[10px] max-md:mt-[20px]">
                                <div className="w-[436px] h-[49px] max-md:w-[70%] border border-[#F0F0F0] rounded-[8px] flex overflow-hidden">
                                    <div className="w-[55px] h-full bg-[#FAFBFE] border-r-2 border-l-[#E5E6EB] p-[15px] font-[700] text-[14px] leading-[16px]">+91</div>
                                    <input type="text" className="w-full h-full bg-[#FAFBFE] pl-[24px] text-[#B4B4BE] text-[12px] leading-[18px]" placeholder="Enter phone number" />
                                </div>
                                <button className="cursor-pointer w-[121px] h-[49px] max-md:w-[100px] max-md:h-[46px] rounded-[8px] bg-[#2AA8FF] font-[500] text-[16px] max-md:text-[14px] leading-[24px] tracking-[0.02em] text-[#ffffff]">Send SMS</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-[26px] max-md:gap-[16px] ml-[70px] max-md:m-0 max-md:justify-center max-md:items-start">
                        <div className="w-[224px] h-[169px] max-md:h-[69px] max-md:w-[160px]">
                            <img src="/google_play.png.png" alt="google"/>
                        </div>
                        <div className="w-[224px] h-[69px] max-md:h-[69px] max-md:w-[160px]">
                            <img src="/apple_store.png.png" alt="apple"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Download
