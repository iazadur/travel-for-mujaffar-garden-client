import React from 'react';
import { Link } from 'react-router-dom';
import Heading from '../From/Heading';

const OurDestinations = () => {
    const services = [
        {
            Image:"https://i.ibb.co/R4QCmz0/why-moon-11.png",
            Title:"Lake View",
            _id:"01",
            btnColor:"#14b9d5",
            Price:"30"
        }
    ]
    return (
        <>
            
            <div className="bg-white">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <Heading text="OUR DESTINATIONS" />

                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {services.map((service) => (
                            <div key={service._id} className="group relative">
                                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                    <img
                                        src={service.Image}
                                        alt={service.Title}
                                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                    />
                                </div>
                                <div className="absolute inset-0 z-0 group-hover:text-white group-hover:bg-indigo-700">
                                    <p className="group-hover:flex z-10 hidden justify-center items-center bg-blue-400 rounded-full p-3">Sundorbon</p>
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