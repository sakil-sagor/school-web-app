
// Import Swiper React components


// Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import React, { useState } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import './teacherStyle.css';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import TitleBoard from '../TopSection/TitleBoard';

// all slider teacher img 
import t1 from "../../assets/t1.jpg";
import t2 from "../../assets/t2.jpg";
import t3 from "../../assets/t3.jpg";
import t4 from "../../assets/t4.jpg";
import t5 from "../../assets/t5.jpg";
import t6 from "../../assets/t6.jpg";

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
                {/* <TopSection headline={"Our Certified Teachers"} paragraph={''}></TopSection> */}
                <TitleBoard titleWord={"Our Certified Teachers"}></TitleBoard>
            </div>
            <div className='mt-16'>
                <Swiper
                    onSwiper={setSwiperRef}
                    slidesPerView={3}
                    centeredSlides={true}
                    spaceBetween={30}
                    // pagination={{
                    //     type: 'fraction',
                    // }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide className='bg-blue-100 shadow-2xl flex-col rounded'>

                        <div className='h-full w-full rounded'>
                            <img className='h-full w-full rounded' src={t1} alt="" />
                        </div>
                        <div className=' py-2 w-full bg-black opacity-60 text-white absolute bottom-0 rounded'>
                            <h3 className='font-bold'>Md Siddik Ali Hasan</h3>
                            <p className='font-semibold text-sm'>Bsc Honon`s(English)</p>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className='bg-blue-100 shadow-2xl flex-col rounded'>

                        <div className='h-full w-full rounded'>
                            <img className='h-full w-full rounded' src={t2} alt="" />
                        </div>
                        <div className=' py-2 w-full bg-black opacity-60 text-white absolute bottom-0 rounded'>
                            <h3 className='font-bold'>Md Siddik Ali Hasan</h3>
                            <p className='font-semibold text-sm'>Bsc Honon`s(English)</p>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className='bg-blue-100 shadow-2xl flex-col rounded'>

                        <div className='h-full w-full rounded'>
                            <img className='h-full w-full rounded' src={t3} alt="" />
                        </div>
                        <div className=' py-2 w-full bg-black opacity-60 text-white absolute bottom-0 rounded'>
                            <h3 className='font-bold'>Md Siddik Ali Hasan</h3>
                            <p className='font-semibold text-sm'>Bsc Honon`s(English)</p>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className='bg-blue-100 shadow-2xl flex-col rounded'>

                        <div className='h-full w-full rounded'>
                            <img className='h-full w-full rounded' src={t4} alt="" />
                        </div>
                        <div className=' py-2 w-full bg-black opacity-60 text-white absolute bottom-0 rounded'>
                            <h3 className='font-bold'>Md Siddik Ali Hasan</h3>
                            <p className='font-semibold text-sm'>Bsc Honon`s(English)</p>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className='bg-blue-100 shadow-2xl flex-col rounded'>

                        <div className='h-full w-full rounded'>
                            <img className='h-full w-full rounded' src={t5} alt="" />
                        </div>
                        <div className=' py-2 w-full bg-black opacity-60 text-white absolute bottom-0 rounded'>
                            <h3 className='font-bold'>Md Siddik Ali Hasan</h3>
                            <p className='font-semibold text-sm'>Bsc Honon`s(English)</p>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className='bg-blue-100 shadow-2xl flex-col rounded'>

                        <div className='h-full w-full rounded'>
                            <img className='h-full w-full rounded' src={t6} alt="" />
                        </div>
                        <div className=' py-2 w-full bg-black opacity-60 text-white absolute bottom-0 rounded'>
                            <h3 className='font-bold'>Md Siddik Ali Hasan</h3>
                            <p className='font-semibold text-sm'>Bsc Honon`s(English)</p>
                        </div>

                    </SwiperSlide>

                </Swiper>
            </div>


        </div>
    );
};

export default TeacherSlider;