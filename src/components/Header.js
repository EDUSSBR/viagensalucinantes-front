import Image from "next/image"
export function Header() {
    return (
        <header className="fixed top-0 z-20 flex justify-start align-center md:justify-center bg-black opacity-70 w-full h-24 text-white" >
            <Image className="h-15 pl-3 md:pl-0" src={"/explorer-logo.svg"} alt="logo" width={250} height={300}/>
        </header>)
}