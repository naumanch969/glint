import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/effect-cards';
// import { EffectCards } from 'swiper/modules';
import { person2, person3, person4 } from '../assets';

export default function Swipe() {

    const testimonials = [
        {
            name: 'Huzaifa Ramzan',
            image: person2,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua incididunt ut labore et dolore magna aliqua.',
            company: 'Starlight',
            title: 'Product Manager'
        },
        {
            name: 'Hamza Zulfiqar',
            image: person3,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua incididunt ut labore et dolore magna aliqua.',
            company: 'Starlight',
            title: 'Product Manager'
        },
        {
            name: 'Hassan Ahmad',
            image: person4,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua incididunt ut labore et dolore magna aliqua.',
            company: 'Starlight',
            title: 'Product Manager'
        }
    ]

    return (
        <>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                // modules={[EffectCards]}
                className="mySwiper"
            >
                {
                    testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index} className='h-full flex flex-col justify-between rounded-xl ' >
                            <div className="flex flex-col gap-4 md:px-10 sm:px-8 px-6 md:pt-10 pt-8 ">
                                <img src={testimonial.image} alt={testimonial.name} className='w-16 h-16 object-cover rounded-md ' />
                                <p className='text-xl text-black ' >{testimonial.text}</p>
                            </div>
                            <div className="flex justify-between items-center w-full bg-gray-50 md:px-10 sm:px-8 px-6 md:py-5 py-4 ">
                                <div className="flex flex-col">
                                    <h5 className='text-black' >{testimonial.name}</h5>
                                    <span className='text-gray-500 font-light ' >{testimonial.title}</span>
                                </div>
                                <div className=" ">
                                    <span>{testimonial.company}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
}
