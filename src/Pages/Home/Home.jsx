import React from 'react';
import AllSummarySection from '../../Components/AllSummarySection/AllSummarySection';
import Banner from '../../Components/Banner/Banner';
import ChooseUs from '../../Components/ChooseUs/ChooseUs';
import HIghlightNotice from '../../Components/HIghlightNotice/HIghlightNotice';
import Slider from '../../Components/Slider/Slider';

const Home = () => {
    return (
        <div>
            <div className='container mx-auto px-2'>

                <Slider></Slider>
            </div>
            <HIghlightNotice></HIghlightNotice>
            <div className='container mx-auto px-2 my-16'>
                <Banner></Banner>
            </div>
            <hr />
            <div>
                <AllSummarySection></AllSummarySection>
            </div>
            <hr />
            <div className='container mx-auto px-2 my-16'>
                <ChooseUs></ChooseUs>
            </div>
        </div>
    );
};

export default Home;