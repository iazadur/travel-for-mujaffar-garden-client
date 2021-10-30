import React, { useEffect, useState } from 'react';
import Bounce from 'react-reveal/Bounce';
import { css } from "@emotion/react";
import PropagateLoader from "react-spinners/PropagateLoader";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import Heading from '../From/Heading';


import Service from './Service';
SwiperCore.use([Navigation, Pagination, Autoplay]);
const axios = require('axios');

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/services')
            .then(function (response) {
                setServices(response.data)
            })
    }, [])


    const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;
    return (
        <>
            {
                services.length === 0 ?
                    <div className="flex flex-col items-center justify-center h-screen">
                        <PropagateLoader color="#14b9d5" css={override} size={25} />

                    </div> :
                    <section className="max-w-screen-xl mx-auto px-6 py-6 pb-24">
                        {/* heading  */}
                        <Heading text="Services" />

                        {/* services  */}
                        <Swiper
                            className="mySwiper py-12"
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false
                            }}
                            pagination={true} grabCursor={true}
                            slidesPerView={3}
                            speed={400}
                            spaceBetween={20}
                            breakpoints={{
                                500: {
                                    slidesPerView: 1,

                                },
                                700: {
                                    slidesPerView: 2
                                },
                                1024: {
                                    slidesPerView: 3
                                }
                            }}
                        >
                            {services.map(service => (
                                <SwiperSlide key={service._id}>
                                    <Bounce left>
                                        <Service  {...service} />
                                    </Bounce>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </section>
            }

        </>
    )
}

export default Services
