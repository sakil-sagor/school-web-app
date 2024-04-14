import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./sliderCss.css";
// Import Swiper React components
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import a1 from "../../assets/a1.jpg";
import b2 from "../../assets/a2.jpg";
import b3 from "../../assets/a3.jpg";
import b4 from "../../assets/a4.jpg";
import b5 from "../../assets/a5.jpg";
import HomeNoticeBoard from "../HomeNoticeBoard/HomeNoticeBoard";

const Slider = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-2  ">
        <div className="slider lg:col-span-8">
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
            className="mySwiper max-h-[60vh]  w-full "
          >
            <SwiperSlide>
              <div className="w-full ">
                <img className="w-full " src={a1} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full ">
                <img className="w-full " src={b2} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full ">
                <img className="w-full " src={b3} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full ">
                <img className="w-full " src={b4} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full ">
                <img className="w-full " src={b5} alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="lg:col-span-4 slider  mt-10  max-h-[60vh]">
          <div className="    w-full  h-full">
            <HomeNoticeBoard></HomeNoticeBoard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
