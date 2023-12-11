import { useState, useEffect, useRef } from 'react'
import { motion } from "framer-motion"
import { IconButton, Modal, Tooltip } from "@mui/material"

import { Heading } from '../components'
import { project1, project2, project3, project4, project5, project6, project7 } from "../assets"
import { Close, Fullscreen, FullscreenExit, East, West, Visibility, GitHub } from "@mui/icons-material"

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react"
import { useSpring } from 'react-spring'
import VanillaTilt from 'vanilla-tilt';
import { Link } from 'react-router-dom'





const Work = () => {

    //////////////////////////////////// VARIABLES ///////////////////////////////////////////////
    const imageContainerRef = useRef(null)
    const sectionRef = useRef()
    const tiltRefs = Array.from({ length: projects.length }, () => useRef(null));
    const circleRefs = Array.from({ length: 5 }, () => useRef(null));

    //////////////////////////////////// STATE ///////////////////////////////////////////////
    const [showImageDetail, setShowImageDetail] = useState(null)
    const [showImageModal, setShowImageModal] = useState(false)
    const [fullScreen, setFullScreen] = useState(false)
    const [currentImage, setCurrentImage] = useState({})
    const [currentSlideIndex, setCurrentSlideIndex] = useState(null)
    const [sectionScrolledHeight, setSectionScrolledHeight] = useState(0)
    const sectionScrolled = useSpring(sectionScrolledHeight)

    //////////////////////////////////////// USE EFFECT //////////////////////////////////////////////
    useEffect(() => {

        const updateHeight = () => {
            const heightInVh = (sectionRef.current.offsetHeight / window.innerHeight) * 100;
            const sectionOffsetTop = sectionRef.current.offsetTop;
            const scrollPosition = window.scrollY - sectionOffsetTop;
            const scrolledPercentage = (scrollPosition / (sectionRef.current.offsetHeight - window.innerHeight)) * 100;

            setSectionScrolledHeight(scrolledPercentage);
            sectionRef.current.style.top = `-${heightInVh - 100}vh`;
        };
        updateHeight();

        window.addEventListener('scroll', updateHeight);
        window.addEventListener('resize', updateHeight);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', updateHeight);
            window.removeEventListener('resize', updateHeight);
        };

    }, []);
    useEffect(() => {
        imageContainerRef.current?.swiper?.slideTo(currentImage.index)
    }, [currentImage])
    useEffect(() => {
        circleRefs.map((circleRef) => {
            if (circleRef.current) {
                VanillaTilt.init(circleRef.current, {
                    max: 25,
                    speed: 400,
                    glare: true,
                    'max-glare': 0.5,
                });

                return () => {
                    circleRef.current?.vanillaTilt?.destroy(); // Cleanup on component unmount
                }
            }
        })
    }, []);
    // useEffect(() => {
    //     if (sectionRef.current) {
    //         VanillaTilt.init(sectionRef.current, {
    //             max: 25,
    //             speed: 400,
    //             glare: true,
    //             'max-glare': 0.5,
    //         });

    //         return () => {
    //             sectionRef.current?.vanillaTilt?.destroy(); // Cleanup on component unmount
    //         }
    //     }
    // }, []);
    //////////////////////////////////// FUNCTIONS ///////////////////////////////////////////////
    const imageClick = (image) => {
        setShowImageModal(true);
        setCurrentImage(image);
    }

    const moveForward = (index) => {
        if (imageContainerRef.current !== null) {
            projects.length == index
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
                imageContainerRef.current.swiper.slideTo(projects.length)            // if current slide is first then move to lasat slide
                :
                imageContainerRef.current.swiper.slideTo(index)        // move to previous slide

        }
    }
    //////////////////////////////////// COMPONENTS ///////////////////////////////////////////////
    const Project = ({ project, tiltRef, index }) => {
        useEffect(() => {
            if (tiltRef.current) {
                VanillaTilt.init(tiltRef.current, {
                    max: 25,
                    speed: 400,
                    glare: true,
                    'max-glare': 0.5,
                });

                return () => {
                    tiltRef.current?.vanillaTilt?.destroy(); // Cleanup on component unmount
                }
            }
        }, []);
        return (
            <motion.div ref={tiltRef} className="w-full md:h-[20rem] sm:h-[17.5rem] h-[15rem] relative flex justify-center items-center ">

                <div className="relative cursor-pointer rounded-xl overflow-hidden w-full h-full " onClick={() => imageClick(project)}>
                    <motion.img
                        key={index}
                        whileHover={{ scale: [1, 1] }}
                        transition={{ duration: 1 }}
                        src={project.image}
                        alt="image6"
                        className="bg-gray w-full h-full "
                    />
                </div>

            </motion.div>
        )
    }





    return (
        <section ref={sectionRef} name="work" className="bg-black flex flex-col justify-between gap-[0rem] z-10 w-full items-center px-[14px] py-[7rem] sticky top-0 sm:px-[3rem] sm:py-[7rem] md:px-14 md:py-[10rem] lg:px-16 ">

            {/* Bubbles */}
            <div ref={circleRefs[0]} style={{ clipPath: `circle(50% at 100% 0%)` }} className="absolute top-0 left-0 bg-green h-full sm:w-screen w-full overflow-hidden shadow-2xl transition-all duration-100" />
            <div ref={circleRefs[1]} style={{ clipPath: `circle(8% at 10% 15%)` }} className="absolute top-0 left-0 bg-green h-full sm:w-screen w-full overflow-hidden shadow-2xl transition-all duration-100" />
            <div ref={circleRefs[2]} style={{ clipPath: `circle(20% at 10% 50%)` }} className="absolute top-0 left-0 bg-white h-full sm:w-screen w-full overflow-hidden shadow-2xl transition-all duration-100" />
            <div ref={circleRefs[3]} style={{ clipPath: `circle(2% at 5% 85%)` }} className="absolute top-0 left-0 bg-green h-full sm:w-screen w-full overflow-hidden shadow-2xl transition-all duration-100" />
            <div ref={circleRefs[4]} style={{ clipPath: `circle(5% at 90% 60%)` }} className="absolute top-0 left-0 bg-white h-full sm:w-screen w-full overflow-hidden shadow-2xl transition-all duration-100" />


            <Heading subHeading='recent work' heading='We love what we do, check out some of our latest works' subHeadingColor='black' headingColor='white' />


            <motion.div
                whileInView={{ translateY: [200, 0], opacity: [0.9, 1] }}
                transition={{ duration: 0.3, type: 'just' }}
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-8 lg:w-[80%] md:w-[88%] sm:w-[95%] w-full relative z-10 lg:pt-[8rem] lg:px-0 md:px-0 "
            >
                {
                    projects.map((project, index) => (
                        <Project key={index} project={project} tiltRef={tiltRefs[index]} index={index} />
                    ))
                }
            </motion.div>







            {/* image showing modal */}
            <Modal
                open={showImageModal}
                onClose={() => setShowImageModal(false)}
                className=" flex justify-center items-center "
            >
                <div className={`relative flex flex-col justify-between md:gap-0 md:pb-0 sm:gap-[1rem] gap-[3rem] p-[1rem] bg-lightGray ${fullScreen ? 'w-[100%] h-[100%]' : 'w-[80%] h-[80%]'} `} >



                    {/* top bar - icons */}
                    <div className="flex justify-between px-[1rem] pb-[8px]  " >
                        <p className="text-textGray text-[20px] " >{currentImage.index + 1}/{projects.length}</p>
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
                        // modules={[Pagination]}
                        className=" text-center h-fit w-full text-lightGray pb-[3rem] md:py-0 sm:py-[4rem] py-[6rem] "
                        onSlideChange={(swiper) => { setCurrentSlideIndex(swiper.activeIndex); setCurrentImage(projects[swiper.activeIndex]) }}
                    >
                        {
                            projects.map((image, index) => (
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
                    <div className="flex flex-col items-center justify-center pb-4 py-2 " >
                        <div className="flex justify-between items-center gap-2 w-full max-w-[600px] ">
                            <h4 className="text-white capitalize sm:text-[20px] " >{currentImage.heading}</h4>
                            <Tooltip title='Visit' placement='top' >
                                <a href={currentImage.src} target='_blank' className='cursor-pointer w-[26px] h-[26px] flex justify-center items-center rounded-full transition-all text-white border-[1px] border-white font-light hover:bg-orange hover:text-white ' >
                                    <Visibility style={{ fontSize: '16px' }} />
                                </a>
                            </Tooltip>
                        </div>
                        <p className="text-textGray max-w-[600px] w-auto text-center sm:text-[18px] " >{currentImage.detail}</p>
                    </div>

                </div>
            </Modal>

        </section>
    )
}


export default Work

// <div className=" relative pt-[8rem] z-10 lg:hidden md:hidden sm:flex sm:flex-col sm:p-[2rem] flex flex-col p-[16px] " >
//     {
//         projects.map((image, index) => (
//             <div key={index} className="relative " onClick={() => { setShowImageModal(true); setCurrentImage(image) }} onMouseEnter={() => setShowImageDetail(image.index)} onMouseLeave={() => setShowImageDetail(null)} >

//                 {
//                     showImageDetail == image.index &&
//                     <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, .8] }} transition={{ duration: 1 }} className=" absolute h-full w-full z-[10] bg-lightGray  " >
//                         <div className="relative flex flex-col justify-between items-start p-[1rem] w-full h-full " >
//                             <AddTwoTone className="absolute top-[50%] right-[50%] transform translate-x-[-50%] translate-y-[-50%] " />

//                             <motion.span
//                                 animate={{ y: [-10, 0] }}
//                                 transition={{ duration: 1 }}
//                                 className="p-[4px] rounded-full "
//                             >
//                                 <Link />
//                             </motion.span>

//                             <motion.div animate={{ y: [10, 0] }} transition={{ duration: 1 }} className="flex flex-col justify-start " >
//                                 <h6 className="text-white text-[20px] uppercase " >{image.heading}</h6>
//                                 <p className="text-textGray text-[16px] capitalize " >{image.subHeading}</p>
//                             </motion.div>

//                         </div>
//                     </motion.div>
//                 }

//                 <div className="overflow-hidden w-full h-full " >
//                     <motion.img
//                         key={index}
//                         whileInView={{ y: [0, 1], opacity: [0, 1] }}
//                         whileHover={{ scale: [1, 1] }}
//                         transition={{ duration: 0.3 }}
//                         src={image2}
//                         alt={`image${index + 1}`}
//                         className="bg-gray w-full h-full "
//                     />
//                 </div>
//             </div>
//         ))
//     }
// </div>




const projects = [
    {
        index: 0,
        createdAt: '2023',
        image: project1,
        src: 'https://growmarketing.netlify.app',
        heading: 'CRM',
        subHeading: 'Customer Relation Management System for Real Estate Agency',
        detail: 'As a CRM Architect & Technical Manager, I specialize in crafting robust Customer Relationship Management (CRM) solutions using the MERN stack. Currently overseeing the entire development process, I am actively involved in resolving any technical challenges that arise, ensuring the seamless functionality and optimal performance of the CRM system. My role encompasses end-to-end responsibility, from initial architecture design to ongoing technical issue resolution, contributing to the success of the CRM project.'
    },
    {
        index: 1,
        createdAt: '2023',
        image: project3,
        src: 'https://deziskin.netlify.app',
        heading: 'Deziskin',
        subHeading: 'An ecommerce website of beauty products',
        detail: 'Deziskin stands as a showcase in the e-commerce realm, a MERN stack-powered website dedicated to a singular, premium product. I spearheaded the end-to-end development, seamlessly integrating MongoDB, Express.js, React, and Node.js to deliver an immersive shopping experience. From intuitive user interfaces to robust backend functionalities, Deziskin embodies my expertise in crafting dynamic, full-stack solutions for streamlined online retail'
    },
    {
        index: 2,
        createdAt: '2023',
        image: project2,
        src: 'https://doctorguide.ai',
        heading: 'guitaristic',
        subHeading: 'branding',
        detail: 'As the lead Frontend Developer for a collaborative AI project, I spearheaded the creation of an intuitive user interface using React.js. With a focus on translating intricate AI functionalities into user-friendly designs, I am currently dedicated to refining and addressing frontend aspects. My role is centered on delivering a polished and visually compelling interface that seamlessly complements the advanced capabilities of our AI tool.'
    },
    {
        index: 3,
        createdAt: '2023',
        image: project4,
        src: 'https://shopy-dashboard.netlify.app/ecommerce',
        heading: 'Shoppy Dashboard',
        subHeading: 'Dashboard application',
        detail: 'The Dashboard Application is a web platform for viewing business data. It shows key metrics like user stats, product info, revenue, and expenses in one place. It\'s user-friendly, offers real-time insights, and helps with decision-making. It\'s useful for startups and big companies, improving productivity through data visualization and analysis.',
    },
    {
        index: 4,
        createdAt: '2023',
        image: project7,
        src: 'https://naumanch.netlify.app/',
        heading: 'Portfolio Website',
        subHeading: 'Portfolio Website',
        detail: 'The Portfolio Website of a Full Stack Developer, built in React and Framer Motion, showcases the developer\'s skills and projects. With an intuitive interface and smooth animations, the website demonstrates the developer\'s expertise in front-end and back-end technologies. Visitors can explore detailed project descriptions and examples of their work, making it an impressive representation of their abilities to potential employers and clients'
    },
    {
        index: 5,
        createdAt: '2023',
        image: project5,
        src: 'https://musif.netlify.app',
        heading: 'Musif',
        subHeading: 'Musif',
        detail: 'The Music Website utilizes third-party APIs to create an engaging platform for music enthusiasts. It offers trending music, top charts, and personalized recommendations, powered by popular music streaming APIs.'
    },
    {
        index: 6,
        createdAt: '2023',
        image: project6,
        src: 'https://ncbank-landing-page.netlify.app/',
        heading: 'Landing Page',
        subHeading: 'Landing Page',
        detail: 'The Bank Landing Page is a user-friendly web interface offering easy access to essential banking services. It showcases account options, loans, credit cards, and investments. With a focus responsive design, it ensures a seamless banking experience on any device.'
    },
    // {
    //     createdAt: '2023',
    //     image: project3,
    //     src:'https://ncexercises.netlify.app/',
    //     heading: 'Exercises',
    //     subHeading: 'Exercises',
    //     detail: 'Designed and developed with ReactJS, the Search-Based Exercise Website is a dynamic web project. It seamlessly integrates third-party services for exercise data, offering users a straightforward and effective platform to search for exercises and access comprehensive information.'
    // },
]


