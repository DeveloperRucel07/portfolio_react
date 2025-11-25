import ContactMe from "../components/ContactMe"
import Landing from "../components/Landing"
import ProjectList from "../components/ProjectList"
import Skills from "../components/Skills"
import Teamplayer from "../components/Teamplayer"
import Whyme from "../components/Whyme"


const Home = () => {
  return (
    <>
        <Landing></Landing>
        <Whyme></Whyme>
        <Skills></Skills>
        <ProjectList></ProjectList>
        <Teamplayer></Teamplayer>
        <ContactMe></ContactMe>
    </>
  )
}

export default Home