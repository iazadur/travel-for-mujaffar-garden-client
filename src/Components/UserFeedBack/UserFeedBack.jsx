import React from 'react';
import Bounce from 'react-reveal/Bounce';
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import Heading from '../From/Heading';
import SingleFeedBack from './SingleFeedBack';
SwiperCore.use([Navigation, Pagination, Autoplay]);

const UserFeedBack = () => {
    const feedback = [
        {
            image:"https://i.ibb.co/R4QCmz0/why-moon-11.png",
            username:"Lake View",
            _id:"01",
            btnColor:"#14b9d5",
            review:"this is my first rationg in this world",
            rating:'4.5'
        },
        {
            image:"https://i.ibb.co/R4QCmz0/why-moon-11.png",
            username:"Lake View",
            _id:"03",
            btnColor:"#14b9d5",
            review:"this is my first rationg in this world",
            rating:'5'
        },
        {
            image:"https://i.ibb.co/R4QCmz0/why-moon-11.png",
            username:"Lake View",
            _id:"02",
            btnColor:"#14b9d5",
            review:"this is my first rationg in this world",
            rating:'3.5'
        },
        {
            image:"https://i.ibb.co/R4QCmz0/why-moon-11.png",
            username:"Lake View",
            _id:"04",
            btnColor:"#14b9d5",
            review:"this is my first rationg in this world",
            rating:'4'
        }
    ]
    return (
        <>
            <section className="max-w-screen-xl mx-auto px-6 pb-24">
                {/* heading  */}
                <Heading text="User FeedBack" />
                {/* testimonials  */}
                <Swiper
                    loop={true}
                    className="mySwiper py-6"
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false
                    }}
                    pagination={true} grabCursor={true}
                    slidesPerView={1}
                    speed={600}
                    spaceBetween={20}
                >
                    {feedback.map(item => (
                        <SwiperSlide key={item.id}>
                            <Bounce left>
                                <SingleFeedBack  {...item} />
                            </Bounce>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </>
    );
};

export default UserFeedBack;