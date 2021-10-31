import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Heading from '../../Components/From/Heading';
import Header from '../../Components/Header/Header';
import Fade from 'react-reveal/Fade';

const ServicePage = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        axios.get('https://ghastly-warlock-95280.herokuapp.com/services')
            .then(function (response) {
                setServices(response.data)
            })
    }, [])

    return (
        <>
            <Header></Header>
            <div className="bg-white">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <Fade bottom>
                        <Heading text="Our Services" />
                    </Fade>

                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {services.map((service) => (
                            <Fade bottom>
                                <div key={service._id} className="group relative">
                                    <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                        <img
                                            src={service.Image}
                                            alt={service.Title}
                                            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                        />
                                    </div>
                                    <div className="mt-4 flex justify-between" style={{ color: `${service.btnColor}` }}>
                                        <div>
                                            <h3 className="text-sm ">
                                                <Link to={`/bookNow/${service._id}`}>
                                                    <span aria-hidden="true" className="absolute inset-0" />
                                                    {service.Title}
                                                </Link>
                                            </h3>

                                        </div>
                                        <p className="text-sm font-medium ">{service.Price}</p>
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

export default ServicePage;