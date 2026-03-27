import { Routes, Route } from "react-router"
import './App.css'
import Home from './pages/Home'
import Navbar from "./components/Navbar"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import Certificates from "./pages/Certificates"
import Achievements from "./pages/Achievements"
import Resume from "./pages/Resume"
import Contact from "./pages/Contact"
import Whatsapp from "./components/Whatsapp"

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/skills" element={<Skills />}></Route>
                <Route path="/projects" element={<Projects />}></Route>
                <Route path="/certificates" element={<Certificates />}></Route>
                <Route path="/achievements" element={<Achievements />}></Route>
                <Route path="/resume" element={<Resume />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
            </Routes>
            <Whatsapp />
        </>
    )
}

export default App
