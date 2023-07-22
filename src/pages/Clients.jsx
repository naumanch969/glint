import { Apple, AlternateEmail, BubbleChart, Google, Shield, YouTube, West, East } from "@mui/icons-material"
import { person2, person1, person3, person4 } from "../assets"
import { motion } from "framer-motion"
import { useRef, useState } from 'react'
import { Heading } from "../components"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react"



const Clients = () => {

    const testimonialRef = useRef(null)
    const [currentSlideIndex, setCurrentSlideIndex] = useState(null)



    const moveForward = (index) => {
        if (testimonialRef.current !== null) {
            testimonialsArr.length == index
                ?
                testimonialRef.current.swiper.slideTo(0)            // if current slide is last then move to first slide
                :
                testimonialRef.current.swiper.slideTo(index)        // move to next slide

        }
    }


    const moveBack = (index) => {
        if (testimonialRef.current !== null) {
            index < 0
                ?
                testimonialRef.current.swiper.slideTo(testimonialsArr.length)            // if current slide is first then move to lasat slide
                :
                testimonialRef.current.swiper.slideTo(index)        // move to previous slide

        }
    }




    return (
        <section name='clients' className="
            flex flex-col justify-between items-center gap-[5rem] relative z-10 w-full bg-silver pb-[10rem]
            px-[14px] py-[7rem]
            sm:px-[3rem] sm:py-[7rem]
            md:px-[64px] md:py-[10rem]
        ">



            {/* clients icon */}
            <div className="w-full flex flex-col justify-between items-center gap-[4rem] " >

                <Heading subHeading='our clients' heading='Glint has been honored to partner up with these clients' subHeadingColor='green' headingColor='black' />


                <motion.div
                    whileInView={{ y: [0, 1], opacity: [0, 1] }}
                    transition={{ duration: 1 }}
                    className="flex justify-between items-center w-full "
                >

                    <Swiper
                        ref={testimonialRef}
                        spaceBetween={10}
                        breakpoints={{
                            640: { slidesPerView: 2, spaceBetween: 20, },
                            768: { slidesPerView: 4, spaceBetween: 40, },
                            1024: { slidesPerView: 6, spaceBetween: 50, },
                        }}
                        autoplay={{ delay: 2500, disableOnInteraction: true }}
                        pagination={{ clickable: true, }}
                        modules={[Pagination, Autoplay, Navigation]}
                        className="  w-full text-lightGray pb-[3rem] "
                    >
                        {
                            clientsIcon.map((item, index) => (
                                <SwiperSlide
                                    key={index}
                                    className="flex justify-center items-center text-[20px] w-fit pb-[2rem] "
                                >
                                    <item.icon style={{ fontSize: '120px' }} className="text-textGray hover:text-black text-[120px] " />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>

                </motion.div>


                <hr className="h-[2px]  bg-textGray md:w-[40rem] sm:w-[80%] w-[80%]  " />

            </div>








            {/* testimonials */}
            <motion.div
                whileInView={{ y: [0, 1], opacity: [0, 1] }}
                transition={{ duration: 1 }}
                className="flex justify-between items-center w-full "
            >

                <Swiper
                    ref={testimonialRef}
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{ clickable: true, }}
                    modules={[Pagination]}
                    className=" text-center w-full text-lightGray pb-[3rem] "
                    onSlideChange={(swiper) => setCurrentSlideIndex(swiper.activeIndex)}
                >
                    {
                        testimonialsArr.map((testimonial, index) => (
                            <SwiperSlide key={index} className="flex  flex-col justify-between items-center text-[20px] w-fit md:gap-[3rem] sm:gap-[2rem] gap-[1rem] " >
                                <div className="w-full flex justify-between items-center " >
                                    <button onClick={() => moveBack(currentSlideIndex - 1)} > <West className="text-black  md:text-[32px] sm:text-[24px] text-[20px] " /></button>
                                    <p className=" text-textGray lg:w-[70%] md:text-[32px] md:p-0 sm:text-[24px] sm:p-0 text-[16px] md:px-[10px] sm:px-[10px] px-[2px] " >{testimonial.text}</p>
                                    <button onClick={() => moveForward(currentSlideIndex + 1)}  > <East className="text-black  md:text-[32px] sm:text-[24px] text-[20px] " /></button>
                                </div>
                                <div className="flex flex-col justify-center items-center " >
                                    <img src={testimonial.image} alt="" style={{ width: '5rem', height: '5rem' }} className="rounded-full md:w-[6rem] md:h-[6rem] sm:w-[5rem] sm:h-[5rem] w-[5rem] h-[5rem]  " />
                                    <h5 className="md:text-[24px] sm:text-[22px] text-[18px] font-semibold " >{testimonial.name}</h5>
                                    <h6 className="md:text-[20px] sm:text-[18px] text-[14px] font-medium " >{testimonial.designation}</h6>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

            </motion.div>








            {/* vertical line */}
            <div className="absolute bottom-0 right-[50%] transform translate-x-[-50%] flex justify-between gap-[2rem] " >
                <hr className="h-[7rem] w-[4px] bg-green " />
            </div>

        </section>
    )
}


export default Clients











const testimonialsArr = [
    {
        text: 'Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.',
        name: 'Elen Hallay',
        designation: 'CEO NewTech',
        image: person1
    },
    {
        text: 'Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.',
        name: 'Robert Edolf',
        designation: 'Founder Dev',
        image: person2
    },
    {
        text: 'Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.',
        name: 'Simen Sinek',
        designation: 'Senior Programmer Mozila',
        image: person3
    },
    {
        text: 'Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.',
        name: 'Merry Mukesh',
        designation: 'CEO Fox',
        image: person4
    },
]

const clientsIcon = [
    { icon: Apple },
    { icon: AlternateEmail },
    { icon: BubbleChart },
    { icon: Google },
    { icon: Shield },
    { icon: AlternateEmail },
    { icon: YouTube },
    { icon: BubbleChart },
    { icon: Google }
]