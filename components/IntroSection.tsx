import { BiUserPin } from "react-icons/bi";

export default function IntroSection() {
    return (
        <div className="grid grid-cols-3 pt-2 pb-28 md:pb-32 px-8 justify-items-center">
            <div className="col-span-3 text-center">
				<div className="flex justify-center items-center text-5xl text-primary dark:text-light mb-4 font-semibold tracking-wider"><BiUserPin className="mx-3" />Intro</div>
				<h3 className="text-normal md:text-xl text-secondary dark:text-light2 font-normal mb-8 tracking-wider">Who am I? Get to know me...</h3>
			</div>
            <div className="col-span-3 sm:col-span-1">

            </div>
            <div className="col-span-3 sm:col-span-2">
                <p className="text-center md:text-start text-secondary dark:text-light2 text-lg max-w-lg mb-10 tracking-wider">Hi, my name is Imesh Nimsitha. I am a Computer Science student at the University of Western Ontario. I enjoy programming because it allows me to freely design and create something of my own. For the future, my goal is to become a software developer in the industry. Currently, I am looking for internships in order to develop my career by gaining valuable experience in the field.</p>
            </div>
        </div>
    )
}