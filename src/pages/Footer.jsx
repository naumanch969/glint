import { useState } from "react"
import { motion } from "framer-motion"
import { Mail } from "@mui/icons-material"
import { IconButton } from "@mui/material"



const Footer = () => {

    const [email, setEmail] = useState('')


    const handleChange = (e) => {
        setEmail(e.target.value)
    }

    return (
        <section className="
            flex flex-col items-center gap-[4rem] bg-black
            py-[4rem] px-[14px]
            sm:py-[5rem] sm:px-[3rem]  
            md:py-[6rem] md:px-[6rem] 
            lg:px-[10rem]
            xl:px-[14rem] 
         ">


            <motion.div
                whileInView={{ y: [0, 1], opacity: [0, 1] }}
                transition={{ duration: 1 }}
                className="flex justify-between w-full lg:flex-row md:flex-col md:gap-[5rem] flex-col sm:gap-[4rem] gap-[2rem]   "
            >

                {/* left footer content */}
                <div className="flex flex-col lg:w-[50%] md:w-full md:gap-[2rem] sm:w-full sm:gap-[2rem] w-full gap-0 " >
                    <h4 className="text-[40px] font-semibold " >Glint<span className="w-[10px] h-[10px] inline-flex ml-[4px] rounded-full bg-green " /></h4>
                    <p className=" text-textGray md:text-[20px] sm:text-[20px] text-[16px]  " >Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla porttitor accumsan tincidunt. Nulla porttitor accumsan tincidunt. Quaerat voluptas autem necessitatibus vitae aut.</p>
                </div>

                {/* right footer content */}
                <div className="flex flex-col lg:w-[50%] md:w-full md:gap-[2rem] sm:w-full sm:gap-[2rem] w-full gap-0 " >
                    <h5 className="text-[24px] min-h-[60px] font-semibold " >Get Notified</h5>
                    <div style={{ height: '-webkit-fill-available' }} className="flex flex-col justify-start gap-[2rem] " >
                        <p className=" text-textGray md:text-[20px] sm:text-[20px] text-[16px] " >uia quo qui sed odit. Quaerat voluptas autem necessitatibus vitae aut non alias sed quia. Ut itaque enim optio ut excepturi deserunt iusto porro.</p>

                        {/* subscribe button */}
                        <div className="bg-darkGray flex justify-between items-center p-[2px] lg:w-full md:w-fit md:h-[3rem] sm:w-fit sm:h-[3rem] h-[3rem]  " >
                            <IconButton className="h-full max-w-[15%] " > <Mail className="text-white" /></IconButton>
                            <input
                                autoComplete='off'
                                type='text'
                                placeholder='Email Address'
                                value={email}
                                style={{ height: '-webkit-fill-available', width: '-webkit-fill-available', border: 'none' }}
                                onChange={handleChange}
                                className='h-full max-w-[50%] bg-inherit border-b-[1px] border-textGray p-[1rem] outline-none border-none pl-0  '
                            />
                            <button className="uppercase max-w-[35%] text-white bg-green h-full md:px-[15px] sm:px-[15px] px-[4px] " >subscribe</button>
                        </div>

                    </div>
                </div>

            </motion.div>


            {/* copyright */}
            <div className='flex items-center md:flex-row md:gap-[1rem] sm:flex-row sm:gap-[1rem] flex-col gap-[4px] ' >
                <p className="" >© Copyright Glint 2022</p>
                <hr className="h-[16px] w-[2px] bg-white " />
                <p className="" >Site Template by Colorlib</p>
            </div>

        </section>
    )
}


export default Footer