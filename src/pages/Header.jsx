import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, KeyboardArrowDown } from '@mui/icons-material';
import { getRandomNumber } from '../utils/functions';
import {
    FaHtml5,
    FaNodeJs,
    FaReact,
    FaCss3Alt,
    FaGithub,
    FaGitAlt,
    FaCode,
} from 'react-icons/fa';
import { RiMiniProgramFill } from 'react-icons/ri';
import {
    SiExpress,
    SiTailwindcss,
    SiRedux,
    SiMongodb,
    SiMongoose,
    SiMui,
    SiAxios,
} from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io';
import { TbBrandVscode } from 'react-icons/tb';
import { BsFillFileEarmarkCodeFill } from 'react-icons/bs';
import { useEffect } from 'react';

const Header = () => {
    const icons = [
        { heading: 'React JS', icon: FaReact, color: '#61dafb' },
        { heading: 'Node JS', icon: FaNodeJs, color: '#8cc84b' },
        { heading: 'Express JS', icon: SiExpress, color: '#fff' },
        { heading: 'Tailwind CSS', icon: SiTailwindcss, color: '#38b2ac' },
        { heading: 'React Redux', icon: SiRedux, color: '#764abc' },
        { heading: 'HTML', icon: FaHtml5, color: '#e44d26' },
        { heading: 'CSS', icon: FaCss3Alt, color: '#264de4' },
        { heading: 'Javascript', icon: IoLogoJavascript, color: '#f0db4f' },
        { heading: 'MongoDB', icon: SiMongodb, color: '#4db33d' },
        { heading: 'Mongoose', icon: SiMongoose, color: '#8f4b2d' },
        { heading: 'Github', icon: FaGithub, color: '#fff' },
        { heading: 'Git', icon: FaGitAlt, color: '#f34f29' },
        { heading: 'MUI', icon: SiMui, color: '#0081cb' },
        { heading: 'Axios', icon: SiAxios, color: '#fff' },
        { heading: 'Code', icon: FaCode, color: '#fff' },
        { heading: 'Web Development', icon: BsFillFileEarmarkCodeFill, color: '#f58025' },
        { heading: 'VS Code', icon: TbBrandVscode, color: '#007acc' },
        { heading: 'Web Development', icon: RiMiniProgramFill, color: '#e84393' },
    ];

    const initialBubbles = Array(20).fill('').map(() => ({
        key: getRandomNumber(0, 10),
    }));

    ///////////////////////////////////// STATE ///////////////////////////////////////////
    const [bubbles, setBubbles] = useState(initialBubbles);
    const [shadowComponent, setShadowComponent] = useState('Develop');

    const DESIGN = () => (
        <>
            <div className="bg-gray w-full h-full flex flex-col items-center sm:py-0 py-20 ">
                <span className='text-shadowGray lg:text-[22rem] md:text-[18rem] sm:text-[14rem] text-[9rem] font-[fantasy] md:h-[23rem] sm:h-[18rem] h-[8rem] transition-all ' >{shadowComponent == 'Develop' ? 'D' : shadowComponent == 'Code' ? 'C' : shadowComponent == 'Design' ? 'D' : ''}</span>
                <span className='text-shadowGray lg:text-[22rem] md:text-[18rem] sm:text-[14rem] text-[9rem] font-[fantasy] md:h-[23rem] sm:h-[18rem] h-[8rem] transition-all ' >{shadowComponent == 'Develop' ? 'I' : shadowComponent == 'Code' ? 'D' : shadowComponent == 'Design' ? 'E' : ''}</span>
            </div>
            <div className="bg-gray w-full h-full flex flex-col items-center sm:py-0 py-20 ">
                <span className='text-shadowGray lg:text-[22rem] md:text-[18rem] sm:text-[14rem] text-[9rem] font-[fantasy] md:h-[23rem] sm:h-[18rem] h-[8rem] transition-all ' >{shadowComponent == 'Develop' ? 'E' : shadowComponent == 'Code' ? 'O' : shadowComponent == 'Design' ? 'E' : ''}</span>
                <span className='text-shadowGray lg:text-[22rem] md:text-[18rem] sm:text-[14rem] text-[9rem] font-[fantasy] md:h-[23rem] sm:h-[18rem] h-[8rem] transition-all ' >{shadowComponent == 'Develop' ? 'G' : shadowComponent == 'Code' ? 'E' : shadowComponent == 'Design' ? 'L' : ''}</span>
            </div>
            <div className="bg-gray w-full h-full flex flex-col items-center sm:py-0 py-20 ">
                <span className='text-shadowGray lg:text-[22rem] md:text-[18rem] sm:text-[14rem] text-[9rem] font-[fantasy] md:h-[23rem] sm:h-[18rem] h-[8rem] transition-all ' >{shadowComponent == 'Develop' ? 'S' : shadowComponent == 'Code' ? '' : shadowComponent == 'Design' ? 'V' : ''}</span>
                <span className='text-shadowGray lg:text-[22rem] md:text-[18rem] sm:text-[14rem] text-[9rem] font-[fantasy] md:h-[23rem] sm:h-[18rem] h-[8rem] transition-all ' >{shadowComponent == 'Develop' ? 'N' : shadowComponent == 'Code' ? '' : shadowComponent == 'Design' ? 'O' : ''}</span>
            </div>
            <div className="bg-gray w-full h-full flex flex-col items-center sm:py-0 py-20 ">
                <span className='text-shadowGray lg:text-[22rem] md:text-[18rem] sm:text-[14rem] text-[9rem] font-[fantasy] md:h-[23rem] sm:h-[18rem] h-[8rem] transition-all ' >{shadowComponent == 'Develop' ? '' : shadowComponent == 'Code' ? '' : shadowComponent == 'Design' ? '' : ''}</span>
                <span className='text-shadowGray lg:text-[22rem] md:text-[18rem] sm:text-[14rem] text-[9rem] font-[fantasy] md:h-[23rem] sm:h-[18rem] h-[8rem] transition-all ' >{shadowComponent == 'Develop' ? '' : shadowComponent == 'Code' ? '' : shadowComponent == 'Design' ? 'P' : ''}</span>
            </div>
        </>
    )


    const Ring = ({ size }) => (
        <span className={`${size == 'sm' ? 'border-[12px]' : size == 'md' ? 'border-[20px]' : 'border-[24px]'}  border-green rounded-[1rem] flex justify-center items-center `} >
            <span className={`${size == 'sm' ? 'w-[12px] h-[12px]' : size == 'md' ? 'w-[16px] h-[16px]' : 'w-[20px] h-[20px]'} bg-gray rounded-[1rem] `} >.</span>
        </span>
    )

    ///////////////////////////////////// USE EFFECT ///////////////////////////////////////////
    useEffect(() => {
        const components = ['Design', 'Code', 'Develop'];
        let currentIndex = 0;

        const intervalId = setInterval(() => {
            setShadowComponent(components[currentIndex]);
            currentIndex = (currentIndex + 1) % components.length;
        }, 5000);

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);


    return (
        <>
            <section name="home" className={`min-h-screen bg-black flex flex-col justify-between gap-[10rem] w-full pb-[12rem] bg-fixed bg-no-repeat bg-cover px-[14px] pt-[20px] sm:px-[3rem] sm:pt-[20px] md:px-[64px] md:pt-[1.5rem] relative z-[1]`}>

                {/* Background Text (Design, Code, Develop) */}
                <div className="shadow-text h-screen w-screen fixed top-0 right-0 grid md:grid-cols-12 grid-cols-4 gap-1 z-[1]">
                    <div className="bg-gray h-full flex-col items-center sm:col-span-1 relative md:flex hidden " >
                        <div className="absolute bottom-32 "><Ring size='md' /></div>
                    </div>
                    <div className="col-span-10 grid grid-cols-4  gap-1 ">
                        <DESIGN />
                    </div>
                    <div className="bg-gray h-full flex-col items-center sm:col-span-1 md:flex hidden " />
                </div>
                {/* Bubbles */}
                <div className="bubbles h-screen w-screen fixed top-0 right-0 flex justify-around z-[2]">
                    <div className="container relative h-screen overflow-hidden w-full z-[1]">
                        <div className="bubbles flex flex-wrap justify-between gap-4 z-[3]">
                            {bubbles.map((bubble, index) => {
                                const [showCloud, setShowCloud] = useState(false)
                                const icon = icons[index % icons.length]
                                return (
                                    <motion.span
                                        key={index}
                                        onMouseEnter={() => setShowCloud(true)}
                                        onMouseLeave={() => setShowCloud(false)}
                                        style={{ '--i': bubble.key, color: icon.color }}
                                        className={`${showCloud ? 'bg-gray-800' : ''} transition-all p-2 rounded-md flex justify-center items-center gap-4 cursor-pointer hover:scale-110 relative m-0 4px shadow-bubble animate-bubble z-[1000]`}
                                    >
                                        <icon.icon className={`${showCloud ? 'text-6xl' : 'text-3xl'} transition-all `} />
                                        {showCloud && (
                                            <div className="flex flex-col justify-center z-[1001] min-w-[4rem] ">
                                                <h5 className='text-2xl capitalize ' >{icon.heading}</h5>
                                                {/* <div className="w-full flex justify-end items-center ">
                                                    <button
                                                        style={{ '--color': icon.color == '#fff' ? '#000' : '#fff', '--bg': icon.color }}
                                                        className={`cloud-button mt-1 px-4 py-2 rounded-md transition-all duration-300 focus:outline-none`}
                                                        onClick={() => handleHideColor(index)}
                                                    >
                                                        View
                                                    </button>
                                                </div> */}
                                            </div>
                                        )}
                                    </motion.span>
                                )
                            })}
                        </div>
                    </div>
                </div>

                {/* logo */}
                <div className="fixed bg-transparent flex justify-between mt-0 z-[2] " >
                    <div className="flex items-end justify-center " >
                        <h4 className="text-[40px] text-semibold " >Glint<span className="w-[10px] h-[10px] inline-flex ml-[4px] rounded-full bg-green " /></h4>
                    </div>
                </div>

                {/* Heading */}
                <div className="heading h-screen w-screen fixed top-0 right-0 grid grid-cols-12 gap-1 z-[1]">
                    <div className="col-span-1"></div>
                    <div className="col-span-10 flex justify-between items-center w-full h-full ">
                        <div className="">
                            <h2 className="font-[cursive] flex flex-col gap-2 relative md:right-12 md:top-0 left-[-6rem] top-[16rem] transform -rotate-90 whitespace-nowrap text-stone-300 text-[26px] ">
                                <span><span className='text-green ' >MERN</span> Stack Developer</span>
                                <span>Frontend <span className='text-green ' >Developer`</span></span>
                                <span>Based in Islamabad</span>
                            </h2>
                        </div>
                        <div className="flex flex-col justify-center items-start w-fit h-full z-[1] pr-[5rem] lg:relative absolute md:right-0  ">
                            <div className="absolute top-12 right-[35%] "><Ring size='lg' /></div>
                            <h2 className='lg:text-[9rem] md:text-[7.5rem] sm:text-[6rem] text-[2rem] font-bold md:h-[10rem] sm:h-[8rem] h-[2rem] relative' >Hello <div className='absolute bottom-0 md:right-[-2.5rem] sm:right-[-1.5rem] right-[-1rem] lg:w-7 lg:h-7 md:w-6 md:h-6 sm:h-5 sm:w-5 h-3 w-3 bg-green rounded-full' /></h2>
                            <h1 className='lg:text-[9rem] md:text-[7.5rem] sm:text-[6rem] text-[5rem] font-bold md:h-[10rem] sm:h-[8rem] h-[6rem] ' >I am </h1>
                            <h1 className='lg:text-[9rem] md:text-[7.5rem] sm:text-[6rem] text-[5rem] font-bold md:h-[10rem] sm:h-[8rem] h-[6rem] ' >Nauman</h1>
                            <div className="absolute bottom-4 "><Ring size='sm' /></div>
                        </div>
                    </div>
                    <div className="col-span-1"></div>
                </div>

                {/* bottom left scroll down text button + vertical line */}
                <div className="z-[2] fixed bottom-0 flex justify-between cursor-pointer md:gap-[2rem] md:right-[3rem] sm:gap-[2rem] sm:right-[3rem] gap-[1rem] right-[2rem] " >
                    {/* <Link
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
                    </Link> */}
                    <hr className="h-[7rem] w-[4px] bg-green " />
                </div>

            </section>

            <div className="sticky top-[-10vh] w-full h-[110vh] bg- bg-green"></div>
        </>

    );
};

export default Header;
