import React, { useState } from 'react'
import coffee from '../assets/coffee5.png'
import Bean1 from '../assets/bean1.png'
import Bean2 from '../assets/bean2.png'
import Navbar from './Navbar';
import { motion } from "motion/react"

const Hero = () => {
    

  return (
    <div className='from-slate-100 to-amber-950 bg-gradient-to-r mt-14'>
    <div className='max-w-7xl mx-auto grid md:grid-cols-2 place-items-center h-[700px] md:h-[650px] relative pt-10 md:pt-0'>
    <div className='space-y-5 px-4 md:px-0'>
     <motion.h3
      initial={{opacity:0 , x:-50}}
    whileInView={{opacity:1, x:0}}
    transition={{duration:1.8,delay:0.8}}
     className='text-amber-900 font-semibold font-cursive text-lg' style={{ fontFamily: 'Pacifico, cursive' }}>
      Welcome to Brew Crew
     </motion.h3>
     <motion.h1 
     initial={{opacity:0 , x:-60}}
    whileInView={{opacity:1, x:0}}
    transition={{duration:1.8,delay:0.8}}
     className='text-4xl md:text-4xl font-bold ' style={{ fontFamily: 'Pacifico, cursive' }}>Experience Artisanal <span className='text-amber-900'>Coffee</span> at Brew Haven</motion.h1>
     <motion.p
     initial={{opacity:0 , x:-60}}
    whileInView={{opacity:1, x:0}}
    transition={{duration:1.2,delay:0.8}}
     >Indulge in our carefully crafted brews, made from ethically sourced beans and brewed to perfection.
     </motion.p>
     <motion.div
     initial={{opacity:0 , x:-70}}
    whileInView={{opacity:1, x:0}}
    transition={{duration:1.8,delay:0.8}}
     className='flex gap-2'>
      <a href="#menu"><button className='bg-amber-700 text-white px-3 py-2 rounded-md'>View Menu</button></a>
      <a href="#menu"><button className='bg-transparent border border-amber-900 text-amber-900 rounded-md px-3 py-2'>Our Story</button></a>
     </motion.div>
    </div>
    <div className=''>
      <motion.img 
       initial={{opacity:0 ,scale:0.5}}
    whileInView={{opacity:1,scale:1}}
    transition={{duration:1.8,delay:0.5}}
      src={coffee} alt="" className='w-[500px]' />
    </div>
    <motion.img 
        initial={{opacity:0 , x:-100,y:100,scale:0.7}}
    whileInView={{opacity:1, x:0,y:0,scale:1,rotate:45}}
    transition={{duration:1.8,delay:0.8}}
    src={Bean2} alt="" className='absolute hidden md:block bottom-20 left-36 x-10 w-20 rotate-45'/>
    <motion.img 
    initial={{opacity:0 , x:400,scale:0.7}}
    whileInView={{opacity:1, x:0,scale:1}}
    transition={{duration:1.8,delay:0.8}}
    src={Bean1} alt="" className='absolute hidden md:block top-14 left-0 w-20'/>
    <motion.img 
        initial={{opacity:0 , x:-100,y:100,scale:0.7}}
    whileInView={{opacity:1, x:0,y:0,scale:1,rotate:45}}
    transition={{duration:1.8,delay:0.8}}
    src={Bean2} alt="" className='absolute hidden md:block w-20 top-0 right-0 -rotate-45' />
    </div>
    </div>
  )
}

export default Hero