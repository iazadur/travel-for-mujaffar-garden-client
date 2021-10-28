import React from 'react';
import heroImg from '../../asserts/Untitled.jpg'

const Hero = () => {
    return (
        <>
            <img className=" w-screen" src={heroImg} alt="" />
            <div className="" style={{ background: "url(heroImg)" }}>
                <h1 className="text-2xl font-extrabold text-white">hello world</h1>
            </div>
        </>
    );
};

export default Hero;