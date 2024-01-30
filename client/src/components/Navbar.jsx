import { useState } from "react"
import { Link } from "react-scroll"
import { Link as RouterLink } from 'react-router-dom'
import { motion } from "framer-motion"
import { Close } from '@mui/icons-material'
import { Facebook, Instagram, Twitter, GitHub } from "@mui/icons-material"

const Navbar = ({ showNavbar, setShowNavbar }) => {



    const closeNavbar = () => {
        setShowNavbar(false)
    }

    return (
        <>
            {/* showNavbar && */}
            {
                <motion.nav
                    animate={{ x: [showNavbar ? 300 : 0, showNavbar ? 0 : 300], opacity: [showNavbar ? 0 : 1, showNavbar ? 1 : 0] }}
                    initial={{ delay: 0 }}
                    transition={{ duration: 1 }}
                    end={{ delay: 1 }}
                    className="w-[16rem] z-[100] p-[2rem] fixed top-0 right-0 h-screen bg-darkGray flex flex-col justify-between  "
                >

                    <div className="flex justify-between items-center " >
                        <h6 className="text-green text-[22px] font-semibold " >Navigation</h6>
                        <button onClick={closeNavbar} className="" ><Close /></button>
                    </div>

                    <ul className="flex items-start flex-col gap-[16px] " >
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

                    </ul>

                    <div className="" >
                        <p className="text-start " >Dive into the art of digital craftsmanship. Elevate your online presence with meticulously designed web applications and RESTful APIs. Explore the possibilities of seamless and innovative solutions.</p>
                    </div>

                    <div className="flex justify-between " >
                        <RouterLink to={'https://www.facebook.com/profile.php?id=100072770904288'} className="p-[4px] rounded-full flex justify-center items-center " ><Facebook className="text-[1.5rem] " /></RouterLink>
                        <RouterLink to={'https://www.instagram.com/naumanch969/'} className="p-[4px] rounded-full flex justify-center items-center " ><Twitter className="text-[1.5rem] " /></RouterLink>
                        <RouterLink to={'https://www.linkedin.com/in/nauman-ch-a68668256/'} className="p-[4px] rounded-full flex justify-center items-center " ><Instagram className="text-[1.5rem] " /></RouterLink>
                        <RouterLink to={'https://github.com/naumanch969'} className="p-[4px] rounded-full flex justify-center items-center " ><GitHub className="text-[1.5rem] " /></RouterLink>
                        <RouterLink to={'https://twitter.com/Naumanch969'} className="p-[4px] rounded-full flex justify-center items-center " ><Twitter className="text-[1.5rem] " /></RouterLink>
                    </div>

                </motion.nav>
            }

        </>
    )
}


export default Navbar




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

