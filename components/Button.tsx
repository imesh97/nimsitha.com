import { ReactNode } from "react"

export default function Button({ className, target, children }: { className: string, target: string, children: ReactNode }) {
    const handleBtnClick = () => {
        const elem = document.getElementById(target)
        if (elem) elem.scrollIntoView({ behavior: "smooth", block: "center" })
    }

    return (
        <button onClick={handleBtnClick} className={"cursor-pointer transition-colors duration-300 " + className} >{ children }</button>
    )
}