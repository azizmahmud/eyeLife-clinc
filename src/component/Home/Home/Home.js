import React from 'react';
import Doctors from '../../Doctors/Doctors';
import Services from '../../Services/Services';
import VisionCare from '../../VisionCare/VisionCare';
import WhyChooseUs from '../../WhyChooseUs/WhyChooseUs';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <VisionCare></VisionCare>
            <Services></Services>
            <Doctors></Doctors>
            <WhyChooseUs></WhyChooseUs>


        </>

    );
};

export default Home;