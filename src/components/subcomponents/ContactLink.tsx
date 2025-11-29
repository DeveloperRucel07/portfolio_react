import mail from '../../assets/icons/mail.svg'
import phone from '../../assets/icons/phone.svg'


const ContactLink = () => {
  return (
    <div className='flex flex-col gap-4'>
        <p className='flex flex-row gap-1 hover:text-secondary'>
            <img src={mail} alt="mail" className='w-10 h-6'/>
            <a href="mailto:contact@developer-rucel.com">contact@developer-rucel.com</a>
        </p>
        <p className='flex flex-row gap-1 hover:text-secondary'>
            <img src={phone} alt="phone" className='w-10 h-6' />
            <a href="tel:015563633814">0155 636 338 14</a>
        </p>
    </div>
  )
}

export default ContactLink