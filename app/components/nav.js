'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import '../styles.css'
import Link from 'next/link'

const Nav = () => {

    const [toggleMenu, setToggleMenu] = useState(false)
    const [hover, setHover] = useState(null)

    const linkPlaceholders = [
        'Home',
        'About',
        'Selected Works',
        'Services',
        'Contact'

    ]
    const links = [
        '/#home',
        '/#about',
        '/#works',
        '/#services',
        '/contact',

    ]

    const imageLinks = [
        '../ss4.jpg',
        '../ssH1.jpg',
        '../ssH2.jpg',
        '../ssH4.jpg',
        '../ss6.jpg',
        '../ss2.jpg',

    ]

    console.log(toggleMenu)
    return (
        <>
            <div className='font-inter fixed flex justify-center mix-blend-difference w-full mt-10  z-[70]'>
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1}}
                    transition={{ delay:2.8 , duration: 3.3}}
                    className=' relative flex overflow-hidden header-p-clamp' onClick={() => setToggleMenu(!toggleMenu)} >
                    <motion.div
                        initial={{ y: 0 }}
                        animate={{ y: toggleMenu ? '-100%' : 0 }}
                        transition={{ duration: 0.5 }}
                        className=' '>[Menu]</motion.div>
                    <motion.div
                        initial={{ y: '-100%' }}
                        animate={{ y: toggleMenu ? 0 : '-100%' }}
                        transition={{ duration: 0.5 }}
                        className=' absolute'>[Close]</motion.div>
                </motion.button>
            </div>

            <motion.div
                initial={{ y: '-100%' }}
                animate={{
                    y: toggleMenu ? 0 : '-100%',
                    pointerEvents: toggleMenu ? "auto" : "none",

                }}
                transition={{
                    ease: [0.75, 0, 0.25, 1],
                    duration: 1,
                }}
                className='  fixed top-0 w-full  h-[100vh] bg-white z-[60]'>
                <div className=' h-full flex'>

                    <div className=' flex-1 text-black utlg:bg-black utlg:text-white text-mapped-clamps leading-none   font-italiana  flex flex-col items-center  justify-center'>
                        <div className=' w-1/2 utlg:w-full utlg:flex utlg:flex-col  utlg:items-center'>
                            {
                                linkPlaceholders.map((item, index) => (
                                    <>
                                        <div
                                            onMouseEnter={() => setHover(index)}
                                            onMouseLeave={() => setHover(null)}

                                            className='menu-btn-clamp flex '>
                                            <motion.div
                                                onClick={() => setToggleMenu(false)}
                                                animate={{
                                                    opacity: hover === index ? 1 : 0.6,
                                                }}
                                            >
                                                <Link href={links[index]}>
                                                    {item}
                                                </Link>
                                            </motion.div>
                                            {hover === index && (
                                                <motion.span
                                                    initial={{ opacity: 0, x: -25 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.2 }}
                                                    className=' utlg:hidden'
                                                >
                                                    *
                                                </motion.span>
                                            )}
                                        </div>
                                    </>
                                ))
                            }
                        </div>
                    </div>
                    <div className=' flex-1 bg-black utlg:hidden text-mapped-clamps leading-none   font-italiana  flex flex-col items-center justify-center'>
                        <div className=' w-full  h-full flex justify-center items-center '>
                            <div className='w-[80%] h-[80%] overflow-hidden'>
                                <img className=' w-full h-auto object-cover ' src={imageLinks[hover]} alt="" />

                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className=' absolute m-10 bottom-0 right-0 w-[20vw] h-[25vw]  z-[70]'>
                    <img className=' w-full h-auto  ' src={imageLinks[hover]} alt="" />
                </div> */}
            </motion.div>
        </>
    )
}

export default Nav