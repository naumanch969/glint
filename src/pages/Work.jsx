import { useState, useEffect, useRef } from 'react'
import { motion } from "framer-motion"
import Masonry from "react-responsive-masonry"
import { Modal } from "@mui/material"
import { Link, AddTwoTone } from "@mui/icons-material"

import { Heading } from '../components'
import { image1, image2, image3, image4, image5, image6 } from "../assets"
import { Close, Fullscreen, FullscreenExit, East, West } from "@mui/icons-material"

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react"




const Work = () => {

    const imageContainerRef = useRef(null)


    const [showImageDetail, setShowImageDetail] = useState(null)
    const [showImageModal, setShowImageModal] = useState(false)

    const [fullScreen, setFullScreen] = useState(false)

    const [currentImage, setCurrentImage] = useState({})
    const [currentSlideIndex, setCurrentSlideIndex] = useState(null)



    useEffect(() => {
        imageContainerRef.current?.swiper?.slideTo(currentImage.index)
    }, [currentImage])


    const imageClick = (image) => {
        setShowImageModal(true);
        setCurrentImage(image);
    }

    const moveForward = (index) => {
        if (imageContainerRef.current !== null) {
            images.length == index
                ?
                imageContainerRef.current.swiper.slideTo(0)            // if current slide is last then move to first slide
                :
                imageContainerRef.current.swiper.slideTo(index)        // move to next slide

        }
    }

    const moveBack = (index) => {
        if (imageContainerRef.current !== null) {
            index < 0
                ?
                imageContainerRef.current.swiper.slideTo(images.length)            // if current slide is first then move to lasat slide
                :
                imageContainerRef.current.swiper.slideTo(index)        // move to previous slide

        }
    }





    return (
        <section name="work" className="   
            flex flex-col justify-between gap-[0rem] relative z-10 w-full items-center bg-white  
            px-[14px] py-[7rem]
            sm:px-[3rem] sm:py-[7rem]
            md:px-[64px] md:py-[10rem]
            ">

            <div className="absolute top-0 left-0 bg-black h-screen w-screen " />

            <Heading subHeading='recent work' heading='We love what we do, check out some of our latest works' subHeadingColor='green' headingColor='white' />






            {/* masonry images - only for large tablets and laptops - md */}
            <div className="relative z-10 xl:px-[3rem] lg:pt-[8rem] lg:w-[80%] lg:px-0 md:w-[90%] md:px-0 md:block sm:hidden hidden " >
                <Masonry columnsCount={2} >
                    {
                        images.map((image, index) => (
                            <div key={index} className="relative cursor-pointer " onClick={() => imageClick(image)} onMouseEnter={() => setShowImageDetail(image.index)} onMouseLeave={() => setShowImageDetail(null)} >

                                {
                                    showImageDetail == image.index &&
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, .8] }} transition={{ duration: 1 }} className=" absolute h-full w-full z-[10] bg-lightGray  " >
                                        <div className="relative flex flex-col justify-between items-start p-[1rem] w-full h-full " >
                                            <AddTwoTone className="absolute top-[50%] right-[50%] transform translate-x-[-50%] translate-y-[-50%] " />

                                            <motion.span
                                                animate={{ y: [-10, 0] }}
                                                transition={{ duration: 1 }}
                                                className="p-[4px] rounded-full "
                                            >
                                                <Link />
                                            </motion.span>

                                            <motion.div animate={{ y: [10, 0] }} transition={{ duration: 1 }} className="flex flex-col justify-start " >
                                                <h6 className="text-white text-[20px] uppercase " >{image.heading}</h6>
                                                <p className="text-textGray text-[16px] capitalize " >{image.subHeading}</p>
                                            </motion.div>

                                        </div>
                                    </motion.div>
                                }

                                <div className="overflow-hidden w-full h-full " >
                                    <motion.img
                                        key={index}
                                        whileInView={{ y: [0, 1], opacity: [0, 1] }}
                                        whileHover={{ scale: [1, 1] }}
                                        transition={{ duration: 1 }}
                                        src={image.image}
                                        alt="image6"
                                        className="bg-gray w-full h-full "
                                    />
                                </div>
                            </div>
                        ))
                    }
                </Masonry>
            </div>









            {/* flex-col images - for mobile phone and small tablets - sm and xs (less than sm) */}
            <div className=" relative pt-[8rem] z-10 lg:hidden md:hidden sm:flex sm:flex-col sm:p-[2rem] flex flex-col p-[16px] " >
                {
                    images.map((image, index) => (
                        <div key={index} className="relative " onClick={() => { setShowImageModal(true); setCurrentImage(image) }} onMouseEnter={() => setShowImageDetail(image.index)} onMouseLeave={() => setShowImageDetail(null)} >

                            {
                                showImageDetail == image.index &&
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, .8] }} transition={{ duration: 1 }} className=" absolute h-full w-full z-[10] bg-lightGray  " >
                                    <div className="relative flex flex-col justify-between items-start p-[1rem] w-full h-full " >
                                        <AddTwoTone className="absolute top-[50%] right-[50%] transform translate-x-[-50%] translate-y-[-50%] " />

                                        <motion.span
                                            animate={{ y: [-10, 0] }}
                                            transition={{ duration: 1 }}
                                            className="p-[4px] rounded-full "
                                        >
                                            <Link />
                                        </motion.span>

                                        <motion.div animate={{ y: [10, 0] }} transition={{ duration: 1 }} className="flex flex-col justify-start " >
                                            <h6 className="text-white text-[20px] uppercase " >{image.heading}</h6>
                                            <p className="text-textGray text-[16px] capitalize " >{image.subHeading}</p>
                                        </motion.div>

                                    </div>
                                </motion.div>
                            }

                            <div className="overflow-hidden w-full h-full " >
                                <motion.img
                                    key={index}
                                    whileInView={{ y: [0, 1], opacity: [0, 1] }}
                                    whileHover={{ scale: [1, 1] }}
                                    transition={{ duration: 1 }}
                                    src={image.image}
                                    alt="image6"
                                    className="bg-gray w-full h-full "
                                />
                            </div>
                        </div>
                    ))
                }
            </div>


            {/* image showing modal */}
            <Modal
                open={showImageModal}
                onClose={() => setShowImageModal(false)}
                className=" flex justify-center items-center "
            >
                <div className={`relative flex flex-col justify-between md:gap-0 md:pb-0 sm:gap-[1rem] gap-[3rem] p-[1rem] bg-lightGray ${fullScreen ? 'w-[100%] h-[100%]' : 'w-[80%] h-[80%]'} `} >



                    {/* top bar - icons */}
                    <div className="flex justify-between px-[1rem] pb-[8px]  " >
                        <p className="text-textGray text-[20px] " >{currentImage.index + 1}/{images.length}</p>
                        <div className="flex justify-between items-center gap-[1rem] " >
                            {fullScreen
                                ?
                                <FullscreenExit onClick={() => setFullScreen(false)} className="cursor-pointer text-textGray text-[24px] " />
                                :
                                <Fullscreen onClick={() => setFullScreen(true)} className="cursor-pointer text-textGray text-[24px] " />
                            }
                            <Close onClick={() => setShowImageModal(false)} className="cursor-pointer text-textGray text-[24px] " />
                        </div>
                    </div>


                    <Swiper
                        ref={imageContainerRef}
                        slidesPerView={1}
                        spaceBetween={10}
                        initialSlide={currentImage.index}
                        pagination={{ clickable: true, }}
                        modules={[Pagination]}
                        className=" text-center h-fit w-full text-lightGray pb-[3rem] md:py-0 sm:py-[4rem] py-[6rem] "
                        onSlideChange={(swiper) => { setCurrentSlideIndex(swiper.activeIndex); setCurrentImage(images[swiper.activeIndex]) }}
                    >
                        {
                            images.map((image, index) => (
                                <SwiperSlide key={index} className=" " >
                                    <div className="md:h-full md:gap-0 sm:h-full sm:gap-0 h-full gap-[10px] w-full flex justify-between items-center " >
                                        <button onClick={() => moveBack(currentSlideIndex - 1)} > <West className="text-white  md:text-[32px] sm:text-[24px] text-[20px] " /></button>
                                        <div className=" flex justify-center items-center md:h-fit sm:h-fit h-full " >
                                            <img src={image.image} className={`${fullScreen ? ' md:h-[25rem] sm:h-[20rem] h-full ' : 'md:h-[20rem] sm:h-[16rem] h-full '} w-auto `} />
                                        </div>
                                        <button onClick={() => moveForward(currentSlideIndex + 1)}  > <East className="text-white  md:text-[32px] sm:text-[24px] text-[20px] " /></button>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>

                    {/* detail text */}
                    <div className="flex flex-col items-center justify-center pb-[1rem] px-[2rem] " >
                        <h4 className="text-white capitalize sm:text-[20px] " >{currentImage.heading}</h4>
                        <p className="text-textGray max-w-[600px] w-auto text-center sm:text-[18px] " >{currentImage.detail}</p>
                    </div>

                </div>
            </Modal>



        </section>
    )
}


export default Work


const images = [
    {
        index: 0,
        image: image1,
        heading: 'shutterburg',
        subHeading: 'branding',
        detail: 'Nemo cupiditate ab quibusdam quaerat impedit magni. EQuo delectus est. Maiores voluptas ab sit natus '
    },
    {
        index: 1,
        image: image2,
        heading: 'the beetle',
        subHeading: 'branding',
        detail: 'Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est.  '
    },
    {
        index: 2,
        image: image3,
        heading: 'grow green',
        subHeading: 'branding',
        detail: 'Nemo cupiditate ab quibusdam quaerat impedi ntium. Quo delectus est. Maiores voluptas ab sit natus absitnatus absitnatus '
    },
    {
        index: 3,
        image: image4,
        heading: 'woodcruft',
        subHeading: 'branding',
        detail: 'Nemo cupiditate ab quibusdam quaerat o delectus est. sum laudantium. Quo delectus est.  Maiores voluptas   '
    },
    {
        index: 4,
        image: image5,
        heading: 'guitaristic',
        subHeading: 'branding',
        detail: 'Nemo cupiditate ab quibusdam quae voluptas ab sit natus impedit magni. Earum suscipit ipsum  ipsum laudantium . '
    },
    {
        index: 5,
        image: image6,
        heading: 'palmeira',
        subHeading: 'branding',
        detail: 'Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est.   '
    }
]