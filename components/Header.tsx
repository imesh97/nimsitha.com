import Link from "next/link"
import { FaRegFilePdf } from "react-icons/fa"
import { HiCode, HiArrowNarrowDown } from "react-icons/hi"
import SocialLinks from "./SocialLinks"
import Button from "./Button"

export default function Header() {
	return (
		<div className="grid grid-rows-1 md:grid-cols-3 gap-4 h-screen items-center justify-items-center">
			<div className="row-span-1 md:col-span-2 text-center md:text-justify px-8">
				<h1 className="text-6xl text-primary dark:text-light mb-1 font-semibold tracking-wider">imesh nimsitha</h1>
				<div className="flex justify-center md:justify-between items-center my-4">
					<span className="h-px w-1/4 md:w-1/5 bg-primary dark:bg-light"></span>
					<h3 className="text-xl md:text-2xl text-primary dark:text-light px-4 font-normal">software developer</h3>
					<span className="h-px hidden md:block md:w-1/5 bg-primary dark:bg-light"></span>
				</div>
				<p className="text-secondary dark:text-light2 text-lg max-w-lg mb-10 tracking-wider">Welcome to my portfolio! Feel free to look through my relevant skills, projects and experience...</p>
				<div className="flex justify-center md:justify-start items-center space-x-6">
					<SocialLinks iconSize="6xl" />
					<Link href="" target="_blank">
						<div className="hidden inline-flex bg-black dark:bg-light hover:bg-primary dark:hover:bg-light2 text-light dark:text-primary text-lg rounded-3xl font-medium px-6 py-6 items-center transition-colors duration-300" ><FaRegFilePdf className="text-2xl mr-2"/>Resume</div>
					</Link>
					
				</div>
				<div className="flex items-center justify-center md:justify-start mt-12 md:mt-10 transition animate-pulse hover:animate-none">
					<Button target="intro" className="inline-flex bg-transparent text-primary dark:text-light2 hover:text-primary dark:hover:text-light items-center tracking-wider"><HiArrowNarrowDown className="text-2xl mr-2"/>Scroll for more</Button>
				</div>
			</div>
			<div className="row-span-1 md:col-span-1 hidden md:block justify-self-start">
				<HiCode className="text-9xl text-primary dark:text-light"/>
			</div>
			
		</div>
	)
}