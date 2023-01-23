import Link from "next/link"
import SocialLinks from "./SocialLinks"
import Button from "./Button"

export default function Footer() {
    return (
        <div className="px-24">
            <h3 className="text-center text-4xl font-semibold text-primary dark:text-light tracking-wider pt-10 pb-8">&#123; imesh &#125;</h3>
            <ul className="flex justify-center text-center items-center gap-x-6 mb-6 text-xl tracking-wider">
                <li><Button target="intro" className="text-primary dark:text-light hover:text-black dark:hover:text-light2">Intro</Button></li>
                <li><Button target="skills" className="text-primary dark:text-light hover:text-black dark:hover:text-light2">Skills</Button></li>
                <li><Button target="projects" className="text-primary dark:text-light hover:text-black dark:hover:text-light2">Projects</Button></li>
            </ul>
            <div className="flex justify-center items-center gap-x-6 mb-6">
                <SocialLinks iconSize="4xl" />
            </div>
            <span className="block pb-8 text-center text-sm text-secondary font-light dark:text-light2">2023 Imesh Nimsitha. Hosted on <Link className="transition-colors durantion-300 hover:text-black dark:hover:text-light" href="https://pages.github.com/" target="_blank">GitHub Pages</Link>.</span>
        </div>
    )
}