import SkillsAccordion from "./SkillsAccordion"
import { TbTools } from "react-icons/tb"

export default function SkillsSection() {
	return (
		<div className="grid justify-items-center pb-28 md:pb-32 px-8">
			<div className="text-center">
				<div className="flex justify-center items-center text-5xl text-primary dark:text-light mb-4 font-semibold tracking-wider"><TbTools className="mx-3" />Skills</div>
				<h3 className="text-normal md:text-xl text-secondary dark:text-light2 font-normal mb-8 tracking-wider">An overview of my technical ability</h3>
				<SkillsAccordion />

			</div>
		</div>
	)
}