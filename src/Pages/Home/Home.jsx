import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Slider from '../../Components/Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <div>
                <Banner></Banner>
            </div>
        </div>
    );
};

export default Home;