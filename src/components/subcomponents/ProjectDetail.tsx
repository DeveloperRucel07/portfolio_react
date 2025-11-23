import type { Project } from '../ProjectList';

type ProjectDetailProps = {
    index: number,
    project: Project
}

const ProjectDetail = ( {index, project}: ProjectDetailProps) => {
    function isEven(n: number): boolean {
        return n % 2 === 0;
    }

  return (
    <div className={`flex flex-col-reverse ${isEven(index) ? 'md:flex-row': 'md:flex-row-reverse'}  items-center justify-center w-full md:h-80 gap-6`}>
        <div className="flex items-center flex-col justify-center h-full md:w-[50%]">
            <img className='object-cover h-full w-full rounded-md md:rounded-none' src={project.imageUrl} alt="image project" />
            <div className='flex flex-row items-center justify-evenly w-full pt-4 md:hidden'>
                <a href={project.gitGubLink} className='flex items-center justify-center w-25 h-12 border-2 border-secondary text-center bg-secondary text-md font-bold rounded-xl' >
                    GitHub
                </a>

                <a href={project.projectLink} className='flex items-center justify-center w-30 h-12 border-2 border-primary text-center bg-primary text-md font-bold text-bg-color rounded-xl' >
                    Let's Talk
                </a> 
            </div>
        </div>
        <div className="flex flex-col items-center justify-center h-full text-primary pt-2 pb-3">
            <h4 className='font-bold text-3xl md:text-5xl text-primary mt-5 mb-5 w-50 text-center'>{project.title}</h4>
            <h5 className='text-center w-full pt-2 pb-3 text-xl'>
                {project.technologie.join(" | ")}
            </h5>
            <p className='text-center w-full'>
                {project.about}
            </p>
            <div className='hidden md:flex flex-row items-center justify-evenly w-full p-6'>
                <a href={project.gitGubLink} className='flex items-center justify-center w-[175px] h-12 border-2 border-secondary text-center bg-secondary text-md font-bold' >
                    GitHub
                </a>

                <a href={project.projectLink} className='flex items-center justify-center w-[175px] h-12 border-2 border-primary text-center bg-primary text-md font-bold text-bg-color' >
                    Live Test
                </a> 
            </div>
        </div>  
    </div>
  )
}

export default ProjectDetail
