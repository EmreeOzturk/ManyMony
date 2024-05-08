
const TeamCard = ({ src, name, role, middle }: {
    src: string,
    name: string,
    role: string
    middle?: boolean
}) => {
    return (

        <div className={`w-full relative max-w-xs group ${middle && 'scale-110'}`}>
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-gray-900 border border-gray-800 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
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
                </div>
            </div>
        </div>
    )
}

export default TeamCard