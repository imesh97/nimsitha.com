import Link from "next/link"
import { SocialsData } from "../data/SocialsData"

export default function SocialLinks({ iconSize }: { iconSize: string }) {
    return (
        <>
            {
                SocialsData.map((item, index) => {
                    return (
                        <Link key={index} href={item.href} target="_blank">
                            <div className={"bg-transparent text-primary dark:text-light hover:text-black dark:hover:text-light2 items-center transition-colors duration-300 text-" + iconSize} >{item.icon}</div>
                        </Link>
                    )

                })
            }
        </>
    )
}