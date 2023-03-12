import { BiUserPin } from "react-icons/bi";

export default function IntroSection() {
    return (
        <div className="grid grid-cols-2 pt-2 pb-28 md:pb-32 px-8 sm:mx-auto sm:w-3/4 justify-items-center justify-self-center space-x-8">
            <div className="col-span-2 text-center">
                <div className="flex justify-center items-center text-5xl text-primary dark:text-light mb-4 font-semibold tracking-wider"><BiUserPin className="mx-3" />Intro</div>
                <h3 className="text-normal md:text-xl text-secondary dark:text-light2 font-normal mb-10 tracking-wider">Who am I? Get to know me...</h3>
            </div>
            <div className="col-span-2 md:col-span-1">
                <img src='/profile.png' className="rounded-full" height="350" width="350" alt="Profile Picture" />
            </div>
            <div className="col-span-2 md:col-span-1 pt-8 md:pt-12">
                <p className="text-center md:text-start text-secondary dark:text-light2 text-lg tracking-wider">Hi, my name is Imesh Nimsitha. I am a Computer Science student at the University of Western Ontario. I began programming as a hobby because it allows me to freely design and create something of my own. Now, I aspire to become a successful software developer in the future. Currently, I am looking for internships in order to develop my career by gaining valuable experience in the field.</p>
            </div>
        </div>
    )
}