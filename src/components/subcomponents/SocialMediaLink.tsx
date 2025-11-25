import github from '../../assets/icons/github.svg';
import email from '../../assets/icons/email.svg';
import linkedin from '../../assets/icons/linkedin.svg';

const SocialMediaLink = () => {
  return (
    <div className='flex flex-row gap-4 p-2 items-center justify-center'>
        <a href="https://github.com/DeveloperRucel07" className='hover:bg-error  hover:rounded-4xl' target='_blank'><img src={github} alt="icon for github" /></a>
        <a href="mailto:contact@developer-rucel.com" className='hover:bg-error  hover:rounded-4xl' target='_blank'><img src={email} alt="icon for mail" /></a>
        <a href="https://www.linkedin.com/in/rucel-tsafack" className='hover:bg-error  hover:rounded-4xl' target='_blank'><img src={linkedin} alt="icon for linked in" /></a>
    </div>
  )
}

export default SocialMediaLink