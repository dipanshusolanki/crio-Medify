import NewsCard from "./NewsCard.jsx";

const News = () => {
    return (
        <section className="w-full h-[702px] max-md:h-fit py-[12px] max-md:py-[32px] max-md:px-[24px] overflow-hidden">
            <div className="w-[1440px] max-md:w-full mx-auto h-full flex flex-col items-center justify-center max-md:justify-start gap-[40px] overflow-hidden">
                <div className="flex flex-col items-center justify-center gap-[2px]">
                    <p className="font-Poppins font-[600] text-[16px] leading-[27px] text-center text-[#2AA7FF]">Blog & News</p>
                    <p className="font-Poppins font-[600] text-[48px] max-md:text-[32px] leading-[67px] text-center text-[#1B3C74]">
                        Read Our Latest News
                    </p>
                </div>
                <div className="w-full flex items-center justify-between mb-8 max-md:flex-col max-md:gap-[40px]">
                    <NewsCard/>
                    <NewsCard/>
                    <NewsCard/>
                </div>
            </div>
        </section>
    )
}
export default News
