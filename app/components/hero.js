'use client';
import { useEffect, useState, useRef } from 'react'

import { motion, useScroll, useTransform } from "framer-motion";
import Sano from './sano';
import '../styles.css'

const Hero = () => {




    const imageVariants = {
        hidden: { opacity: 0, y: -100 },
        visible: (delay) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: 'easeOut', delay },
        }),
    };

    const textVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 0.5,
            transition: { duration: 1, ease: 'easeInOut', delay: 4, duration: 4 }
        }
    };


    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
    const y2 = useTransform(scrollYProgress, [0, 1], [-200, 200]);
    const y3 = useTransform(scrollYProgress, [0, 1], [-400, 400]);
    const container = useTransform(scrollYProgress, [1, 0], [-200, 200]);


    const [scroll, setScroll] = useState(false)

  

useEffect(() => {
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
        setScroll(true);
    }, 4000);

    return () => {
        clearTimeout(timer);
        document.body.style.overflow = 'auto';
    };
}, []);

useEffect(() => {
    document.body.style.overflow = scroll ? 'auto' : 'hidden';
}, [scroll]);
    return (

        <>
            <div id='home' ref={ref} className=' font-inter   h-[100vh] relative overflow-hidden '>

                <motion.div
                    style={{ y: y1 }}
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    custom={2.5} // No delay
                    className=' absolute left-[7vw] top-[5rem] utlg:hidden'>
                    <span className=' opacity-50  font-italiana   '>(01)</span>
                    <img className=' img1-clamp' src="../ssH1.jpg" alt="" />
                </motion.div>

                <motion.div
                    style={{ y: y2 }}
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    custom={3} // No delay
                    tr
                    className=' absolute left-[26vw]  utlg:left-[5vw] utlg:bottom-[5vw] bottom-[5rem]'>
                    <span className=' opacity-50  font-italiana '>(02)</span>
                    <img className=' img2-clamp' src="../ssH2.jpg" alt="" />
                </motion.div>

                <motion.div
                    style={{ y: y3 }}
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    custom={2.8} // No delay
                    className=' absolute right-[10vw] top-[5rem] utlg:top-[5rem]'>
                    <span className=' opacity-50 font-italiana hidden lg:block'>(03)</span>
                    <span className=' opacity-50 font-italiana lg:hidden'>(01)</span>
                    <img className='  img3-clamp' src="../ssH4.jpg" alt="" />
                </motion.div>
                <motion.div
                    className=' h-full flex  justify-center items-center'>
                    <motion.div
                        style={{ y: container }}
                        className=' w-[60%] h-[60%]   utlg:w-full  margin-clamp   flex flex-col'>
                        <div className=' flex-1 flex   relative gap-10 items-end  '>
                            <motion.div
                                variants={textVariants}
                                initial="hidden"
                                animate="visible"
                                className='  absolute mb-[14vw] utsm:mb-[25vw]   header-p-clamp '>[creative agency]</motion.div>

                            <h1 className=' svg-clamp   '>
                                <Sano />
                            </h1>
                        </div>
                        <div className=' flex-1 flex  relative  justify-end  '>

                            <div className='  overflow-hidden header-clamp  w-full flex justify-end utlg:justify-center -mt-[5.5vw] utlg:-mt-[3vw] font-bold '>

                                <motion.h1
                                    initial={{
                                        y: '100%',
                                        rotate: 5
                                    }}
                                    animate={{ y: 0, rotate: 0 }}
                                    transition={{
                                        ease: [0.75, 0, 0.25, 1],
                                        duration: 4,
                                        delay: 1
                                    }}
                                >
                                    Studio
                                </motion.h1>
                            </div>
                            <motion.p
                                variants={textVariants}
                                initial="hidden"
                                animate="visible"
                                className=' w-1/3 utlg:w-[50%] header-p-clamp mix-blend-difference    absolute mt-[13vw] utlg:mt-[19vw]'>We bring your brand’s vision to life with minimalistic, innovative design. From logos to full identities, we create visuals that leave a lasting impression. Let’s make something extraordinary.</motion.p>

                        </div>



                    </motion.div>
                </motion.div>

            </div>
        </>


    );
};

export default Hero;
