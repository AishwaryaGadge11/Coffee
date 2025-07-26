import React from 'react'
import Bg from '../assets/Bg.png'
import coffee from '../assets/Coffeeanime.json'
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
const bgImage = {
    backgroundImage: `url(${Bg})`,
    backgroundcolor: "#270c03",
    backgroundPosition:"center",
    backgroundRepeat: "no-repeat",
    backgroundSize:"cover",
    height:"100%",
    width:"100%",
};
const About = () => {
  return (
    <div id='about' className='md:py-20 py-40' style={bgImage}>
        <motion.h1
                initial={{opacity:0,y:100}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1.5,delay:0.5}}
        className='text-amber-900 text-4xl text-center' style={{ fontFamily: 'Pacifico, cursive' }} >About Us</motion.h1>
       <div className='flex flex-col md:flex-row items-center max-w-7xl mx-auto'>
        <motion.div
        initial={{opacity:0,scale:0.5}}
        whileInView={{opacity:1,scale:1}}
        transition={{duration:1.5,delay:0.5}}
        >
      <Lottie animationData={coffee} className='md:w-[600px]'/>
        </motion.div>
        <div className='space-y-4 px-4 md:px-0'>
            <motion.h1 
             initial={{opacity:0,y:100}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1.5,delay:0.5}}
            className='text-2xl text-amber-900' style={{ fontFamily: 'Pacifico, cursive' }}>Passion for Perfect Brew</motion.h1>
            <motion.p
             initial={{opacity:0,y:100}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1.5,delay:0.5}}
            style={{ fontFamily: 'Pacifico, cursive' }}
            >Founded in 2010, Bean Haven started as a small coffee cart in the heart of the city. Our founder, Jane Doe, had a vision to bring the finest, ethically sourced coffee to our community. What began as a love for the perfect cup of joe has grown into a thriving business, but our core values remain the same. We believe that great coffee is an art form. From carefully selecting the best beans from sustainable farms around the world to meticulously roasting them to perfection, every step in our process is crafted with love and expertise.</motion.p>
            
        </div>
       </div>

    </div>
  )
}

export default About