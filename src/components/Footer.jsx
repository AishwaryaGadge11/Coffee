import React from 'react'
import FooterBg from '../assets/coffee-footer.jpg'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
    {
        title: "Blog",
        link: "/#blog",
    },
];
const bgImage = {
    backgroundImage: `url(${FooterBg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "400px",
    width: "100%",
};

const Footer = () => {
  return (
     <div style={bgImage} className='text-white'>
            <div className='bg-black/40 min-h-[400px]'>
                <div className='max-w-7xl mx-auto grid md:grid-cols-3 pb-20 pt-5'>
                    {/* company details */}
                    <div className='py-8 px-4'>
                        <a href="#" className='font-semibold tracking-widest text-2xl sm:text-3xl font-cursive'>Brew Haven</a>
                        <p className='pt-4'>Crafted Coffee, Cozy Vibes, Unforgettable Moments – Your Perfect Espresso Escape</p>
                        <a href="https://www.youtube.com/@WebeliteBuilders" target='_blank' className='inline-block bg-[#3d2517] py-2 px-4 mt-5 text-sm rounded-full'>Visit our YouTube Channel</a>
                    </div>
                    {/* footer links */}
                    <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-semibold sm:text-left mb-3'>Important Links</h1>
                            <ul className='space-y-3'>
                                {FooterLinks.map((data, index) => (
                                    <li key={index}>
                                        <a href={data.link} className='inline-block hover:scale-105 duration-200'>{data.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* second col links */}
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-semibold sm:text-left mb-3'>
                                Quick Links
                            </h1>
                            <ul className='space-y-3'>
                                {FooterLinks.map((data, index) => (
                                    <li key={index}>
                                        <a href={data.link} className='inline-block hover:scale-105 duration-200'>{data.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* company address */}
                        <div className='py-8 px-4 col-span-2 sm:col-auto'>
                            <h1 className='text-xl font-semibold sm:text-left mb-3'>Address</h1>
                            <div>
                                <p className='mb-3'>Kolkata, West Bengal</p>
                                <p>+91 12345467890</p>
                                {/* social links */}
                                <div className='flex items-center gap-3 mt-6'>
                                    <a href="#">
                                        <FaInstagram className='text-3xl hover:text-amber-900 duration-300' />
                                    </a>
                                    <a href="#">
                                        <FaFacebook className='text-3xl hover:text-amber-900 duration-300' />
                                    </a>
                                    <a href="#">
                                        <FaLinkedin className='text-3xl hover:text-amber-900 duration-300' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Footer