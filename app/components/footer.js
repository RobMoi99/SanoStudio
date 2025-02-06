import React from 'react'
import Button from './button'
import '../styles.css'

const Footer = () => {
    return (
        <div className=' '>
            <div className=' flex flex-col items-center gap-[10rem] h-full'>
                <p className=' opacity-50 header-p-clamp font-inter'>[contact]</p>
                <p className='text-clamps font-italiana utlg:text-center leading-none'>Ready to elevate your brand and make an impact?</p>
                <div className=' flex justify-center items-center w-full relative'>
                    <div className=' w-full absolute h-[1px] bg-white' />
                    <Button />
                    
                </div>
                <div className=' font-italiana header-clamp leading-none  '>Sano <mark className=' -ml-[4vw] bg-transparent text-white font-inter font-bold'>Studio</mark></div>
            </div>


        </div>
    )
}

export default Footer