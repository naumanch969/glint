import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Mail } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { Link } from "react-scroll"



const Footer = () => {

    //////////////////////////////////////// VARIABLES //////////////////////////////////////////////
    const sectionRef = useRef()

    //////////////////////////////////////// STATES //////////////////////////////////////////////
    const [email, setEmail] = useState('')

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


    //////////////////////////////////////// FUNCTIONS //////////////////////////////////////////////
    const handleChange = (e) => {
        setEmail(e.target.value)
    }

    return (
        <footer ref={sectionRef} className="
            flex flex-col items-center md:gap-[6rem] sm:gap-[4rem] gap-[3rem] bg-black z-[10] sticky top-0
            px-[14px] pt-[7rem] pb-[3rem]
            sm:px-[3rem] sm:py-[7rem]
            md:px-[7rem] md:py-[3rem]
            lg:px-[12rem] lg:py-[3rem]
         ">


            <motion.div
                whileInView={{ y: [0, 1], opacity: [0, 1] }}
                transition={{ duration: 0.3 }}
                className="flex justify-between w-full lg:flex-row md:flex-col lg:gap-[5rem] md:gap-12 flex-col sm:gap-[4rem] gap-8   "
            >

                {/* left footer content */}
                <div className="flex flex-col lg:w-[50%] md:w-full lg:gap-8 md:gap-4 sm:w-full sm:gap-8 w-full gap-0 " >
                    <h4 className="text-[40px] font-semibold " >Glint<span className="w-[10px] h-[10px] inline-flex ml-[4px] rounded-full bg-green " /></h4>
                    <p className=" text-textGray md:text-[20px] sm:text-[20px] text-[16px]  " >Dive into the art of digital craftsmanship. Elevate your online presence with meticulously designed web applications and RESTful APIs. Explore the possibilities of seamless and innovative solutions.</p>
                </div>

                {/* right footer content */}
                <div className="flex flex-col lg:w-[50%] md:w-full lg:gap-8 md:gap-4 sm:w-full sm:gap-8 w-full gap-0 " >
                    <h5 className="text-[24px] font-semibold " >Get Notified</h5>
                    <div style={{ height: '-webkit-fill-available' }} className="flex flex-col justify-start lg:items-start md:items-center gap-8 " >
                        <p className=" text-textGray md:text-[20px] sm:text-[20px] text-[16px] " >Stay in the loop with the latest tech trends. Subscribe to our newsletter for exclusive insights, updates, and innovative solutions delivered directly to your inbox.</p>

                        {/* subscribe button */}
                        <div className="bg-darkGray flex justify-between items-center p-1 lg:w-full md:w-fit md:h-[56px] sm:w-fit sm:h-[3rem] h-[3rem] rounded-md overflow-hidden " >
                            <IconButton className=" " > <Mail className="text-white" /></IconButton>
                            <input
                                autoComplete='off'
                                type='text'
                                placeholder='Email Address'
                                value={email}
                                style={{ height: '-webkit-fill-available', width: '-webkit-fill-available', border: 'none' }}
                                onChange={handleChange}
                                className='bg-inherit border-b-[1px] border-textGray px-[1rem] h-full outline-none border-none pl-0 rounded-md  '
                            />
                            <button className="uppercase text-white bg-green rounded-md h-full md:px-[15px] sm:px-[15px] px-[10px] " >subscribe</button>
                        </div>

                    </div>
                </div>

            </motion.div>


            {/* copyright */}
            <div className="flex justify-between items-center w-full lg:flex-row flex-col gap-4 ">
                <div className="flex flex-wrap sm:justify-start justify-center items-center">
                    {
                        links.map((item, index) => (
                            <div key={index} className="flex flex-col justify-center items-center w-auto " >
                                <Link
                                    id="link"
                                    to={item.link}
                                    activeClass="active"
                                    smooth={true}
                                    spy={true}
                                    offset={-100}
                                    duration={1000}
                                    onClick={() => setShowNavbar(false)}
                                    className="text-light-white cursor-pointer text-[1rem] px-4 hover:text-[#938f8e] hover:scale-110  "
                                >
                                    {item.title}
                                </Link>
                            </div>))
                    }
                </div>
                <div className='flex items-center md:flex-row md:gap-[1rem] sm:flex-row sm:gap-[1rem] flex-col gap-[4px] ' >
                    <p className="" >© Copyright Glint 2022</p>
                    <hr className="h-[16px] w-[2px] bg-white " />
                    <p className="" >Product of Softech</p>
                </div>
            </div>

        </footer>
    )
}


export default Footer


const links = [
    {
        title: 'Home',
        link: 'home'
    },
    {
        title: 'About',
        link: 'about'
    },
    {
        title: 'Services',
        link: 'services'
    },
    {
        title: 'Work',
        link: 'work'
    },
    {
        title: 'Clients',
        link: 'clients'
    },
    {
        title: 'Contact',
        link: 'contact'
    },

]

