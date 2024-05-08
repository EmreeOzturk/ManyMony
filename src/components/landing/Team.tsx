import TeamCard from "./TeamCard"

const Team = () => {
    return (
        <div className="max-w-7xl w-full relative">
            <div className="bg-gradient-to-br from-slate-200 to-slate-500 text-transparent tracking-tight  bg-clip-text text-center text-4xl  py-4 font-medium   md:text-7xl ">
                <h1>Team</h1>
            </div>
            <div className="w-full flex flex-col md:flex-row items-center gap-10 py-10 justify-center">
                <TeamCard src="/team/akin.png" role="Software Dev, DB Admin" name="Akın Buzkuş" />
                <TeamCard src="/team/me.png" role="Software Dev, UI/UX Designer" name="Emre Öztürk" middle />
                <TeamCard src="/team/hilal.png" role="Software Dev, Scrum Master" name="Hilal Şentürk" />
            </div>
        </div>
    )
}

export default Team