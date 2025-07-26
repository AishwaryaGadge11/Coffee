import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

import Hero from './components/Hero'
import Menu from './components/Menu'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  

  return (
   <main className='overflow-x-hidden'>
    <Navbar/>
    <Hero/>
    <Menu/>
    <About/>
    <Testimonials/>
    <Contact/>
    <Footer/>
   </main>
  )
}

export default App
