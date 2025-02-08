import React, { useRef } from 'react'
import { inView, motion, useInView } from "framer-motion";
import '../styles.css'
import Button from './button';
import Link from 'next/link';
const CtaSection = () => {

    const words = [
        'Unleash the Power of Design',
        'with Sano Studio.',
        'We don’t just design,',
        'we craft identities.',
        'Turning ideas into experiences.',
        'Breaking through the noise,',
        'delivering lasting impressions.',
        'Join us in shaping the future.',
    ]

    // Unleash the Power of Design with Sano Studio. We don’t just design, we craft identities. Turning ideas into experiences. Breaking through the noise, delivering lasting impressions. Join us in shaping the future.



    const refline = useRef(null);

    const isInViewLine = useInView(refline, { once: true });

    return (
        <div className='  font-italiana  relative '>
            <div className=' w-full flex '>
                <div className='page-number-clamp  right-0 m-5 '>02</div>
            </div>
            <div className=' h-full lg:ml-[5vw]  utlg:mx-[5vw]  relative flex flex-col justify-center '>
                <div className=' font-inter  header-p-clamp  opacity-50 mb-5' >[who are we?]</div>
                {
                    words.map((item, index) => {
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const ref = useRef(null);
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const isInView = useInView(ref);

                        return (
                            // DESKTOP
                            <div ref={ref} key={index} className=' overflow-hidden'>
                                <motion.p

                                    animate={{ y: isInView ? 0 : '150%', rotate: isInView ? 0 : 2 }}
                                    transition={{ duration: 1, ease: [0.75, 0, 0.25, 1] }}// Using 'inView' for animation control
                                    className="text-mapped-clamps utlg:hidden w leading-none"
                                >
                                    {item}
                                </motion.p>
                            </div>
                        );
                    })
                }
                {/* MOBILE */}
                <div className=' flex flex-col gap-10'>

                    <p className='text-clamps  leading-none lg:hidden'>Unleash design with Sano Studio. We craft identities, turning ideas into experiences.</p>
                    <p className='text-clamps  leading-none lg:hidden'>Breaking through noise, leaving lasting impressions. Join us in shaping the future.</p>

                </div>

                <div ref={refline} className=' flex items-center mt-10'>
                    <Link href='/from'>
                        <Button />
                    </Link>
                    <motion.div
                        animate={{ scaleX: isInViewLine ? 1 : 0 }}
                        transition={{ duration: 3, ease: 'easeInOut' }}
                        className=' ml-5  h-[1px] origin-left bg-white w-1/3' />
                </div>
            </div>
        </div>
    )
}

export default CtaSection