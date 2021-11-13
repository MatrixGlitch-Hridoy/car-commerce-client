import React from 'react';
import Banner from '../components/Banner';
import Cars from '../components/Cars';
import Contact from '../components/Contact';
import Reviews from '../components/Reviews';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Cars/>
            <Reviews/>
            <Contact/>
        </div>
    );
};

export default Home;