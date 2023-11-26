
import CountUp from 'react-countup';
import { motion } from "framer-motion"
import VisibilitySensor from 'react-visibility-sensor';
import { useRef, useState } from 'react';
import { useEffect } from 'react';

const About = () => {

    const sectionRef = useRef()

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
        <section ref={sectionRef} name="about" className="
            flex flex-col justify-between gap-[0rem] z-10 w-full pt-[10rem]
            bg-green sticky top-0
            px-[14px] py-[7rem]
            sm:px-[3rem] sm:py-[7rem]
            md:px-[64px] md:py-[10rem]
        "
        >




            {/* top right line */}
            <div className="absolute top-0 md:right-[3rem] sm:right-[3rem] right-[2rem] " >
                <hr className="h-[7rem] w-[4px] bg-white " />
            </div>

            {/* heading */}
            <motion.div
                whileInView={{ y: [0, 1], opacity: [0, 1] }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                className="flex flex-col justify-center items-center"
            >
                <h5 className="uppercase text-black font-semibold tracking-[2px] md:text-[24px] sm:text-[22px] text-[20px] " >Hello There</h5>
                <div className="w-fit flex flex-col items-center md:gap-[3rem] sm:gap-[2rem] gap-[1rem] " >
                    <h2 className="capitalize text-center font-bold tracking-[2px] md:text-[84px] sm:text-[64px] text-[38px] " >Glint is here</h2>
                    <hr className="bg-white md:w-[120%] sm:w-full w-full " />
                </div>
            </motion.div>

            {/* paragraph text */}
            <motion.div
                whileInView={{ y: [0, 1], opacity: [0, 1] }}
                transition={{ duration: 1 }}
                className="xl:px-[12rem] lg:px-[4rem] md:px-[2rem] md:py-[5rem] sm:py-[4rem] py-[3rem] "
            >
                <p className="md:text-[24px] sm:text-[20px] text-white text-center " >
                    I'm Nauman Chaudhry, a seasoned MERN stack developer with a passion for crafting exceptional digital experiences. With over a year of dedicated experience, I've had the privilege of working on a diverse range of projects. These include comprehensive full-stack web applications and meticulously designed RESTful APIs, all powered by technologies like MongoDB, Express.js, React.js, and Node.js.
                    <br /> My commitment to continuous learning keeps me at the forefront of industry trends. I thrive on exploring new horizons in technology and contributing to open-source projects. Being an active part of coding communities brings me joy and enriches my knowledge.
                    <br /> I sincerely appreciate your presence on my portfolio. Whether you have inquiries or a collaborative project in mind, please don't hesitate to reach out. Together, we can shape the future of the digital landscape.
                    <br /> Best regards, Nauman Chaudhry
                </p>
            </motion.div>

            {/* about cards */}
            <motion.div
                whileInView={{ y: [0, 1], opacity: [0, 1] }}
                transition={{ duration: 1 }}
                className="flex justify-around items-start flex-wrap md:gap-[1rem] sm:gap-[1.5rem] gap-[2rem] md:px-[64px] sm:px-[2rem] px-[1rem] "
            >


                {
                    aboutCardsArr.map((aboutCard, index) => (
                        <div className="min-w-[185px] flex justify-between items-start gap-[2rem] " key={index} >
                            <div className="flex flex-col justify-center items-center " >
                                <VisibilitySensor>
                                    {({ isVisible }) =>
                                        <h2 className="capitalize font-bold text-center md:text-[84px] sm:text-[72px] text-[64px] ">
                                            {isVisible ? <CountUp end={aboutCard.number} duration={2} /> : aboutCard.number}
                                        </h2>
                                    }
                                </VisibilitySensor>
                                <h4 className="capitalize text-[24px] text-black font-semibold  text-center " >{aboutCard.name}</h4>
                            </div>
                            {/* {aboutCard.hr && <hr className="sm:hidden lg:inline-block h-[6rem] w-[2px] bg-white " />} */}
                        </div>
                    ))
                }

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