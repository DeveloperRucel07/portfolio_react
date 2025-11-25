import { Link } from 'react-router-dom'
import logo_primary from '../assets/images/logo_blue.png'
import SocialMediaLink from './subcomponents/SocialMediaLink'

const Footer = () => {
  return (
    <footer className='flex justify-between items-center w-full p-2 flex-col-reverse md:flex-row shadow-[0_-4px_8px_rgba(0,0,0,0.12)]'>
      <section className="flex sm:justify-between items-center w-full md:w-[70%] flex-col sm:flex-row gap-6 p-4">
        <div className='flex flex-col items-center justify-center'>
          <img src={logo_primary} alt="" className='w-15 h-6 sm:w-20 sm:h-10' />
          <p >frontend developer</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h4 className='font-bold text-xl p-2'>
            &copy; Rucel Tsafack 2025
          </h4>
          <div className='flex gap-2 text-primary flex-col md:flex-row'>
            <Link to="/legal-notice" className='text-md font-medium hover:text-secondary focus:underline focus:font-bold focus:text-secondary'>Legal notice</Link>
            <Link to="/privacy-policy" className='text-md font-medium hover:text-secondary focus:underline focus:font-bold focus:text-secondary'>Privacy policy</Link>
          </div>
        </div>
      </section>
      <SocialMediaLink></SocialMediaLink>
    </footer>
  )
}

export default Footer