import '../css/header.css'
import logoPrimary from '../assets/images/logo_primary.png'
{/* <menuOpen className="open"></menuOpen> */}
const Header = () => {
  return (
    <section className="header-content h-20 w-full max-w-[1480px] flex items-center justify-between md:justify-normal gap-8 shadow-[0_4px_8px_rgba(0,0,0,0.12)] bg-bg-color z-2 fixed ">
        <div className="logo flex items-center justify-center w-full md:w-[150px] px-4 mx-4">
            <a href="#landing" ><img src={logoPrimary} alt="Logo blue" className='h-10 w-[100px]' /></a>
        </div>
        <button className="burger" aria-label="Menu">
            <span className='menuOpen'></span>
            <span className='menuOpen'></span>
            <span className='menuOpen'></span>
        </button>
        
        <nav className='nav-items hidden md:flex flex-col justify-center items-center md:flex-row md:items-center md:justify-between gap-8 w-full h-[400px] md:h-10 top-0 md:pl-4 md:pr-4'>
            <ul className='flex gap-4 md:gap-8 flex-col md:flex-row items-center justify-center'>
                <li className='text-sm md:text-xl xl:text-2xl'><a href="#why-me" className='hover:text-secondary'>Why me</a></li>
                <li className=' text-lg md:text-xl xl:text-2xl'><a href="#skills" className='hover:text-secondary'>Skills</a></li>
                <li className=' text-lg md:text-xl xl:text-2xl'><a href="#projects" className='hover:text-secondary'>Projects</a></li>
                <li className='text-lg md:text-xl xl:text-2xl'><a href="#contact" className='hover:text-secondary'>Contact</a></li>
            </ul>
            <div className=' flex gap-2 items-center justify-center text-xl px-4'>
                <span className='hover:text-secondary' tabIndex={0}>DE</span>
                |
                <span className='hover:text-secondary' tabIndex={0}>EN</span>
                |
                <span className='hover:text-secondary' tabIndex={0}>FR</span>
            </div> 
        </nav>
        
    </section>
  )
}

export default Header