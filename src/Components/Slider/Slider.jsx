import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './sliderCss.css';
// Import Swiper React components
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import b1 from '../../assets/b1.jpg';
import b2 from '../../assets/b2.jpg';
import b3 from '../../assets/b3.jpg';
import b4 from '../../assets/b4.jpg';
import b5 from '../../assets/b5.jpg';
import MujibArea from '../MujibCorner/MujibArea';

const Slider = () => {

    return (
        <div className=''>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-x-2  '>
                <div className='slider md:col-span-8 lg:col-span-9'>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        // pagination={{
                        //     clickable: true,
                        // }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper max-h-[60vh]  w-full"
                    >
                        <SwiperSlide><div className='w-full '><img className='w-full ' src={b1} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div className='w-full '><img className='w-full ' src={b2} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div className='w-full '><img className='w-full ' src={b3} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div className='w-full '><img className='w-full ' src={b4} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div className='w-full '><img className='w-full ' src={b5} alt="" /></div></SwiperSlide>
                    </Swiper>
                </div>
                <div className='md:col-span-4 lg:col-span-3 slider mt-5'>
                    <div className="    w-full">
                        <MujibArea></MujibArea>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;