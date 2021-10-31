import React from 'react';
import heroImg from '../../asserts/Untitled.jpg'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

const Hero = () => {

    return (
        <>
            <section className="max-w-screen-xl py-20 mx-auto px-6" style={{ backgroundImage: `url(${heroImg})` }}>
                <div className="grid grid-cols-1  py-12">

                    <div className="order-1 lg:order-1 flex flex-col justify-center h-full space-y-6">

                        <div className="flex flex-col justify-center items-center space-y-2">
                            <Fade left>
                                <h1 className="poppins text-white font-extrabold  text-4xl md:text-8xl leading-relaxed">Muzaffar</h1>
                            </Fade>
                            <Fade right>
                                <p className="text-white text-light text-xl md:text-2xl"> Garden &amp; Resort </p>
                            </Fade>
                            <Fade bottom>
                                <Link to="/service" className="mt-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700" >Explore our Service</Link>
                            </Fade>
                        </div>
                        {/* button  */}

                    </div>





                </div>
            </section>
        </>
    );
};

export default Hero;