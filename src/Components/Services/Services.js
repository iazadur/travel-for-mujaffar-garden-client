import React from 'react';
import Bounce from 'react-reveal/Bounce';
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
// import useFetch from '../../hooks/useFetch';
// import Heading from '../Heading';
import Service from './Service';
SwiperCore.use([Navigation, Pagination, Autoplay]);

const Services = () => {
    // const [data] = useFetch('services');
    const data = [
        {
            id: '01',
            color: '#f76570',
            title:"AUDITORIUM",
            icon:"../../asserts/supper_delux_seminar.jpg",
            description:"The Super Deluxe Seminar Hall, the main auditorium, in a theater-style setting, can comfortably accommodate 250-300 persons. It is fully air-conditi..."
        },
        {
            id: '02',
            color: '#f76570', 
            title:"VIP PICNIC SPOT",
            icon:'../../asserts/Picnic_spot_2017.jpg',
            description:"people can sit idly eat here together,two restroom, two  bathroom. There is a good arrangement for sitting in the Place...."
        },
        {
            id: '03',
            title:"VIP SUIT ROOM",
            icon:'../../asserts/Vip_12.jpg',
            description:"Our VIP room is designed with class and comfort to offer top standard accommodation to those seeking bigger space, king size bed, affordable luxury an..."
        },
        {
            id: '04',
            title:"AUDITORIUM",
            icon:"../../asserts/supper_delux_seminar.jpg",
            description:"The Super Deluxe Seminar Hall, the main auditorium, in a theater-style setting, can comfortably accommodate 250-300 persons. It is fully air-conditi..."
        },
        {
            id: '05',
            title:"VIP PICNIC SPOT",
            icon:'../../asserts/Picnic_spot_2017.jpg',
            description:"people can sit idly eat here together,two restroom, two  bathroom. There is a good arrangement for sitting in the Place...."
        },
        {
            id: '06',
            title:"VIP SUIT ROOM",
            icon:'../../asserts/Vip_12.jpg',
            description:"Our VIP room is designed with class and comfort to offer top standard accommodation to those seeking bigger space, king size bed, affordable luxury an..."
        },
    ]

    return (
        <section className="max-w-screen-xl mx-auto px-6 py-6 pb-24">
            {/* heading  */}
            {/* <Heading title="Services" /> */}

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
                {data.map(service => (
                    <SwiperSlide key={service.id}>
                        <Bounce left>
                            <Service  {...service} />
                        </Bounce>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Services
