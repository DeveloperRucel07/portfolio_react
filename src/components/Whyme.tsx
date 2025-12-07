import imageWhyme from '../assets/images/rucel_image_2.png';
import right from '../assets/icons/right.png';
import right_down from '../assets/icons/down_right.png';
import arrow_snake from '../assets/icons/arrow_snake.png';
import left from '../assets/icons/left.png';
import location from '../assets/icons/location.png';
import relocated from '../assets/icons/relocated.png';
import remote from '../assets/icons/remote.png';
import { useTranslation } from "react-i18next"
import { motion } from 'motion/react'
const Whyme = () => {
    const {t} = useTranslation();
  return (
    <section className='flex  flex-col md:flex-row items-center justify-between gap-20 md:pt-20 mb-20 md:mt-20 mr-2 ml-2' id='why-me'>
        <div className='hidden md:flex md:h-full md:w-[45%] items-center justify-center'>
            <img src={imageWhyme} alt="image rucel 2" className=' w-full h-full'/>
        </div>
        <div className='w-full md:w-[55%] flex flex-col'>
            <h3 className='font-bold text-5xl md:text-6xl lg:text-8xl text-secondary mt-5 mb-5 text-center  md:text-end md:pr-4'>{t('whyme.whyme')}</h3>
            <p className='text-center text-lg md:text-xl md:text-end mt-4 mb-5 p-2'>
                {t('whyme.aboutme')}
            </p>
            <div className='flex md:hidden p-2'>
                <img src={left} alt="" />
            </div>
            <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            
            className='items-start flex flex-col text-lg md:text-xl md:flex-row justify-center gap-6 w-full'>
                <h4 className='font-bold text-3xl md:text-5xl text-secondary mt-5 mb-5 w-50 text-center md:w-80'>{t('whyme.me')}</h4>
                <section className="situation flex flex-col w-full">
                    <div className='flex flex-row items-center justify-start text-lg p-4 gap-4'>
                        <img src={location} alt="location" />
                        <p>{t('whyme.location')}</p>
                    </div>
                    <div className='md:flex hidden  items-start justify-start h-10'>
                        <img className='h-15' src={left} alt="arrow left" />
                    </div>
                    <div className='flex flex-col  md:flex-row-reverse md:h-40 m-4'>
                        <div className='relocation flex items-start justify-start h-full'>
                            <div className='flex flex-row items-center justify-start text-lg pr-4 gap-4'>
                                <img src={relocated} alt="relocation" />
                                <p>{t('whyme.relocation')}</p> 
                            </div>
                        </div>
                        <div className="remote flex items-end justify-end h-full">
                            <div className='flex flex-row items-center justify-center text-lg p-4 gap-4'>
                                <img src={remote} alt="work remote" />
                                <p>{t('whyme.remote')}</p>
                            </div>
                            <div className='md:flex hidden justofy-end items-end h-10'>
                                <img className='h-15' src={right} alt="arrow snake" />
                            </div>
                        </div>
                    </div>
                        
                </section>
            </motion.div>
            <div className='md:flex hidden items-end justify-end h-10 '>
                <img className='h-15' src={arrow_snake} alt="arrow down right" />
            </div>
            <div className='flex md:hidden items-end justify-end p-2 h-20'>
                <img className='h-15' src={right_down} alt="" />
            </div>
            <div className='flex items-center justify-center md:justify-end md:pr-10 p-4 m-4'>
                <a href='#contact' className='flex items-center justify-center w-[175px] h-12 border-2 border-secondary text-center bg-secondary text-md font-bold' >
                    Let's Talk
                </a>
            </div>
        </div>
    </section>
  )
}

export default Whyme