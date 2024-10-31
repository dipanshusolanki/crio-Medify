import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import './Offer.css';
import {useState} from "react";


const Offer = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleCustomPagination = (swiper, current, total) => {
        const dots = [];
        for (let i = 0; i < total; i++) {
            dots.push(
                `<span class="custom-dot ${i === current - 1 ? 'active' : ''}" data-index="${i}"></span>`
            );
        }
        return dots.join('');
    };

    return (
        <section className="container mt-[76px] max-md:mt-[100px] mx-auto">
            <div className="w-full h-fit">
                <Swiper
                    breakpoints={{
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                            slidesPerGroup:3
                        },
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                            slidesPerGroup:1,
                        },
                    }}
                    loop={true}
                    pagination={{
                        clickable: false,
                        el: '.custom-pagination-offer', // Point to an external div for pagination
                        renderCustom: handleCustomPagination, // Use custom render
                    }}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    modules={[Pagination]}
                    className="myswiper max-md:w-[370px] rounded-[24px]"
                >
                    <SwiperSlide className=""><img src="/image%201.png" alt="img1" className="max-md:w-full" width={464}/></SwiperSlide>
                    <SwiperSlide className=""><img src="/image%202.png" alt="img2" className="max-md:w-full" width={464}/></SwiperSlide>
                    <SwiperSlide className=""><img src="/image%203.png" alt="img3" className="max-md:w-full" width={464}/></SwiperSlide>
                    <SwiperSlide className=""><img src="/image%202.png" alt="img2" className="max-md:w-full" width={464}/></SwiperSlide>
                    <SwiperSlide className=""><img src="/image%203.png" alt="img3" className="max-md:w-full" width={464}/></SwiperSlide>
                    <SwiperSlide className=""><img src="/image%202.png" alt="img2" className="max-md:w-full" width={464}/></SwiperSlide>
                    <SwiperSlide className=""><img src="/image%203.png" alt="img3" className="max-md:w-full" width={464}/></SwiperSlide>
                    <SwiperSlide className=""><img src="/image%202.png" alt="img2" className="max-md:w-full" width={464}/></SwiperSlide>
                    <SwiperSlide className=""><img src="/image%203.png" alt="img3" className="max-md:w-full" width={464}/></SwiperSlide>

                </Swiper>
            </div>
            <div className="custom-pagination-offer"></div>
        </section>
    )
}
export default Offer
