import { motion } from "framer-motion"

const ServiceCard = ({ service }) => {

    return (
        <motion.div
            whileInView={{ y: [0, 1], opacity: [0, 1] }}
            transition={{ duration: 0.3 }}
            className="
                inline-flex
                flex-col items-center justify-center gap-[1rem] p-[10px] 
                sm:flex-row sm:items-start sm:justify-start sm:gap-[1.5rem] sm:p-[2rem] 
                md:w-full md:min-w-[380px] md:flex-row md:gap-[1rem] md:p-[1rem] 
                lg:w-[50%] 
             "
        >

            <div className="" >
                <service.icon style={{ fontSize: '64px' }} className="text-green text-[64px] relative top-[8px] " />
            </div>

            <div className="flex flex-col md:gap-[1rem] sm:gap-[12px] gap-[8px] " >
                <h4 className="font-semibold text-black md:text-[40px] md:text-start sm:text-[32px] sm:text-start text-[24px] text-center " >{service.title}</h4>
                <p className="text-textGray md:text-[20px] md:text-start sm:text-[18px] sm:text-start text-[18px] text-center " >{service.text}</p>
            </div>


        </motion.div>
    )
}


export default ServiceCard

