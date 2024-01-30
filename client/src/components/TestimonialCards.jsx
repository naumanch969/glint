import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
// import { EffectCards } from 'swiper/modules';
import { person3 } from "../assets";

export default function Swipe() {
  const testimonials = [
    {
      name: "Huzaifa Ramzan",
      image: person3,
      text: "Working with Nauman was a great experience. He really knows the stuff and gets things done efficiently. Would definitely work together again!",
      company: "Upwork Client",
      title: "Product Manager",
      associatedProject: "CRM",
    },
    {
      name: "Hamza Zulfiqar",
      image: person3,
      text: "Collaborating with Nauman was a pleasure. His expertise and dedication to delivering results stood out.",
      company: "Upwork Client",
      title: "Product Manager",
      associatedProject: "SwiftCart",
    },
    {
      name: "Muneeb",
      image: person3,
      text: "Solid collaboration with the developer. He efficiently translated my concept into a functional project. There were some minor hiccups, but overall, a good experience.",
      company: "Linkedin Client",
      title: "Product Manager",
      associatedProject: "DoctorGuide",
    },
  ];

  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        // modules={[EffectCards]}
        className="mySwiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide
            key={index}
            className="h-full flex flex-col justify-between rounded-xl "
          >
            <div className="flex flex-col gap-4 md:px-10 sm:px-8 px-6 md:pt-10 pt-8 ">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 object-cover rounded-md "
              />
              <p className="text-xl text-black ">{testimonial.text}</p>
            </div>
            <div className="flex justify-between items-center w-full bg-gray-50 md:px-10 sm:px-8 px-6 md:py-5 py-4 ">
              <div className="flex flex-col">
                <h5 className="text-black">{testimonial.name}</h5>
                <span className="text-gray-500 font-light ">
                  {testimonial.title}
                </span>
              </div>
              <div className="">
                <span>{testimonial.company}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
