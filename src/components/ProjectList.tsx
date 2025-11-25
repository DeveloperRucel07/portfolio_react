import ProjectDetail from "./subcomponents/ProjectDetail";
import project_join from '../assets/images/project_join.png';
import project_sharkie from '../assets/images/project_sharkie.png';

export type Project ={
  title:string,
  technologie: string[],
  about:string,
  imageUrl:string;
  gitGubLink:string,
  projectLink:string
}

const ProjectList = () => {
  const projectLists:Project[]= [
   {
      title: "Join",
      technologie: ["JavaScript", "Firebase", "HTML", "CSS"],
      about:
        "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      imageUrl: project_join,
      gitGubLink: "https://github.com/DeveloperRucel07/Join",
      projectLink: "https://join.rucel-tsafack.com/index.html",
    },
    {
      title: "Sharkie",
      technologie: ["OOP", "JavaScript", "HTML", 'CSS'],
      about:
        "A simple jump-and-run game based on object-oriented programming. Help Sharkie find the coins and poison bottles to fight the killer whale and protect the ocean.",
      imageUrl: project_sharkie,
      gitGubLink: "https://github.com/DeveloperRucel07/sharkie",
      projectLink: "https://sharkie.rucel-tsafack.com/index.html",
    },
    {
      title: "ShopDev",
      technologie: ["Angular", "TypeScript", "Tailwind CSS", "Material Design", "SCSS"],
      about:
        "A complete e-commerce store with authentication, real-time database, and secure payment integration.",
      imageUrl: project_join,
      gitGubLink: "https://github.com/DeveloperRucel07/shopdev",
      projectLink: "https://shopdev.rucel-tsafack.com/index.html",
    },

  ]


  return (
    <section className="flex flex-col items-center justify-center w-full gap-10 pt-20 md:pt-20 md:pb-10 mb-20 md:mt-20 mr-2 ml-2" id="projects">
        <h3 className="font-bold text-5xl md:text-6xl lg:text-8xl text-secondary mt-5 mb-5 text-center">
            My Projects
        </h3>
        <div className="flex flex-col w-full gap-12 p-2 items-center justify-center">
          {projectLists.map((project, index) =>(
            <ProjectDetail
            key={index}
            index={index} 
            project={project}></ProjectDetail>
          ))}
        </div>
    </section>
  )
}

export default ProjectList