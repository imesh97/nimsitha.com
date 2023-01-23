import { ProjectsData } from "../data/ProjectsData"
import { TbDeviceDesktop } from "react-icons/tb"
import Link from "next/link"

export default function ProjectsSection() {
    return (
        <div className="pb-28 md:pb-32 px-10">
            <div className="text-center">
				<div className="flex justify-center items-center text-5xl text-primary dark:text-light mb-6 font-semibold tracking-wider"><TbDeviceDesktop className="mx-3" />Projects</div>
				<h3 className="text-normal md:text-xl text-secondary dark:text-light2 font-normal mb-10 tracking-wider">To show my passion and curiosity</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-8 justify-items-center">
                {
                    ProjectsData.map((project, index) => {
                        return (
                            <div key={ index } className="transition-colors duration-300 bg-white dark:bg-primary text-primary dark:text-light px-6 py-8 md:p-12 drop-shadow-md rounded-3xl w-full md:w-[32rem] text-center">
                                <h3 className="text-2xl sm:text-3xl font-semibold tracking-wider">{ project.title }</h3>
                                <div className="flex justify-center md:justify-between items-center my-4">
					                <span className="h-px hidden md:block w-16 bg-secondary dark:bg-light2"></span>
                                    <h4 className="text-normal md:text-lg text-secondary dark:text-light2 px-2 tracking-wide">{ project.dateLabel }</h4>
					                <span className="h-px hidden md:block w-16 bg-secondary dark:bg-light2"></span>
				                </div>
                                <div className="inline-flex items-center justify-content-end text-right gap-x-4 mb-4">
                                    {
                                        project.links.map((link, i) => {
                                            return (
                                                <Link key={ i } href={ link.href } target="_blank">
						                            <div className="flex bg-transparent text-primary dark:text-light hover:text-black dark:hover:text-light2 font-semibold items-center transition-colors duration-300 tracking-wider text-lg sm:text-xl" >
                                                        <div className="mr-2 text-3xl sm:text-4xl">
                                                            { link.icon }
                                                        </div>
                                                        { link.label }
                                                    </div>
                                                </Link>

                                            )
                                        })
                                    }
                                </div>
                                <div className="text-normal text-secondary dark:text-light2 text-center px-2 mb-4 tracking-wider">
                                    { project.description }
                                </div>
                                <div className="inline-flex items-center flex-wrap place-content-center text-center gap-x-4 gap-y-3">
                                    {
                                        project.stack.map((item, i) => {
                                            return (
                                                <div key={ i } className="flex items-center text-secondary dark:text-light2 text-normal md:text-normal tracking-wider">
                                                    <div className="mr-2 text-3xl">
                                                        { item.icon }
                                                    </div>
                                                    { item.label }
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}