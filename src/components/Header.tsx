import '../css/header.css'
import logoPrimary from '../assets/images/logo_blue.png'
import { useState } from 'react';
{/* <menuOpen className="open"></menuOpen> */}
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="header-content h-20 w-full max-w-[1480px] flex items-center justify-between md:justify-normal gap-8 shadow-[0_4px_8px_rgba(0,0,0,0.12)] bg-bg-color z-2 fixed ">
        <div className="logo flex items-center justify-center w-full md:w-[150px] px-4 mx-4">
            <a href="/" ><img src={logoPrimary} alt="Logo blue" className='h-10 w-[100px]' /></a>
        </div>
        <button className="burger" aria-label="Menu" aria-expanded={isOpen} aria-controls="main-navigation" onClick={() => setIsOpen(!isOpen)}>
            <span className={isOpen ? "menuOpen open" : "menuOpen"}></span>
            <span className={isOpen ? "menuOpen open" : "menuOpen"}></span>
            <span className={isOpen ? "menuOpen open" : "menuOpen"}></span>
        </button>
        
        <nav id="main-navigation" className={`nav-items ${isOpen ? "flex mt-2 p-12 rounded-b-3xl ease-out bg-bg-color" : "hide_nav ease-in-out"} md:bg-none  md:flex flex-col justify-start items-center md:flex-row md:items-center md:justify-between gap-8 w-full h-85 md:h-10 top-0 md:pl-4 md:pr-4 animate-all duration-300`}>
            <ul className='flex gap-8 flex-col md:flex-row items-center justify-center'>
                <li className='text-lg md:text-xl xl:text-2xl'><a href="/#why-me" className='hover:text-secondary' onClick={() => setIsOpen(false)}>Why me</a></li>
                <li className=' text-lg md:text-xl xl:text-2xl'><a href="/#skills" className='hover:text-secondary' onClick={() => setIsOpen(false)}>Skills</a></li>
                <li className=' text-lg md:text-xl xl:text-2xl'><a href="/#projects" className='hover:text-secondary' onClick={() => setIsOpen(false)}>Projects</a></li>
                <li className='text-lg md:text-xl xl:text-2xl'><a href="/#contact" className='hover:text-secondary' onClick={() => setIsOpen(false)}>Contact</a></li>
            </ul>
            <div className=' flex gap-2 items-center justify-center text-xl px-4' onClick={() => setIsOpen(false)}>
                <span className='hover:text-secondary font-extrabold' tabIndex={0}>DE</span>
                |
                <span className='hover:text-secondary font-extrabold' tabIndex={0}>EN</span>
                |
                <span className='hover:text-secondary font-extrabold' tabIndex={0}>FR</span>
            </div> 
        </nav>
        
    </section>
  )
}

export default Header