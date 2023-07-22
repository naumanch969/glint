import { useState } from 'react'
import { Facebook, Twitter, Instagram, Close } from "@mui/icons-material"
import { contact } from "../assets"
import { motion } from "framer-motion"
import validator from "email-validator"
import { Heading } from '../components'

const Contact = () => {

    const initialState = { name: '', email: '', message: '', subject: '' }
    const [contactData, setContactData] = useState(initialState)
    const [validationMessage, setValidationMessage] = useState(initialState)

    const validated = validationMessage.name == '' && validationMessage.email == '' && validationMessage.message == '' && validationMessage.subject == ''


    const handleChange = (e) => {
        setContactData({ ...contactData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setContactData(initialState)
    }

    const nameBlur = () => {
        if (contactData.name == ``) {
            setValidationMessage({ ...validationMessage, name: 'name field is required' })
        }
        else if (contactData.name.length < 3) {
            setValidationMessage({ ...validationMessage, name: 'name must be atleast of 3 character' })
        }
        else {
            setValidationMessage({ ...validationMessage, name: '' })
        }
    }

    const emailBlur = () => {
        if (contactData.email == ``) {
            setValidationMessage({ ...validationMessage, email: 'email field is required' })
        }
        else if (!(validator.validate(contactData.email))) {
            setValidationMessage({ ...validationMessage, email: 'please enter valid email address' })
        }
        else {
            setValidationMessage({ ...validationMessage, email: '' })
        }
    }

    const subjectBlur = () => {
        if (contactData.subject == ``) {
            setValidationMessage({ ...validationMessage, subject: 'subject field is required' })
        }
        else if (contactData.subject.length < 3) {
            setValidationMessage({ ...validationMessage, subject: 'subject must be atleast of 3 character' })
        }
        else {
            setValidationMessage({ ...validationMessage, subject: '' })
        }
    }

    const messageBlur = () => {
        if (contactData.message == ``) {
            setValidationMessage({ ...validationMessage, message: 'message field is required' })
        }
        else if (contactData.message.length < 20) {
            setValidationMessage({ ...validationMessage, message: 'message must be atleast of 20 character' })
        }
        else {
            setValidationMessage({ ...validationMessage, message: '' })
        }
    }


    return (
        <section name="contact" style={{ backgroundImage: `url(${contact})` }} className=" 
            flex flex-col justify-between items-center gap-[5rem] relative z-10 w-full bg-black  pt-[10rem]
            px-[14px] py-[7rem] 
            sm:px-[3rem] sm:py-[7rem]
            md:px-[64px] md:py-[10rem]
        ">


            <div className="absolute top-0 right-[50%] transform translate-x-[-50%] flex justify-between gap-[2rem] " >
                <hr className="h-[7rem] w-[4px] bg-white " />
            </div>





            <Heading subHeading='Contact us' heading='Reach out for a new project or just say hello' subHeadingColor='green' headingColor='white' />



            {/* contact form */}
            <motion.div
                whileInView={{ y: [0, 1], opacity: [0, 1] }}
                transition={{ duration: 1 }}
                className="flex w-full h-full xl:px-[8rem] lg:flex-row lg:px-[5rem] md:flex-col md:px-[2rem] sm:flex-col sm:px-[2rem] px-0 flex-col "
            >


                {/* left contact side */}
                <div className="opacity-80 bg-lightGray flex flex-col gap-[5rem] lg:w-[65%] md:w-full md:px-[3rem] md:pt-[4rem] md:pb-[6rem] sm:w-full sm:px-[3rem] sm:pt-[3rem] sm:pb-[5rem] w-full px-[1rem] pt-[3rem] pb-[3rem]  " >
                    {/* heading */}
                    <h4 className="uppercase text-white " >send us a message</h4>
                    {/* inputs */}
                    <form action="https://formspree.io/f/xbjedvea" method="POST" className="flex flex-col gap-[2rem] " >
                        {/* name */}
                        <div className="relative" >
                            <input
                                autoComplete='off'
                                type='text'
                                placeholder='Name'
                                name='name'
                                value={contactData.name}
                                onChange={handleChange}
                                onBlur={nameBlur}
                                className='bg-inherit w-full border-b-[1px] border-textGray p-[1rem] outline-none pl-0  '
                                required
                            />
                            {
                                validationMessage.name &&
                                <motion.div
                                    animate={{ opacity: [0, 1], scale: [0.8, 1] }}
                                    className='absolute bottom-[-14px] right-0 rounded-[4px] w-fit p-[4px] bg-green  '
                                >
                                    <span className="relative flex items-center gap-[8px]  w-full h-full " >
                                        <span className="absolute top-[50%] transform translate-y-[-50%] left-[-22px] border-[10px] border-transparent border-r-green " />
                                        <p className="" >{validationMessage.name}</p>
                                        <Close onClick={() => setValidationMessage({ ...validationMessage, name: '' })} className="text-[16px] cursor-pointer " />
                                    </span>
                                </motion.div>
                            }

                        </div>
                        {/* email */}
                        <div className="relative" >
                            <input
                                autoComplete='off'
                                type='email'
                                placeholder='Email'
                                name='email'
                                value={contactData.email}
                                onChange={handleChange}
                                onBlur={emailBlur}
                                className='bg-inherit w-full border-b-[1px] border-textGray p-[1rem] outline-none pl-0  '
                                required
                            />
                            {
                                validationMessage.email &&
                                <motion.div
                                    animate={{ opacity: [0, 1], scale: [0.8, 1] }}
                                    className='absolute bottom-[-14px] right-0 rounded-[4px] w-fit p-[4px] bg-green  '
                                >
                                    <span className="relative flex items-center gap-[8px]  w-full h-full " >
                                        <span className="absolute top-[50%] transform translate-y-[-50%] left-[-22px] border-[10px] border-transparent border-r-green " />
                                        <p className="" >{validationMessage.email}</p>
                                        <Close onClick={() => setValidationMessage({ ...validationMessage, email: '' })} className="text-[16px] cursor-pointer " />
                                    </span>
                                </motion.div>
                            }
                        </div>
                        {/* subject */}
                        <div className="relative" >
                            <input
                                autoComplete='off'
                                type='text'
                                placeholder='Subject'
                                name='subject'
                                value={contactData.subject}
                                onChange={handleChange}
                                onBlur={subjectBlur}
                                className='bg-inherit w-full border-b-[1px] border-textGray p-[1rem] outline-none pl-0  '
                            />
                            {
                                validationMessage.subject &&
                                <motion.div
                                    animate={{ opacity: [0, 1], scale: [0.8, 1] }}
                                    className='absolute bottom-[-14px] right-0 rounded-[4px] w-fit p-[4px] bg-green  '
                                >
                                    <span className="relative flex items-center gap-[8px]  w-full h-full " >
                                        <span className="absolute top-[50%] transform translate-y-[-50%] left-[-22px] border-[10px] border-transparent border-r-green " />
                                        <p className="" >{validationMessage.subject}</p>
                                        <Close onClick={() => setValidationMessage({ ...validationMessage, subject: '' })} className="text-[16px] cursor-pointer " />
                                    </span>
                                </motion.div>
                            }
                        </div>
                        {/* message */}
                        <div className="relative" >
                            <textarea
                                autoComplete='off'
                                type='text'
                                placeholder='Message'
                                name='message'
                                value={contactData.message}
                                onChange={handleChange}
                                onBlur={messageBlur}
                                className='bg-inherit w-full border-b-[1px] border-textGray p-[1rem] outline-none pl-0 resize-none '
                                rows={8}
                                required
                            />
                            {
                                validationMessage.message &&
                                <motion.div
                                    animate={{ opacity: [0, 1], scale: [0.8, 1] }}
                                    className='absolute bottom-[-8px] right-0 rounded-[4px] w-fit p-[4px] bg-green  '
                                >
                                    <span className="relative flex items-center gap-[8px]  w-full h-full " >
                                        <span className="absolute top-[50%] transform translate-y-[-50%] left-[-22px] border-[10px] border-transparent border-r-green " />
                                        <p className="" >{validationMessage.message}</p>
                                        <Close onClick={() => setValidationMessage({ ...validationMessage, message: '' })} className="text-[16px] cursor-pointer " />
                                    </span>
                                </motion.div>
                            }
                        </div>
                        {/* send button */}
                        <button onClick={handleSubmit} type="submit" disabled={!validated} className={`w-full bg-green text-white p-[1rem] ${validated ? 'cursor-pointer' : ''} `} >Send Message</button>
                    </form>
                </div>


                {/* right contact side */}
                <div className="bg-darkGray flex flex-col gap-[5rem] lg:w-[35%] md:w-full md:px-[3rem] md:pt-[4rem] md:pb-[6rem] sm:w-full sm:px-[3rem] sm:pt-[3rem] sm:pb-[5rem] w-full px-[1rem] pt-[3rem] pb-[3rem]  " >
                    <h4 className="uppercase text-white lg:block md:hidden sm:hidden hidden " >contact info</h4>
                    <div className="flex flex-col gap-[3rem] " >
                        {/* info */}
                        <div className="flex flex-col gap-[3rem] " >
                            {/* address */}
                            <div className="flex flex-col gap-[1rem] " >
                                <h5 className="text-green text-[24px] capitalize  " >where to find us</h5>
                                <p className="flex flex-col gap-[8px] " >
                                    <span className="" >1600 Amphitheatre Parkway</span>
                                    <span className="" >Mountain View, CA</span>
                                    <span className="" >94043 US</span>
                                </p>
                            </div>
                            {/* email */}
                            <div className="flex flex-col gap-[1rem] " >
                                <h5 className="text-green text-[24px] capitalize  " >email us at</h5>
                                <p className="flex flex-col gap-[8px] " >
                                    <span className="" >contact@glintsite.com</span>
                                    <span className="" >info@glintsite.com</span>
                                </p>
                            </div>
                            {/* phone */}
                            <div className="flex flex-col gap-[1rem] " >
                                <h5 className="text-green text-[24px] capitalize  " >call us at</h5>
                                <p className="flex flex-col gap-[8px] " >
                                    <span className="" >Phone: (+63) 555 1212</span>
                                    <span className="" >Mobile: (+63) 555 0100</span>
                                    <span className="" >Fax: (+63) 555 0101</span>
                                </p>
                            </div>

                        </div>
                        {/* social icons */}
                        <div className="flex items-center flex-wrap md:justify-start md:gap-[1rem] sm:justify-start sm:gap-[1rem] justify-between gap-[0] " >
                            <button className="p-[4px] rounded-full flex justify-center items-center " ><Facebook className="text-[1.5rem] " /></button>
                            <button className="p-[4px] rounded-full flex justify-center items-center " ><Twitter className="text-[1.5rem] " /></button>
                            <button className="p-[4px] rounded-full flex justify-center items-center " ><Instagram className="text-[1.5rem] " /></button>
                            <button className="p-[4px] rounded-full flex justify-center items-center " ><Facebook className="text-[1.5rem] " /></button>
                            <button className="p-[4px] rounded-full flex justify-center items-center " ><Twitter className="text-[1.5rem] " /></button>
                        </div>
                    </div>
                </div>


                {/* my location map */}
                {/* <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54260.53212651819!2d74.22302447263971!3d31.790029314126155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391920dc82e30d5f%3A0x62b19b72f991085e!2sMuridke%2C%20Sheikhupura%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1675565540893!5m2!1sen!2s"
                    width="600"
                    height="450"
                    style={{border:0}}
                    allowFullScreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                /> */}

            </motion.div>



        </section>
    )
}


export default Contact