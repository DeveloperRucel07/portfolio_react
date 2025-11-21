import imageLanding from '../assets/images/rucel_image_1.png'
const Landing = () => {
  return (
    <section className="landing flex flex-col-reverse md:flex-row justify-center items-center sm:justify-between w-full h-screen md:max-h-[620px] ">
       <div className="w-full md:w-[50%] md:items-start ">
            <div className="actions md:flex items-center justify-between hidden md:h-82">
                <button>CONTACT ME</button>

                <button className=''>Down</button>
                
            </div>
            <div className="landing-text flex flex-col items-center md:items-start  justify-center text-secondary h-30 md:h-80 gap-4">
                <h3 className='font-medium text-2xl md:text-[54px] uppercase '>Frontend Developer</h3>
                <h2 className='font-bold text-4xl md:text-[82px] '>Rucel Tsafack</h2>
            </div>

        </div> 
        <div className="image-section w-full md:w-[50%] flex items-center justify-center h-120 md:h-full">
            <div className='flex items-center justify-center w-full'>
                <img src={imageLanding} alt=" image rucel" className='w-[95%] h-auto md:w-[90%] md:h-[600px] object-cover' />
            </div>
        </div>

    </section>
  )
}

export default Landing