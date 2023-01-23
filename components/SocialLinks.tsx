import Link from "next/link"
import { BsFileEarmarkPdfFill } from "react-icons/bs"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function SocialLinks({ iconSize }: { iconSize: string }) {
    return (
        <>
            <Link href="" target="_blank">
                <div className="bg-transparent text-primary dark:text-light hover:text-black dark:hover:text-light2 items-center transition-colors duration-300" ><FaGithub className={ "text-" + iconSize } /></div>
            </Link>
            <Link href="" target="_blank">
                <div className="bg-transparent text-primary dark:text-light hover:text-black dark:hover:text-light2 items-center transition-colors duration-300" ><FaLinkedin className={ "text-" + iconSize } /></div>
            </Link>
            <Link href="" target="_blank">
                <div className="bg-transparent text-primary dark:text-light hover:text-black dark:hover:text-light2 items-center transition-colors duration-300" ><BsFileEarmarkPdfFill className={ "text-" + iconSize }/></div>
            </Link>
        </>
    )
}