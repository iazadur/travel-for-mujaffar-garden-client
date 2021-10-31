import axios from 'axios';
import React, { useEffect, useState } from 'react';
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
    const [feedBack, setFeedback] = useState([])
    // const feedback = [
        



    //     {
    //         image:"https://i.ibb.co/Php9bbh/arafat.jpg",
    //         username:"Arafat",
    //         _id:"01",
    //         btnColor:"#14b9d5",
    //         review:"I have visited one of the best resort in Bangladesh.The environment was fantastic.We enjoyed here lot.Staff ware very friendly.They have nice natural swimming pool and we enjoyed a movie at Cineplex it was amazing .Sound system and projection was very good.We got a very welcome reception and all of the services.We recommended to come hare and we will come hare again.",
    //         rating:'4.5'
    //     },
    //     {
    //         image:"https://i.ibb.co/5s5P3J2/zahid.jpg",
    //         username:"Zahid",
    //         _id:"03",
    //         btnColor:"#14b9d5",
    //         review:"I have visited one of the best resort in Bangladesh.The environment was fantastic.We enjoyed here lot.Staff ware very friendly.They have nice natural swimming pool and we enjoyed a movie at Cineplex it was amazing .Sound system and projection was very good.We got a very welcome reception and all of the services.We recommended to come hare and we will come hare again.",
    //         rating:'5'
    //     },
    //     {
    //         image:"https://i.ibb.co/RP5b1wm/zunayed.jpg",
    //         username:"Zunayed",
    //         _id:"02",
    //         btnColor:"#14b9d5",
    //         review:"this is my first rationg in this world",
    //         rating:'3.5'
    //     },
    //     {
    //         image:"https://i.ibb.co/QMQ7K1x/azad.jpg",
    //         username:"AZAD",
    //         _id:"02",
    //         btnColor:"#14b9d5",
    //         review:"this is my first rationg in this world",
    //         rating:'3.5'
    //     }
    // ]

    useEffect(() => {
        axios.get('http://localhost:5000/feedBack')
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