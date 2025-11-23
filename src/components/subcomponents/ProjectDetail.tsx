import project_join from '../../assets/images/project_join.png';

const ProjectDetail = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full md:h-80 gap-6">
        <div className="flex items-center flex-col justify-center h-full md:w-[50%]">
            <img className='object-cover' src={project_join} alt="image project" />
            <div className='flex flex-row items-center justify-evenly w-full pt-4 md:hidden'>
                <a href='#contact' className='flex items-center justify-center w-25 h-12 border-2 border-secondary text-center bg-secondary text-md font-bold' >
                    GitHub
                </a>

                <a href='#contact' className='flex items-center justify-center w-30 h-12 border-2 border-primary text-center bg-primary text-md font-bold text-bg-color' >
                    Live Test
                </a> 
            </div>
        </div>
        <div className="flex flex-col items-center justify-center h-full text-primary pt-2 pb-3">
            <h4 className='font-bold text-3xl md:text-5xl text-primary mt-5 mb-5 w-50 text-center'>Join</h4>
            <h5 className='text-center w-full pt-2 pb-3 text-xl'>JavaScript | Firebase | HTML | CSS </h5>
            <p className='text-center w-full'>
                Task manager inspired by the Kanban System. 
                Create and organize tasks using drag and drop functions, assign users and categories. 
            </p>
            <div className='hidden md:flex flex-row items-center justify-evenly w-full p-6'>
                <a href='#contact' className='flex items-center justify-center w-[175px] h-12 border-2 border-secondary text-center bg-secondary text-md font-bold' >
                    GitHub
                </a>

                <a href='#contact' className='flex items-center justify-center w-[175px] h-12 border-2 border-primary text-center bg-primary text-md font-bold text-bg-color' >
                    Live Test
                </a> 
            </div>
        </div>  
    </div>
  )
}

export default ProjectDetail
