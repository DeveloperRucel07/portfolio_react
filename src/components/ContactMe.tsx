import contact_corner from '../assets/icons/contact_arrow.png';
import up_primary from '../assets/icons/up_primary.png';
import ContactForm from './subcomponents/ContactForm';
import ContactLink from './subcomponents/ContactLink';
import { useTranslation } from "react-i18next"
import { motion } from 'motion/react'
const ContactMe = () => {
    const {t} = useTranslation();
  return (
    <div className='flex  flex-col items-start justify-between gap-10 md:pt-10 mb-10 md:mt-10 mr-2 ml-2' id='contact'>
        <h3 className='flex font-bold text-5xl md:text-6xl lg:text-8xl text-secondary mt-5 mb-5 text-center  md:text-start items-center'>
            {t("contact.contact")}
            <img className='flex w-20 h-10 items-end' src={contact_corner} alt="contact corner" />
        </h3>
        <div className='flex flex-col md:flex-row items-center justify-between w-full gap-10'>
            <motion.p 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            
            className='w-full md:w-[50%]'>{t("contact.about_position")}</motion.p>
            <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            
            className='hidden md:flex flex-row items-center justify-between w-full md:w-[50%]' >
                <ContactLink></ContactLink>
                <a href='#landing' className=''>
                    <img className='w-10 h-10 animate-bounce duration-150' src={up_primary} alt="up" />
                </a>
            </motion.div>
        </div>

        <ContactForm></ContactForm>


        <div className='flex flex-col items-center justify-center w-full gap-10 md:hidden' >
            <ContactLink></ContactLink>
            <a href='#landing' className=''>
                <img className='w-10 h-10 animate-bounce duration-150 ' src={up_primary} alt="up" />
            </a>
        </div>


    </div>
  )
}

export default ContactMe