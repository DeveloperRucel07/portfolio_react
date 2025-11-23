import angular from '../assets/icons/angular.png';
import typescript from '../assets/icons/typescript.png';
import javascript from '../assets/icons/javascript.png';
import css from '../assets/icons/css.png';
import html from '../assets/icons/html.png';
import api from '../assets/icons/api.png';
import firebase from '../assets/icons/firebase.png';
import git from '../assets/icons/git.png';
import material from '../assets/icons/material.png';
import react from '../assets/icons/react.png';
import scrum from '../assets/icons/scrum.png';
import minset from '../assets/icons/minset.png';
import corner_down from '../assets/icons/corner_down.png';

const Skills = () => {
  return (
    <section className='flex flex-col items-center md:items-start gap-10  w-full pt-20 md:pt-20 mb-20 md:mt-20 mr-2 ml-2' id='skills'>
        <h3 className='font-bold text-5xl md:text-6xl lg:text-8xl text-secondary mt-5 mb-5 text-center  md:text-start'>My Skills</h3>
        <ul className="skills grid grid-cols-3 md:grid-cols-6 w-full gap-8">
            <li className='flex flex-col items-center justify-center  gap-2'>
                <img className='hover:animate-bounce' src={angular} alt="angular"/>
                <p className='hidden md:block text-secondary'>Angular</p>
            </li>
            <li className='flex flex-col items-center justify-center w-[100%/6] gap-2'>
                <img className='hover:animate-bounce' src={typescript} alt="angular"/>
                <p className='hidden md:block text-secondary'>Typescript</p>
            </li>
            <li className='flex flex-col items-center justify-center  gap-2'>
                <img className='hover:animate-spin' src={react} alt="react"/>
                <p className='hidden md:block text-secondary'>React</p>
            </li>
            <li className='flex flex-col items-center justify-center w-[100%/6] gap-2'>
                <img className='hover:animate-bounce' src={javascript} alt="JavaScript"/>
                <p className='hidden md:block text-secondary'>JavaScript</p>
            </li>
            <li className='flex flex-col items-center justify-center  gap-2'>
                <img className='hover:animate-bounce' src={css} alt="css"/>
                <p className='hidden md:block text-secondary'>CSS</p>
            </li>
            <li className='flex flex-col items-center justify-center w-[100%/6] gap-2'>
                <img className='hover:animate-bounce' src={html} alt="html"/>
                <p className='hidden md:block text-secondary'>HTML</p>
            </li>
            <li className='flex flex-col items-center justify-center w-[100%/6] gap-2'>
                <img className='hover:animate-spin' src={api} alt="api"/>
                <p className='hidden md:block text-secondary'>REST-API</p>
            </li>
            <li className='flex flex-col items-center justify-center  gap-2'>
                <img className='hover:animate-bounce' src={firebase} alt="firebase"/>
                <p className='hidden md:block text-secondary'>Firebase</p>
            </li>
            <li className='flex flex-col items-center justify-center w-[100%/6] gap-2'>
                <img className='hover:animate-bounce' src={git} alt="git"/>
                <p className='hidden md:block text-secondary'>Git</p>
            </li>
            <li className='flex flex-col items-center justify-center w-[100%/6] gap-2'>
                <img className='hover:animate-bounce' src={scrum} alt="scrum"/>
                <p className='hidden md:block text-secondary'>Scrum</p>
            </li>
            <li className='flex flex-col items-center justify-center w-[100%/6] gap-2'>
                <img className='hover:animate-bounce' src={material} alt="material design"/>
                <p className='hidden md:block text-secondary'>Material design</p>
            </li>
            <li className='flex flex-col items-center justify-center w-[100%/6] gap-2 text-primaryy'>
                <img className='hover:animate-spin animate-bounce w-15' src={minset} alt="angular"/>
                <p className='hidden md:block text-secondary'>Mindset</p>
            </li>
        </ul>
        <div className='flex flex-col items-center md:hidden'>
            <img className='h-20 w-8 animate-pulse' src={corner_down} alt="" />
            <p className='p-3'>
                I am always happy to learn new technologies,just tell me which technologie should i need to know for our future Project.
            </p>
            <div className='flex items-center justify-center md:justify-end md:pr-10 p-6 m-4'>
                <a href='#contact' className='flex items-center justify-center w-[175px] h-12 border-2 border-secondary text-center bg-secondary text-md font-bold' >
                    Let's Talk
                </a>
            </div>
        </div>
    </section>
  )
}

export default Skills