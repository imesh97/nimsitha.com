import Link from "next/link"
import Button from "./Button"
import { useState } from "react"
import { FiSun, FiMoon } from "react-icons/fi"

export default function Navbar() {
    const [ darkMode, setDarkMode ] = useState(false)

    const toggleTheme = () => {
        if (darkMode) {
            document.documentElement.classList.remove("dark")
            return setDarkMode(false)
        }
        document.documentElement.classList.add("dark")
        return setDarkMode(true)
    }

    return (
        <nav className="transition duration-300 flex flex-col md:flex-row items-center md:justify-around py-4 md:py-6 bg-light dark:bg-jet md:shadow-sm w-full absolute md:fixed top-0 left-0 right-0 z-10">
            <div className="flex items-center mb-4 md:mb-0">
                <Button target="top" className="inline-flex items-center text-3xl font-semibold text-primary dark:text-light tracking-wider">&#123; imesh &#125;</Button>
            </div>

            <div className="flex items-center space-x-6 text-primary dark:text-light tracking-wider">
                <Button target="intro" className="flex text-primary dark:text-light hover:text-black hover:dark:text-light2">Intro</Button>
                <Button target="skills" className="flex text-primary dark:text-light hover:text-black hover:dark:text-light2">Skills</Button>
                <Button target="projects" className="flex text-primary dark:text-light hover:text-black hover:dark:text-light2">Projects</Button>
                
                <button onClick={() => toggleTheme()} className="text-primary dark:text-light text-3xl focus:outline-none">
                    {
                        darkMode ? (
                            <FiMoon />
                        ) : <FiSun />
                    }
                </button>
            </div>
        </nav>
    )
}