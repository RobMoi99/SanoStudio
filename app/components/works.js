import React, { useRef } from 'react'
import works from '../works.json'
import { motion, useInView } from "framer-motion";
import '../styles.css'

const Works = () => {

    const worksLenght = 3


    const imageSets = [
        {
            id: 1,
            imageOne: '../ss3.jpg',
            imageTwo: '../ss4.jpg',
            imageThree: '../ss5.jpg',
        },
        {
            id: 2,
            imageOne: '../ss6.jpg',
            imageTwo: '../ss7.jpg',
            imageThree: '../ss9.jpg',
        },
        {
            id: 3,
            imageOne: '../ssH2.jpg',
            imageTwo: '../ssH1.jpg',
            imageThree: '../ssH4.jpg',
        },
    ];

    return (
        <div id='works' className='relative font-italiana w-full '>
            <div className='  sticky left-0 top-5  font-inter opacity-50  header-p-clamp  ml-[5vw] text-white z-50'>[selected work]</div>
            {
                works.map((item, index) => {
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    const ref = useRef(null);
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    const isInView = useInView(ref, { once: true });

                    return (
                        <div ref={ref} className='h-[130vh] sticky top-0 bg-black' key={index}>
                            <div className='absolute works-services-clamp m-10 top-0 font-inter utlg:font-italiana right-0'>{index + 1} / {worksLenght}</div>
                            <div className=' h-full flex flex-col'>

                                <div className=' flex flex-col'>

                                    <h1 className='works-header-clamp leading-none mt-20 ml-[1vw] lg:ml-[5vw] mix-blend-difference z-20'>
                                        {item.title}
                                    </h1>
                                    <ul className='font-inter flex mix-blend-difference ml-[1vw] lg:ml-[5vw] z-20 gap-5 works-services-clamp font-light'>
                                        {item.services.map((service, i) => (
                                            <li key={i}>{service}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className=' flex-1  relative utmd:top-20 flex justify-center  lg:justify-end h-full'>
                                    <div className=' overflow-hidden h-fit  relative  -top-[5vw]'>
                                        <motion.div
                                            animate={{ y: isInView ? 0 : '100%' }}
                                            transition={{ ease: 'easeInOut', duration: 2.5 }}
                                        >
                                            <span className=' opacity-50 '>(01)</span>
                                            <img className=' works-img1-clamp  h-auto object-cover' src={imageSets[index].imageOne} alt="" />
                                        </motion.div>
                                    </div>
                                    <div className=' overflow-hidden relative  lg:right-[5vw] top-[10vw]'>
                                        <motion.div
                                            animate={{ y: isInView ? 0 : '100%' }}
                                            transition={{ ease: 'easeInOut', duration: 1.5 }}
                                        >
                                            <span className=' opacity-50'>(02)</span>
                                            <img className=' works-img2-clamp h-auto object-cover' src={imageSets[index].imageTwo} alt="" />
                                        </motion.div>
                                    </div>
                                    <div className=' overflow-hidden  relative lg:right-[8vw]'>
                                        <motion.div
                                            animate={{ y: isInView ? 0 : '100%' }}
                                            transition={{ ease: 'easeInOut', duration: 2 }}

                                        >
                                            <span className=' opacity-50'>(03)</span>
                                            <img className=' works-img3-clamp  h-auto object-cover  ' src={imageSets[index].imageThree} alt="" />
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