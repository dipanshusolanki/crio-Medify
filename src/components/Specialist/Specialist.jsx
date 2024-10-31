import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import './specialist.css'
import SpecialistCard from "./SpecialistCard.jsx";

import Ahmad from "../../../public/ahmad.png"
import Heena from "../../../public/heena.png"
import Ankur from "../../../public/ankur.png"
import {useState} from "react";




const Specialist = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleCustomPagination = (swiper, current, total) => {
        // Render pagination with custom active styles
        const dots = [];
        for (let i = 0; i < total; i++) {
            dots.push(
                `<span class="custom-dot ${i === current - 1 ? 'active' : ''}" data-index="${i}"></span>`
            );
        }
        return dots.join('');
    };

    return (
        <section className="w-full h-[819px] max-md:h-fit">
            <div className="w-[1440px] max-md:w-full h-fit pt-[60px] max-md:py-[50px] max-md:pt-[35px] max-md:px-[20px] mx-auto max-md:flex max-md:flex-col max-md:justify-start max-md:items-center">
                <p className="font-Poppins font-[600] text-[48px] max-md:text-[32px] leading-[67px] text-center text-[#1B3C74]">
                    Our Medical Specialist
                </p>
                <div className="w-full h-full pt-[60px] max-md:pt-[40px]">
                    <Swiper
                        breakpoints={{
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 110,
                                slidesPerGroup:3
                            },
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 50,
                                slidesPerGroup:1,
                            },
                        }}
                        // centeredSlides={true}
                        loop={true}
                        pagination={{
                            clickable: false,
                            el: '.custom-pagination', // Point to an external div for pagination
                            renderCustom: handleCustomPagination, // Use custom render
                        }}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        modules={[Pagination]}
                        className="myswiper max-md:w-[370px]"
                    >
                        <SwiperSlide className="">
                            <SpecialistCard
                                specialist={{name: "Dr. Ahmad Khan", specialisation: "Neurologist", profile: Ahmad}}/>
                        </SwiperSlide>
                        <SwiperSlide className="">
                            <SpecialistCard specialist={{
                                name: "Dr. Heena Sachdeva",
                                specialisation: "Orthopadics",
                                profile: Heena
                            }}/>
                        </SwiperSlide>
                        <SwiperSlide className="">
                            <SpecialistCard
                                specialist={{name: "Dr. Ankur Sharma", specialisation: "Medicine", profile: Ankur}}/>
                        </SwiperSlide>
                        <SwiperSlide className="">
                            <SpecialistCard
                                specialist={{name: "Dr. Ahmad Khan", specialisation: "Neurologist", profile: Ahmad}}/>
                        </SwiperSlide>
                        <SwiperSlide className="">
                            <SpecialistCard specialist={{
                                name: "Dr. Heena Sachdeva",
                                specialisation: "Orthopadics",
                                profile: Heena
                            }}/>
                        </SwiperSlide>
                        <SwiperSlide className="">
                            <SpecialistCard
                                specialist={{name: "Dr. Ankur Sharma", specialisation: "Medicine", profile: Ankur}}/>
                        </SwiperSlide><SwiperSlide className="">
                        <SpecialistCard
                            specialist={{name: "Dr. Ahmad Khan", specialisation: "Neurologist", profile: Ahmad}}/>
                    </SwiperSlide>
                        <SwiperSlide className="">
                            <SpecialistCard specialist={{
                                name: "Dr. Heena Sachdeva",
                                specialisation: "Orthopadics",
                                profile: Heena
                            }}/>
                        </SwiperSlide>
                        <SwiperSlide className="">
                            <SpecialistCard
                                specialist={{name: "Dr. Ankur Sharma", specialisation: "Medicine", profile: Ankur}}/>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="custom-pagination"></div>
            </div>
        </section>
    )
}
export default Specialist
