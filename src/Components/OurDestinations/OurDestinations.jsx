import React from 'react';
import { Link } from 'react-router-dom';
import Heading from '../From/Heading';

const OurDestinations = () => {
    const services = [
        {
            Image: "https://i.ibb.co/16JtSFv/Mandarbaria-beach.jpg",
            Title: "Mandarbaria beach",
            _id: "01",
            btnColor: "#f76570",
            rating:'3.9',
            ratUsers:'19',
            tag:"Beach"
        },
        {
            Image: "https://i.ibb.co/Fm0fNGf/Ishwaripur-Hammam-Khana.jpg",
            Title: "Ishwaripur Hammam Khana",
            _id: "02",
            btnColor: "#ba71da",
            rating:'4.4',
            ratUsers:'198',
            tag:"zoo"
        },
        {
            Image: "https://i.ibb.co/zXNrWkp/Ruposhi-Mangrove-Park.jpg",
            Title: "Ruposhi Mangrove Park",
            _id: "01",
            btnColor: "#14b9d5",
            rating:'4.4',
            ratUsers:'198',
            tag:"Park and garden"
        }
    ]
    return (
        <>

            <div className="bg-white">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <Heading text="OUR DESTINATIONS" />

                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                        {services.map((service) => (
                            <div class="wrapper antialiased text-gray-900">
                                <div>

                                    <img src={service.Image} alt=" random imgee" class="w-full object-cover object-center rounded-lg shadow-md" />

                                    <div class="relative px-4 -mt-10  ">
                                        <div class="p-6 rounded-lg shadow-lg text-white" style={{backgroundColor:`${service.btnColor}`}} >
                                            <div class="flex items-baseline">
                                                <span class="bg-teal-200  text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                                                    New
                                                </span>
                                                <div class="ml-2  uppercase text-xs font-semibold tracking-wider">
                                                    2 baths  &bull; 3 rooms
                                                </div>
                                            </div>

                                            <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">{service.Title}</h4>

                                            <div class="mt-1">
                                                ${service.Price}
                                                <span class=" text-sm">   /wk</span>
                                            </div>
                                            <div class="mt-4">
                                                <span class=" text-md font-semibold">4/5 ratings </span>
                                                <span class="text-sm ">(based on 234 ratings)</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurDestinations;