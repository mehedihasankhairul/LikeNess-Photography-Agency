import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
// import images
import img1 from '../../images/wedding-1.jpg';
import img2 from '../../images/wedding-2.jpg';
import img3 from '../../images/wedding-3.jpg';
import img4 from '../../images/wedding-4.jpg';
import img5 from '../../images/wedding-5.jpg';

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);
SwiperCore.use([EffectCoverflow, Pagination]);


const RecentWork = () => {
    return (
        <>
            <div className="container-lg justify-center">
                <div className="md:text-center sm:text-center">
                    <h1 className="text-4xl md:text-4xl text-black-700 mb-1 font-semibold mt-5 pt-5 hover:text-gray-600 hover:underline"> Our Recent Work </h1>
                </div>
                <div id="RecentWork" className="flex my-5">

                    {/* <Swiper
                    id="mySwiper"
                    grabCursor={true}
                    autoplay={true} centeredSlides={true}
                    slidesPerView={'auto'}
                    // onSwiper={setSwiper}
                    // pagination={pagination}
                    // onSlideChange={(swiper) => console.log(swiper.activeIndex, swiper.realIndex)}
                    // activeSlideKey='3'
                    // onSwiper={(swiper) => console.log(swiper.activeIndex)}

                    className="mySwiper">
                    <SwiperSlide className="customImgMake"><img className="" src={img1} alt="" /></SwiperSlide>
                    <SwiperSlide className="customImgSize"><img className="" src={img2} alt="" /></SwiperSlide>
                    <SwiperSlide className="customImgSize"><img className="" src={img3} alt="" /></SwiperSlide>
                    <SwiperSlide className="customImgSize"><img className="" src={img4} alt="" /></SwiperSlide>
                    <SwiperSlide className="customImgMake"><img className="" src={img5} alt="" /></SwiperSlide>
                </Swiper> */}

                    <div className="justify-center my-3 w-screen">
                        {/* <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
                        "rotate": 50,
                        "stretch": 0,
                        "depth": 100,
                        "modifier": 1,
                        "slideShadows": true
                    }} pagination={true} className="mySwiper"> */}
                        <Swiper
                            // loop
                            navigation={true}
                            slidesPerView={4}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 2,
                                },
                                480: {
                                    slidesPerView: 1,
                                    spaceBetween: 2,
                                },
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 5,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 8,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 10,
                                },
                            }}
                            autoplay={{
                                delay: 2000,
                                // disableOnInteraction: false,
                                // pauseOnMouseEnter: true,
                            }}
                            spaceBetween={20}>
                            <SwiperSlide className="customImgMake"><img className="" src={img1} alt="" /></SwiperSlide>
                            <SwiperSlide className="customImgSize"><img className="" src={img2} alt="" /></SwiperSlide>
                            <SwiperSlide className="customImgSize"><img className="" src={img3} alt="" /></SwiperSlide>
                            <SwiperSlide className="customImgSize"><img className="" src={img4} alt="" /></SwiperSlide>
                            <SwiperSlide className="customImgMake"><img className="" src={img5} alt="" /></SwiperSlide>
                        </Swiper>
                    </div>
                </div>

            </div>
        </>
    );
};

export default RecentWork;