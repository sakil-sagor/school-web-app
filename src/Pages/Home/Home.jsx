import React from 'react';
import AllSummarySection from '../../Components/AllSummarySection/AllSummarySection';
import Banner from '../../Components/Banner/Banner';
import ChooseUs from '../../Components/ChooseUs/ChooseUs';
import HIghlightNotice from '../../Components/HIghlightNotice/HIghlightNotice';
import LocationFind from '../../Components/LocationFind/LocationFind';
import Slider from '../../Components/Slider/Slider';
import TeacherSlider from '../../Components/TeacherSlider/TeacherSlider';

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
            <hr />
            <div className='container mx-auto px-2 my-16'>
                <TeacherSlider></TeacherSlider>
            </div>
            <hr />
            <div className='container mx-auto px-2 my-16'>
                <LocationFind></LocationFind>
            </div>
        </div>
    );
};

export default Home;