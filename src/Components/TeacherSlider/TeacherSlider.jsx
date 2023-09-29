
import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

import './teacherStyle.css';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import TopSection from '../TopSection/TopSection';
const TeacherSlider = () => {
    const [swiperRef, setSwiperRef] = useState(null);

    let appendNumber = 4;
    let prependNumber = 1;

    const prepend2 = () => {
        swiperRef.prependSlide([
            '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
            '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
        ]);
    };

    const prepend = () => {
        swiperRef.prependSlide(
            '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
        );
    };

    const append = () => {
        swiperRef.appendSlide(
            '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
        );
    };

    const append2 = () => {
        swiperRef.appendSlide([
            '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
            '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
        ]);
    };
    return (
        <div className='pt-16'>
            <div>
                <TopSection headline={"Our Certified Teachers"} paragraph={''}></TopSection>
            </div>
            <div className='mt-16'>
                <Swiper
                    onSwiper={setSwiperRef}
                    slidesPerView={3}
                    centeredSlides={true}
                    spaceBetween={30}
                    pagination={{
                        type: 'fraction',
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide className='bg-green-400'>
                        <div className=''>
                            asdf
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg-green-400'>Slide 2</SwiperSlide>
                    <SwiperSlide className='bg-green-400'>Slide 3</SwiperSlide>
                    <SwiperSlide className='bg-green-400'>Slide 4</SwiperSlide>
                    <SwiperSlide className='bg-green-400'>Slide 5</SwiperSlide>
                    <SwiperSlide className='bg-green-400'>Slide 6</SwiperSlide>
                </Swiper>
            </div>


        </div>
    );
};

export default TeacherSlider;