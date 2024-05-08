import Github from "../icons/Github"
import Linkedin from "../icons/Linkedin"
import Twitter from "../icons/X"
import { Meteors } from "../ui/meteors"

const TeamCard = ({ src, name, role, middle }: {
    src: string,
    name: string,
    role: string
    middle?: boolean
}) => {
    return (

        <div className={`w-full min-h-[400px]  relative max-w-xs group ${middle && 'md:scale-110'}`}>
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl h-full min-h-[400px] bg-gray-900 border border-gray-800 py-8  overflow-hidden rounded-2xl flex flex-col justify-start items-start">
                <div className="h-full w-full flex justify-center ">
                    <img src={src} alt={name} className="w-1/2 border p-1 group-hover:p-0 rounded-full transition-all " />
                </div>
                <div className="px-4 mt-10">
                    <h1 className="font-bold  text-xl bg-gradient-to-br from-slate-200 to-slate-500 text-transparent tracking-tight  bg-clip-text  mb-4 relative z-50">
                        {name}
                    </h1>

                    <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                        {role}
                    </p>
                    <div className="flex items-center text-xl justify-start space-x-4 mt-6">
                        <a href="#" className="text-gray-500 hover:text-gray-400 transition-colors duration-300">
                            <Linkedin />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-400 transition-colors duration-300">
                            <Github />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-400 transition-colors duration-300">
                            <Twitter />
                        </a>
                    </div>
                </div>
                <Meteors number={10} />
            </div>
        </div>
    )
}

export default TeamCard