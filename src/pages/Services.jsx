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
        title: 'Brand Identity',
        text: 'Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.'
    },
    {
        icon: Inbox,
        title: 'Illustration',
        text: 'Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.'
    },
    {
        icon: Campaign,
        title: 'Marketing',
        text: 'Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.'
    },
    {
        icon: Public,
        title: 'Web Design',
        text: 'Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.'
    },
    {
        icon: ViewInAr,
        title: 'Packaging Design',
        text: 'Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.'
    },
    {
        icon: DeveloperBoard,
        title: 'Web Development',
        text: 'Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.'
    },
]