import Header from "./Header"
import Landing from "./Landing"
import Skills from "./Skills"
import Whyme from "./Whyme"

const App = () => {
  return (
    <>
      <header className="relative w-full items-center h-20 justify-center">
        <Header></Header>
      </header>
      <main className="pr-2 pl-2" >
        <Landing></Landing>
        <Whyme></Whyme>
        <Skills></Skills>
      </main>
    </>
  )
} 

export default App