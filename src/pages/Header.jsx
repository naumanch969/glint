import { useState } from 'react'
import { Link } from "react-scroll"
import { motion } from "framer-motion"
import { Typography } from '@mui/material'
import { Facebook, Twitter, Instagram, KeyboardArrowDown } from "@mui/icons-material"
import { Navbar } from "../components"
import { parallaxImage } from "../assets"

const Header = () => {

    // sm = tablet 
    // md = lare tablet 
    // l = laptop
    // xl = desktop


    return (
        <section
            name="home"
            style={{ backgroundImage: `url(${parallaxImage})` }}
            className={`
                flex flex-col justify-between gap-[10rem] relative z-10 w-full pb-[12rem]
                bg-fixed bg-no-repeat bg-cover   
                px-[14px] pt-[20px] 
                sm:px-[3rem] sm:pt-[20px]  
                md:px-[64px] md:pt-[1.5rem] 
            `}
        >



            {/* logo */}
            <div className="bg-transparent flex justify-between  mt-0 " >
                <div className="flex items-end justify-center " >
                    <h4 className="text-[40px] text-semibold " >Glint<span className="w-[10px] h-[10px] inline-flex ml-[4px] rounded-full bg-green " /></h4>
                </div>
            </div>








            {/* main header content */}
            <motion.div
                whileInView={{ y: [0, 1], opacity: [0, 1] }}
                transition={{ duration: 1, ease: 'linear' }}
                className="
                    flex flex-col gap-[12px]
                    items-center w-full 
                    sm:items-center 
                    md:items-start md:px-0
                    lg:pl-[4rem] lg:px-[64px] 
                "
            >


                {/* subHeading */}
                <h5 className="text-[24px] text-textGray tracking-[1px]  " >Welcome to Glint</h5>



                {/* heading */}
                <div className="
                    w-full flex items-center
                    justify-center
                    sm:justify-center
                    md:justify-between
                " >

                    <h1 className="w-full font-bold md:text-start md:text-[60px] md:w-[45rem]  sm:text-center sm:text-[40px] sm:w-[30rem] text-center  text-[36px] " >
                        We are creative group of people who design influential brands and digital experiences.
                    </h1>
                    <div className=" 
                        flex-col gap-[1rem] 
                        hidden                                  
                        sm:hidden                               
                        md:flex
                      " >
                        <button className="p-[4px] rounded-full border-white border-[3px] flex justify-center items-center " ><Facebook /></button>
                        <button className="p-[4px] rounded-full border-white border-[3px] flex justify-center items-center " ><Twitter /></button>
                        <button className="p-[4px] rounded-full border-white border-[3px] flex justify-center items-center " ><Instagram /></button>
                        <button className="p-[4px] rounded-full border-white border-[3px] flex justify-center items-center " ><Facebook /></button>
                        <button className="p-[4px] rounded-full border-white border-[3px] flex justify-center items-center " ><Twitter /></button>
                    </div>

                </div>




                {/* buttons */}
                <div className="
                    flex  gap-[24px] mt-[2rem] 
                    flex-col justify-center items-center w-full
                    sm:flex-col sm:w-full sm:justify-center sm:items-center
                    md:w-fit md:flex-row md:justify-start 
                " >
                    <Link
                        id="link"
                        to='contact'
                        activeClass="active"
                        smooth={true}
                        spy={true}
                        offset={-100}
                        duration={1000}
                        style={{ transition: 'all 0.5s linear' }}
                        className="
                            text-center cursor-pointer border-[1px] border-white capitalize px-[40px]
                            hover:bg-white hover:text-black 
                            w-[90%] py-[10px]
                            sm:w-[70%] sm:py-[10px]
                            md:w-fit md:py-[16px]
                        "
                    >
                        start a project
                    </Link>

                    <Link
                        id="link"
                        to='about'
                        activeClass="active"
                        smooth={true}
                        spy={true}
                        offset={-100}
                        duration={1000}
                        style={{ transition: 'all 0.5s linear' }}
                        className="
                          text-center cursor-pointer border-[1px] border-white capitalize px-[40px]
                            hover:bg-white hover:text-black 
                            w-[90%] py-[10px]
                            sm:w-[70%] sm:py-[10px]
                            md:w-fit md:py-[16px]
                        "
                    >
                        more about us
                    </Link>

                </div>

            </motion.div>





            {/* bottom left scroll down text button + vertical line */}
            <div className="absolute bottom-0 flex justify-between cursor-pointer md:gap-[2rem] md:right-[3rem] sm:gap-[2rem] sm:right-[3rem] gap-[1rem] right-[2rem] " >
                <Link
                    id="link"
                    to='about'
                    activeClass="active"
                    smooth={true}
                    spy={true}
                    offset={-100}
                    duration={1000}
                    className="flex justify-center items-start md:gap-[8px] sm:gap-[8px] gap-0 "
                >
                    <KeyboardArrowDown className="text-green " />
                    <p className="capitalize text-white " >scroll down</p>
                </Link>
                <hr className="h-[7rem] w-[4px] bg-green " />
            </div>



        </section>
    )
}


export default Header