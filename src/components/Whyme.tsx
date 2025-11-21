import imageWhyme from '../assets/images/rucel_image_2.png'
const Whyme = () => {
  return (
    <section className='flex h-[600px] flex-col md:flex-row items-center justify-between gap-20 pt-10 mb-20 mt-5' id='why-me'>
        <div className='hidden md:flex md:h-full md:w-[50%] items-center justify-center'>
            <img src={imageWhyme} alt="image rucel 2" className='object-cover w-[550px] h-[500px]'/>
        </div>
        <div className='w-full md:w-[50%] flex flex-col'>
            <h3 className='font-bold text-4xl md:text-[82px] text-secondary mt-5 mb-5 text-center  md:text-end'>Why me</h3>
            <p className='text-center md:text-end mt-4 mb-5 p-2'>
                Write some information about yourself that is IT related. Why are you passionate about coding? Highlight your 
                motivation for professional growth and continuous learning. Emphasise your strong problem-solving skills and passion for coding.
            </p>
            <div className='items-center flex flex-col'>
                <h4 className='font-bold text-2xl md:text-[40px] text-secondary mt-5 mb-5'>I am</h4>
                <p>located in Frankfurt</p>
                <p>open to relocated</p>
                <p>open to work remote</p>
            </div>
            <div className='flex items-center justify-center p-6'>
                <a href='#contact' className='flex items-center justify-center w-[175px] h-10 border-2 border-secondary text-center bg-secondary text-xl font-bold' >
                    Let's Talk
                </a>
            </div>

            

        </div>
    </section>
  )
}

export default Whyme