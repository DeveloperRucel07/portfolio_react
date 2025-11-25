import ContactMe from "./ContactMe"
import Footer from "./Footer"
import Header from "./Header"
import Landing from "./Landing"
import ProjectList from "./ProjectList"
import Skills from "./Skills"
import Teamplayer from "./Teamplayer"
import Whyme from "./Whyme"

const App = () => {
  return (
    <>
      <header className="relative w-full items-center h-20 justify-center">
        <Header></Header>
      </header>
      <main className="" >
        <Landing></Landing>
        <Whyme></Whyme>
        <Skills></Skills>
        <ProjectList></ProjectList>
        <Teamplayer></Teamplayer>
        <ContactMe></ContactMe>
      </main>
      <Footer></Footer>
    </>
  )
} 

export default App