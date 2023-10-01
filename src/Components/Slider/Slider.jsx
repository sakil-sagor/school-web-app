import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './sliderCss.css';
// Import Swiper React components
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';

const Slider = () => {

    return (
        <div className='slider'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper h-[60vh] w-full"
            >
                <SwiperSlide><div><img className='w-full' src={img1} alt="" /></div></SwiperSlide>
                <SwiperSlide><div><img src={img2} alt="" /></div></SwiperSlide>
                <SwiperSlide><div><img src={img1} alt="" /></div></SwiperSlide>
                <SwiperSlide><div><img src={img2} alt="" /></div></SwiperSlide>
                <SwiperSlide><div><img src={img1} alt="" /></div></SwiperSlide>
                <SwiperSlide><div><img src={img2} alt="" /></div></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;