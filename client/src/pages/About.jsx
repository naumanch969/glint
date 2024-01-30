
import CountUp from 'react-countup';
import { motion, useScroll } from "framer-motion"
import VisibilitySensor from 'react-visibility-sensor';
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import { profile } from '../assets';

const About = () => {

    ////////////////////////////////////////////////// VARIABLES ///////////////////////////////////////////////
    const sectionRef = useRef()
    const { scrollYProgress, scrollY } = useScroll({ container: sectionRef });

    ////////////////////////////////////////////////// STATES ///////////////////////////////////////////////



    ////////////////////////////////////////////////// USE EFFECTS ///////////////////////////////////////////////
    useEffect(() => {
        const updateHeight = () => {
            const heightInVh = (sectionRef.current.offsetHeight / window.innerHeight) * 100;
            sectionRef.current.style.top = `-${heightInVh - 100}vh`;
        };
        updateHeight();
        window.addEventListener('scroll', updateHeight);

        return () => {
            window.removeEventListener('scroll', updateHeight);
        };
    }, []);


    return (
        <section
            ref={sectionRef}
            name="about"
            style={{
                background: `linear-gradient(45deg, rgb(0 0 0), rgb(8 43 25),rgb(12 147 79),rgb(0, 186, 92))`,
            }}
            className="min-h-[60rem] flex flex-col justify-center gap-[0rem] z-10 w-full pt-[10rem] bg-green sticky top-0 px-[14px] py-[7rem] sm:px-[3rem] sm:py-[7rem] md:px-[64px] md:py-[6rem]"
        >

            <img src={profile} alt="Nauman" className='absolute top-[2rem] lg:left-[-8rem] md:left-[-22rem] h-full object-cover md:block hidden ' />
            {/* top right line */}
            <div className="absolute top-0 md:right-[3rem] sm:right-[3rem] right-[2rem] " >
                <hr className="h-[7rem] w-[4px] bg-white " />
            </div>

            {/* heading */}
            <motion.div
                whileInView={{ y: [0, 1], opacity: [0, 1] }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="flex flex-col justify-center md:items-end items-center "
            >
                <h5 className="uppercase text-black font-semibold tracking-[2px] md:text-[24px] sm:text-[22px] text-[20px] " >Hello There</h5>
                <div className="w-fit flex flex-col md:items-end items-center md:gap-[3rem] sm:gap-[2rem] gap-[1rem] " >
                    <h2 className="w-full capitalize md:text-end items-center font-bold tracking-[2px] md:text-[84px] sm:text-[64px] text-[38px] " >Glint is here</h2>
                    {/* <hr className="bg-white md:w-[120%] sm:w-full w-full " /> */}
                </div>
            </motion.div>

            {/* paragraph text */}
            <motion.div
                whileInView={{ y: [0, 1], opacity: [0, 1] }}
                transition={{ duration: 0.3 }}
                className="xl:pl-[24rem] xl:pr-0"
            >
                <p className='md:text-[24px] sm:text-[20px] text-white md:text-end text-center lg:pl-[7rem] md:pl-[7rem] ' >I'm <span className='font-[cursive] font-bold text-[32px] gradient-text ' >Nauman Chaudhry</span>, a full stack developer having speciality in <span className='font-bold' >MERN</span> and <span className='font-bold' >Next.JS</span>, with a passion for crafting exceptional digital experiences. With over two years of dedicated experience, I've had the privilege of working on a diverse range of projects. These include comprehensive full-stack web applications and meticulously designed RESTful APIs, all powered by technologies like MongoDB, Express.js, React.js, and Node.js.</p>
                <p className='md:text-[24px] sm:text-[20px] text-white md:text-end text-center lg:pl-[16rem] md:pl-[16rem] ' > My commitment to continuous learning keeps me at the forefront of industry trends. I thrive on exploring new horizons in technology and contributing to open-source projects. Being an active part of coding communities brings me joy and enriches my knowledge.</p>
                <p className='md:text-[24px] sm:text-[20px] text-white md:text-end text-center lg:pl-[26rem] md:pl-[18rem] ' >I sincerely appreciate your presence on my portfolio. Whether you have inquiries or a collaborative project in mind, please don't hesitate to reach out. Together, we can shape the future of the digital landscape.</p>
                <p className='md:text-[24px] sm:text-[20px] text-white md:text-end text-center ' >Best regards</p>
                <p className='md:text-[24px] sm:text-[20px] text-white md:text-end text-center ' >Nauman Chaudhry</p>
            </motion.div>



        </section>
    )
}


export default About

const aboutCardsArr = [
    {
        name: 'awards received',
        number: 127,
        hr: true
    },
    {
        name: 'cup of coffees',
        number: 1505,
        hr: true
    },
    {
        name: 'project completed',
        number: 102,
        hr: true
    },
    {
        name: 'happy clients',
        number: 53,
        hr: false
    },
]
// {/* about cards */}
// <motion.div
//     whileInView={{ y: [0, 1], opacity: [0, 1] }}
//     transition={{ duration: 1 }}
//     className="flex justify-around items-start flex-wrap md:gap-[1rem] sm:gap-[1.5rem] gap-[2rem] md:px-[64px] sm:px-[2rem] px-[1rem] "
// >


//     {
//         aboutCardsArr.map((aboutCard, index) => (
//             <div className="min-w-[185px] flex justify-between items-start gap-[2rem] " key={index} >
//                 <div className="flex flex-col justify-center items-center " >
//                     <VisibilitySensor>
//                         {({ isVisible }) =>
//                             <h2 className="capitalize font-bold text-center md:text-[84px] sm:text-[72px] text-[64px] ">
//                                 {isVisible ? <CountUp end={aboutCard.number} duration={2} /> : aboutCard.number}
//                             </h2>
//                         }
//                     </VisibilitySensor>
//                     <h4 className="capitalize text-[24px] text-black font-semibold  text-center " >{aboutCard.name}</h4>
//                 </div>
//                 {/* {aboutCard.hr && <hr className="sm:hidden lg:inline-block h-[6rem] w-[2px] bg-white " />} */}
//             </div>
//         ))
//     }

// </motion.div>