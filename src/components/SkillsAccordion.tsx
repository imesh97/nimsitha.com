import { SkillsData } from "../data/SkillsData"
import { useState } from "react"
import { CgChevronDown } from "react-icons/cg"

export default function SkillsAccordion() {
    const [clicked, setClicked] = useState(-1)

    const toggleAccordion: (id: number) => void = (id) => {
        if (clicked === id) return setClicked(-1)
        setClicked(id)
    }

    return (
        <div className="bg-transparent text-gray-500">
            {
                SkillsData.map((item, index) => {
                    return (
                        <div key={index}>
                            <h2>
                                <button onClick={() => toggleAccordion(index)} type="button" className="flex items-center justify-between w-full md:w-[32rem] py-4 font-semibold tracking-widest text-primary dark:text-light">
                                    <span className="flex items-center text-xl md:text-2xl">
                                        <div className="mr-3 md:mr-4 text-4xl">
                                            {item.icon}
                                        </div>
                                        {item.label}
                                    </span>
                                    <span><CgChevronDown className={"transition duration-300 text-2xl shrink-0 " + (clicked === index ? "rotate-180" : "")} /></span>
                                </button>
                            </h2>
                            {
                                clicked === index && (
                                    <div className="transition duration-300 pl-12 font-normal">
                                        {
                                            item.content.map((skill, i) => {
                                                return (
                                                    <div key={i} className="flex items-center text-secondary dark:text-light2 text-lg md:text-xl py-2 first:pt-1 last:pb-4 tracking-wider">
                                                        <div className="mr-3 text-3xl">
                                                            {skill.icon}
                                                        </div>
                                                        {skill.label}
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            }
                        </div>
                    )
                })
            }
        </div>

    )
}