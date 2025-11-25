import { Route,BrowserRouter as  Router, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import Legacy from "./pages/Legacy"
import Privacy from "./pages/Privacy"


const App = () => {
  return (
    <Router>
      <header className="relative w-full items-center h-20 justify-center">
        <Header></Header>
      </header>
      <main className="mx-2" >
        <Routes>
          <Route path="/" element = {<Home></Home>}></Route>
          <Route path="/legal-notice" element = {<Legacy></Legacy>}></Route>
          <Route path="/privacy-policy" element = {<Privacy></Privacy>}></Route>
        </Routes>
      </main>
      <Footer></Footer>
    </Router>
  )
} 

export default App