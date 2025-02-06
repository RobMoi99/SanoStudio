'use client';
import { useEffect, useState, useRef } from 'react'

import { motion, useScroll, useTransform } from "framer-motion";
import Sano from './sano';
import '../styles.css'


const Services = () => {

    const [toggleService, setToggleService] = useState(null)
    const [clickedeService, setClickedService] = useState(null)

    const services = [
        'Branding & Identity',
        'Graphic Design',
        'Web Design',
        'Web Development',
        'Motion Graphics',
    ]




    return (
        <div className=' overflow-hidden  font-italiana relative'>
            <div className=' w-full flex justify-end'>
                <div className='  right-0 top-0 m-5 page-number-clamp '>03</div>
            </div>

            <div className=' flex flex-col utlg:gap-5 mb-40' onMouseLeave={() => setToggleService(null)}>
                <div className=' flex justify-center'>
                    <div className=' font-inter w-[70%]   header-p-clamp  opacity-50 mb-5' >[our services]</div>
                </div>
                {
                    services.map((item, index) => (
                        <>

                            <div onMouseEnter={() => setToggleService(index)}
                                onClick={() => setClickedService(prev => (prev === index ? null : index))}
                                className='service-list-clamp cursor-pointer  relative w-full  flex justify-center' key={index}>
                                <div>*</div>
                              {/* DESKTOP */}
                                <motion.div
                                    animate={{ x: index === toggleService ? 0 : '100%' }}
                                    transition={{
                                        duration: 0.3,
                                        ease: [0.11, 0, 0.5, 0]

                                    }}
                                    className=' w-full h-full absolute bg-white   utlg:hidden origin-left' />
                                    {/* MOBILE */}
                                <motion.div
                                    animate={{ x: index === clickedeService ? 0 : '100%' }}
                                    transition={{
                                        duration: 0.3,
                                        ease: [0.11, 0, 0.5, 0]

                                    }}
                                    className=' w-full h-full absolute bg-white   lg:hidden origin-left' />
                                <motion.div
                                    animate={{
                                        opacity: index === toggleService ? 1 : 0,
                                        rotate: index === toggleService ? 0 : -8,
                                        y: index === toggleService ? 0 : '20%'
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        ease: [0.76, 0, 0.24, 1],
                                        delay: index !== toggleService ? 0.3 : 0
                                    }}
                                    className=' utlg:hidden  absolute   origin-bottom -bottom-[10rem] right-40  bg-red-400'>

                                    <img className=' w-[20vw] h-auto' src="https://i.pinimg.com/736x/9c/e8/ff/9ce8ff454d140e73d01a84ad7482c1f2.jpg" alt="" />
                                </motion.div>
                                <div className=' w-[70%] hitespace-nowrap mix-blend-difference'>
                                    {item}
                                </div>
                            </div>

                            <div className='flex justify-center overflow-hidden '>
                                <motion.div
                                    animate={{ height: index === clickedeService ? "auto" : 0, }}
                                    className=' w-[70%]   text-clamps flex'>
                                    <p className='lg:w-[60%] service-text-clamp '>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, fugiat sint, sit quod ipsa temporibus laboriosam labore asperiores perspiciatis cum, vel suscipit assumenda sapiente in autem qui nihil similique delectus.
                                    </p>
                                </motion.div>
                            </div>
                        </>

                    ))
                }
            </div>
        </div>
    )
}

export default Services