import React from 'react';
import Header from '../../Components/Header/Header';
import Hero from '../../Components/Hero/Hero';
import Services from '../../Components/Services/Services';
// import slider from '../../Components/Services/slider';

const Home = () => {
    return (
        <>
           <Header />
           <Hero />
           <Services />
           {/* <slider></slider> */}
        </>
    );
};

export default Home;