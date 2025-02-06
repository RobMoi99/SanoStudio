import React, { useRef } from 'react'
import works from '../works.json'
import { motion, useInView } from "framer-motion";
import '../styles.css'

const Works = () => {

    const worksLenght = 4

    return (
        <div className='relative font-italiana w-full '>
            <div className='  sticky left-0 top-5  font-inter opacity-50  header-p-clamp  ml-[5vw] text-white z-50'>[selected work]</div>
            {
                works.map((item, index) => {
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    const ref = useRef(null);
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    const isInView = useInView(ref, { once: true });

                    return (
                        <div ref={ref} className='h-[100vh] sticky top-0 bg-black' key={index}>
                            <div className='absolute works-services-clamp m-10 top-0 font-inter utlg:font-italiana right-0'>{index + 1} / {worksLenght}</div>
                            <div className='w-1/2 flex flex-col'>
                                <h1 className='works-header-clamp leading-none mt-20 ml-[1vw] lg:ml-[5vw] mix-blend-difference z-20'>
                                    {item.title}
                                </h1>
                                <ul className='font-inter flex mix-blend-difference ml-[1vw] lg:ml-[5vw] z-20 gap-5 works-services-clamp font-light'>
                                    {item.services.map((service, i) => (
                                        <li key={i}>{service}</li>
                                    ))}
                                </ul>
                                <div className='absolute w-full utlg:top-[30vw] utsm:top-[80vw] z-0'>
                                    <div
                                        className='absolute overflow-hidden right-[12vw] utsm:top-[0vw] top-[4vw] lg:right-[32vw] lg:top-[4vw]'>
                                        <motion.div
                                            animate={{ y: isInView ? 0 : '100%' }}
                                            transition={{ ease: 'easeInOut', duration: 2.5 }}
                                            className=''>
                                            <span className='opacity-50'>
                                                (01)
                                            </span>
                                            <img className='works-img1-clamp h-auto z-10 right-[12vw] utsm:top-[0vw] top-[4vw] lg:right-[32vw] lg:top-[4vw]' src='https://i.pinimg.com/736x/c7/c1/b8/c7c1b8daec63bf97d991e3799d76915d.jpg' alt={item.title} />
                                        </motion.div>
                                    </div>

                                    <div className='absolute overflow-hidden right-[23vw] top-[20vw] lg:right-[23vw] lg:top-[20vw]'>
                                        <motion.div
                                            animate={{ y: isInView ? 0 : '100%' }}
                                            transition={{ ease: 'easeInOut', duration: 1.5 }}
                                        >
                                            <span className='opacity-50'>
                                                (02)
                                            </span>
                                            <img className='works-img3-clamp h-auto z-30' src='https://i.pinimg.com/736x/e2/3e/91/e23e91063e521266495d9652f310c496.jpg' alt={item.title} />
                                        </motion.div>
                                    </div>
                                    <div className='absolute overflow-hidden right-[45vw] utsm:top-[70vw] top-[30vw] lg:right-[15vw] lg:top-[10vw]'>
                                        <motion.div
                                            animate={{ y: isInView ? 0 : '100%' }}
                                            transition={{ ease: 'easeInOut', duration: 2 }}
                                        >
                                            <span className='opacity-50'>
                                                (03)
                                            </span>
                                            <img className='works-img2-clamp h-auto  z-20 right-[45vw] utsm:top-[70vw] top-[30vw] lg:right-[15vw] lg:top-[10vw]' src='https://i.pinimg.com/474x/0b/95/71/0b957156d6cf1ff0ba0498c6cf8c6780.jpg' alt={item.title} />
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Works