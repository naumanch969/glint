
import { motion } from 'framer-motion'


const Heading = ({ subHeading, heading, subHeadingColor, headingColor }) => {




    return (
        <motion.div
            whileInView={{ y: [0, 1], opacity: [0, 1] }}
            transition={{ duration: 0.3 }}
            className="flex flex-col justify-center items-center  "
        >
            <h5 className={`uppercase text-${subHeadingColor} font-semibold tracking-[2px] md:text-[24px] sm:text-[22px] text-[20px]  `} >{subHeading}</h5>
            <div className="flex flex-col items-center lg:w-[62rem] md:w-full md:px-[2rem] md:gap-[3rem] sm:gap-[2rem] gap-[1rem] " >
                <h2 className={`font-bold text-center text-${headingColor}  md:text-[54px] sm:text-[40px] text-[32px] `} >{heading}</h2>
                <hr className="bg-lightGray md:w-[40rem] sm:w-[80%] w-[80%]  " />
            </div>
        </motion.div>
    )
}


export default Heading