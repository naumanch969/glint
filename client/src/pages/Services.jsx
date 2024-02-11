import { FormatPaint, Campaign, Public, DeveloperBoard, ViewInAr, Inbox } from "@mui/icons-material"

import { Heading, ServiceCard } from "../components"
import { useEffect, useRef } from "react";



const Services = () => {

    //////////////////////////////////////// VARIABLES //////////////////////////////////////////////
    const sectionRef = useRef()

    //////////////////////////////////////// USE EFFECT //////////////////////////////////////////////
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
        <section ref={sectionRef} name="services" className="
            flex flex-col justify-between gap-[0rem] z-10 w-full
            bg-white sticky top-0
            px-[14px] py-[7rem]
            sm:px-[3rm] sm:py-[7rem]
            md:px-[64px] md:py-[10rem]
        "        >


            <Heading subHeading='what we do' heading='We’ve got everything you need to launch and grow your business' subHeadingColor='green' headingColor='black' />

            {/* all services cards */}
            <div className="w-full pt-[5rem] flex flex-wrap xl:px-[4rem] lg:px-0 md:px-0 sm:px-0  "            >
                {
                    servicesArr.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))
                }
            </div>


        </section>
    )
}


export default Services


const servicesArr = [
    {
        icon: FormatPaint,
        title: 'MERN Stack',
        text: 'Experience the synergy of MERN Stack Development with our expertise. From MongoDB\'s flexibility to Express.js\' streamlined backend, React\'s interactive frontend, and Node.js\' scalable runtime – we weave a seamless, full-stack narrative. Elevate your project with a technology stack that harmonizes innovation and efficiency.'
    },
    {
        icon: FormatPaint,
        title: 'Web Design',
        text: 'Discover the artistry of web design where seamless user experiences meet captivating aesthetics. Our designs are not just pixels on a screen; they\'re pathways to engagement and visual storytelling. Step into a digital realm where every click unveils a journey of innovation and creativity.'
    },
    {
        icon: Inbox,
        title: 'Frontend Development',
        text: 'Embark on a journey of Frontend Development excellence with us. We sculpt dynamic and responsive user interfaces, marrying form with function. From pixel-perfect designs to seamless interactions, we code experiences that captivate and interfaces that resonate. Join us at the forefront of web innovation.'
    },
    {
        icon: Campaign,
        title: 'Backend Development',
        text: 'Dive into the robust world of Backend Development with us. Behind every seamless user experience lies a powerful and scalable backend architecture. We engineer data-driven solutions, ensuring your platform operates with efficiency and security. Let us shape the backbone of your digital ambitions, where innovation meets reliability.'
    }, 
]