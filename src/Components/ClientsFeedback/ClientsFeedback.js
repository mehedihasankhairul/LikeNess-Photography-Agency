import React from 'react';
import axios from 'axios';
import './ClientsFeedback.css';
import { useState, useEffect } from 'react';
// import Carousel from 'react-multi-carousel';
// import "react-multi-carousel/lib/styles.css";
import SwiperCore, { Autoplay, Navigation } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';

SwiperCore.use([Autoplay, Navigation]);



const ClientsFeedback = () => {
    const [feedback, setFeedback] = useState([]);


    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                // setFeedback(response.data[0]);
                // console.log(response.data[0]);
                setFeedback(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (

        <div className="clients-feedback flex justify-center">
            <div className=" py-5 container ">
                <div className="md:text-left sm:text-center py-10">
                    <h1 className="text-4xl md:text-4xl text-black-700 mb-1 font-semibold mt-5 pt-5 hover:text-gray-600 hover:underline"> Clients FeedBack </h1>
                </div>

                <div className="">
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
                            delay: 3000,
                            // disableOnInteraction: false,
                            // pauseOnMouseEnter: true,
                        }}
                        spaceBetween={20}
                    >
                        {feedback.map((data) => {
                            return (
                                <div className="">
                                    <SwiperSlide key={data.id}>
                                        <div key={data?.id} className="slider-box p-3">
                                            <div className="flex">
                                                <img
                                                    className="w-14 h-14 object-contain rounded-full" src="https://www.pardot.com/buyer-journey/assets/css/img/img-decision.gif" alt="" />
                                                <div className="">
                                                    <span className="client-name">{data?.name}</span>
                                                    <br />
                                                    <span className="client-title">{data?.username} </span>
                                                </div>
                                            </div>
                                            <p className="client-message">This is the best Photography agency i have ever seen lorem10. Try this one if you need the best click of your memories </p>
                                        </div>
                                    </SwiperSlide>
                                </div>
                            );
                        })}
                    </Swiper>
                </div>

            </div>
        </div >

    );
};

export default ClientsFeedback;