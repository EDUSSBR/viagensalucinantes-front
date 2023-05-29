import Image from "next/image"
export function Header({params}) {
    return (<header className="shadow-2xl fixed top-0 z-10 flex justify-start align-center md:justify-center bg-black opacity-80  w-full h-24 text-hsl(0, 0%, 100%)" >
        <Image className=" pl-3 md:pl-0" src={"/logo-3.svg"} alt="logo" width={300} height={300} />
    </header>)
}