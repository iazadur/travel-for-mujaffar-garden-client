import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Bounce from 'react-reveal/Bounce';
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import Heading from '../From/Heading';
import PropLoader from '../PropLoader/PropLoader';
import SingleFeedBack from './SingleFeedBack';
SwiperCore.use([Navigation, Pagination, Autoplay]);

const UserFeedBack = () => {
    const [feedBack, setFeedback] = useState([])


    useEffect(() => {
        axios.get('https://ghastly-warlock-95280.herokuapp.com/feedBack')
            .then(res => {
                setFeedback(res.data)
            })
    }, [])
    return (
        <>
            <section className="max-w-screen-xl mx-auto px-6 pb-24">
                {/* heading  */}
                <Heading text="User FeedBack" />
                {/* testimonials  */}
                {feedBack.length === 0 ?
                    <div className="text-center mt-24 h-screen ">
                        <PropLoader />
                    </div> :
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
                        {feedBack.map(item => (
                            <SwiperSlide key={item._id}>
                                <Bounce left>
                                    <SingleFeedBack  {...item} />
                                </Bounce>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                }

            </section>
        </>
    );
};

export default UserFeedBack;