import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import Rating from 'react-rating';
import Heading from '../From/Heading';
import Fade from 'react-reveal/Fade';

const OurDestinations = () => {
    const [services,setServices] = useState([])
    // const services = [
    //     {
    //         Image: "https://i.ibb.co/16JtSFv/Mandarbaria-beach.jpg",
    //         Title: "Mandarbaria beach",
    //         _id: "01",
    //         btnColor: "#f76570",
    //         rating: '3.9',
    //         ratUsers: '19',
    //         tag: "Beach"
    //     },
    //     {
    //         Image: "https://i.ibb.co/Fm0fNGf/Ishwaripur-Hammam-Khana.jpg",
    //         Title: "Ishwaripur Hammam Khana",
    //         _id: "02",
    //         btnColor: "#ba71da",
    //         rating: '4.4',
    //         ratUsers: '198',
    //         tag: "zoo"
    //     },
    //     {
    //         Image: "https://i.ibb.co/zXNrWkp/Ruposhi-Mangrove-Park.jpg",
    //         Title: "Ruposhi Mangrove Park",
    //         _id: "01",
    //         btnColor: "#14b9d5",
    //         rating: '4.4',
    //         ratUsers: '198',
    //         tag: "Park and garden"
    //     }
    // ]

    useEffect(() => {
        axios.get('http://localhost:5000/destination')
            .then(res => {
                setServices(res.data)
            })
    }, [])
    return (
        <>

            <div className="bg-white">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <Heading text="OUR DESTINATIONS" />

                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                        {services.map((service) => (
                            <Fade bottom>
                            <div class="wrapper antialiased text-gray-900">
                                <div>

                                    <img src={service.img} alt=" random imgee" class="w-full object-cover object-center rounded-lg shadow-md" />

                                    <div class="relative px-4 -mt-10  ">
                                        <div class="p-6 rounded-lg shadow-lg text-white" style={{ backgroundColor: `${service.btnColor}` }} >
                                            

                                            <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">{service.title}</h4>

                                            
                                            <div class="mt-4 flex items-center space-x-3">
                                                <span class=" text-md font-semibold">{service.rating}  </span>
                                                    <span>
                                                    <Rating
                                                        className="pt-2"
                                                        emptySymbol={<AiOutlineStar className="text-gray-600 text-xl" />}
                                                        fullSymbol={<AiFillStar className="text-yellow-400 text-xl" />}
                                                        initialRating={`${service.rating}`}
                                                        readonly
                                                    />
                                                    </span>

                                                <span class="text-sm ">({service.ratUsers} )</span>
                                            </div>
                                            <div class="flex items-baseline">
                                                <span class="text-xs py-1 px-2  inline-block rounded-full  uppercase font-semibold tracking-wide bg-indigo-500">
                                                    {service.tag}
                                                </span>
                                                
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            </Fade>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurDestinations;