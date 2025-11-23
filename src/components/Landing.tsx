import '../css/landing.css'
import imageLanding from '../assets/images/rucel_image_1.png'
import downPrimary from '../assets/icons/down_primary.png'
const Landing = () => {
  return (
    <section className="landing flex flex-col-reverse md:flex-row justify-center items-center sm:justify-between w-full mx-auto max-w-[1460px] h-screen md:max-h-[800px] md:pt-20 pb-20 md:pb-0 mr-2 ml-2" id='landing'>
       <div className="w-full md:w-[45%] md:items-start ">
            <div className="actions md:flex items-center justify-between hidden md:h-82">
                <div className='flex items-center justify-center p-6 contact-landing -rotate-90 duration-100 animate-pulse'>
                    <a href='#contact' className='flex items-center justify-center w-[175px] h-12 border-2 text-center text-secondary text-md font-bold focus:outline-2 focus:outline-offset-2 active:bg-primary' >
                        Contact me
                    </a>
                </div>

                <div className='flex items-end justify-center h-full '>
                    <button className='animate-bounce duration-150 go-down focus:outline-2 focus:outline-offset-2  h-[150px] w-10'>
                        <a href='#why-me' >
                            <img className='w-10 h-15' src={downPrimary} alt="down" />
                        </a>
                    </button>
                    
                </div>
                
            </div>
            <div className="landing-text flex flex-col items-center md:items-start  justify-center text-secondary h-30 md:h-80 gap-4">
                <h3 className='font-medium text-2xl md:text-3xl lg:text-4xl uppercase'>Frontend Developer</h3>
                <h2 className='font-bold text-4xl md:text-5xl lg:text-7xl '>Rucel Tsafack</h2>
            </div>
        </div> 
        <div className="image-section w-full md:w-[55%] flex items-center justify-center h-120 md:h-full">
            <div className='flex items-center justify-center w-full'>
                <img src={imageLanding} alt=" image rucel" className='w-full h-auto md:w-[650px] md:h-[650px]' />
            </div>
        </div>

    </section>
  )
}

export default Landing