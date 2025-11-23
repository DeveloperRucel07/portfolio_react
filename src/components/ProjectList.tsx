import ProjectDetail from "./subcomponents/ProjectDetail"

const ProjectList = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full gap-10 pt-20 md:pt-20 md:pb-10 mb-20 md:mt-20 mr-2 ml-2" id="projects">
        <h3 className="font-bold text-5xl md:text-6xl lg:text-8xl text-secondary mt-5 mb-5 text-center">
            My Projects
        </h3>
        <div className="flex flex-col w-full gap-12 p-2">
            <ProjectDetail></ProjectDetail>
            <ProjectDetail></ProjectDetail>
            <ProjectDetail></ProjectDetail>
        </div>
    </section>
  )
}

export default ProjectList