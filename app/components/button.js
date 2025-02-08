import React, { useState } from 'react'
import { motion } from "framer-motion";

const Button = ( ) => {

    const [isButtonHovered, setIsButtonHovered] = useState(false)

    return (
        <button
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
            className=' font-inter bg-black relative overflow-hidden cta-button-clamps font-light border-[1px] p-2 px-10 rounded-full '>
            <motion.p
            className=''
                animate={{
                    y: isButtonHovered ? "-100%" : "0%",
                }}
                transition={{ duration:0.2}}
            >Get&nbsp;in&nbsp;touch</motion.p>
            <motion.p
                className=' absolute'
                animate={{
                    y: isButtonHovered ? "-100%" : "0",
                }}
                transition={{ duration:0.2}}
            >Get&nbsp;in&nbsp;touch</motion.p>
        </button>

    )
}

export default Button