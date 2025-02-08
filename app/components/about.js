'use client'
import React, { useRef } from 'react'
import '../styles.css'
import { motion, useInView } from "framer-motion";

const About = () => {

    const words = [
        'Sano Studio redefines the art of',
        'design. We don’t just create visuals,',
        'we build identities that speak with',
        'clarity. Our team of design experts,',
        'thinkers, and creators work',
        'relentlessly to transform ideas into',
        'experiences that capture attention,',
        'break through the noise, and leave a',
        'lasting mark in a world that’s always',
        'evolving.',
    ]




    return (
        <>
            <div id='about' className='  font-italiana relative mb-[10rem]'>
                <div className=' w-full flex justify-end'>
                    <div className='page-number-clamp  right-0 m-5 '>01</div>
                </div>
                <div className=' h-full lg:ml-[5vw] utlg:mx-[5vw]  relative flex flex-col justify-center '>
                    <div className=' font-inter   header-p-clamp  opacity-50 mb-5' >[who are we?]</div>
                    {
                        words.map((item, index) => {
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            const ref = useRef(null);
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            const isInView = useInView(ref);

                            return (
                                <div ref={ref} key={index} className=' utlg:hidden overflow-hidden'>
                                    <motion.p

                                        animate={{ y: isInView ? 0 : '150%', rotate: isInView ? 0 : 2 }}
                                        transition={{ duration: 1, ease: [0.75, 0, 0.25, 1] }}// Using 'inView' for animation control
                                        className="text-mapped-clamps w-1/2 leading-none"
                                    >
                                        {item}
                                    </motion.p>
                                </div>
                            );
                        })
                    }
                    {/* 'Sano Studio redefines design. We create impactful identities, transforming ideas into experiences that capture attention and leave a lasting mark in an ever-evolving world.'; */}
                    <div className='  lg:hidden text-clamps leading-none  gap-10 '>
                        <p>  Sano Studio redefines design. We create impactful identities, transforming ideas into experiences that capture attention and leave a lasting mark in an ever-evolving world.
                        </p>


                    </div>
                </div>
            </div>
        </>
    )
}

export default About