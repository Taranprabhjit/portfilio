import { NavLink } from "react-router";
import { useEffect, useRef, useState } from "react";
import "./Navbar.css";

const PHRASES = ["Welcome", "Taranprabhjit Singh", "Aspiring Data Scientist", "Let's Build", "Hello World"];
const TYPE_SPEED = 200;
const DELETE_SPEED = 100;
const PAUSE = 1800;

function useTypewriter(phrases) {
    const [text, setText] = useState("");
    const phraseIndex = useRef(0);
    const charIndex = useRef(0);
    const deleting = useRef(false);

    useEffect(() => {
        let timeout;
        function tick() {
            const current = phrases[phraseIndex.current];
            if (!deleting.current) {
                charIndex.current++;
                setText(current.slice(0, charIndex.current));
                if (charIndex.current === current.length) {
                    deleting.current = true;
                    timeout = setTimeout(tick, PAUSE);
                    return;
                }
            } else {
                charIndex.current--;
                setText(current.slice(0, charIndex.current));
                if (charIndex.current === 0) {
                    deleting.current = false;
                    phraseIndex.current = (phraseIndex.current + 1) % phrases.length;
                    timeout = setTimeout(tick, 500);
                    return;
                }
            }
            timeout = setTimeout(tick, deleting.current ? DELETE_SPEED : TYPE_SPEED);
        }
        timeout = setTimeout(tick, 800);
        return () => clearTimeout(timeout);
    }, []);

    return text;
}

export default function Navbar() {
    const text = useTypewriter(PHRASES);

    return (
        <nav className="navbar">
            <NavLink to="/" className="logo">
                <span className="logo-dot" />
                <span className="typewriter-text">{text}</span>
                <span className="cursor" />
            </NavLink>

            <div className="nav-links">
                <NavLink to="/" className={({ isActive }) => `tab ${isActive ? "active" : ""}`}>Home</NavLink>
                <NavLink to="/skills" className={({ isActive }) => `tab ${isActive ? "active" : ""}`}>Skills</NavLink>
                <NavLink to="/projects" className={({ isActive }) => `tab ${isActive ? "active" : ""}`}>Projects</NavLink>
                <NavLink to="/certificates" className={({ isActive }) => `tab ${isActive ? "active" : ""}`}>Certificates</NavLink>
                <NavLink to="/achievements" className={({ isActive }) => `tab ${isActive ? "active" : ""}`}>Achievements</NavLink>
                <NavLink to="/resume" className={({ isActive }) => `tab ${isActive ? "active" : ""}`}>Resume</NavLink>
                <NavLink to="/contact" className={({ isActive }) => `tab ${isActive ? "active" : ""}`}>Contact</NavLink>
            </div>
        </nav>
    );
}