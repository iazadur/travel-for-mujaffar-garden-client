import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Hero from '../../Components/Hero/Hero';
import OurDestinations from '../../Components/OurDestinations/OurDestinations';
import Services from '../../Components/Services/Services';
import UserFeedBack from '../../Components/UserFeedBack/UserFeedBack';
// import slider from '../../Components/Services/slider';

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Services />
            <OurDestinations />
            <UserFeedBack />
            <Footer />
        </>
    );
};

export default Home;