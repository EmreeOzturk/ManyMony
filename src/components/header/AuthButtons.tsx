import { NavLink } from 'react-router-dom'

const AuthButtons = () => {
    return (
        <nav className='flex items-center justify-center md:gap-4 font-mono'>
            <NavLink to="/login" aria-label='login link'>
                <button className="relative inline-flex md:h-10  md:w-20 scale-90 md:scale-100 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex  h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-md font-medium text-white backdrop-blur-3xl">
                        Login
                    </span>
                </button>
            </NavLink>
            <NavLink to="/register" aria-label='register link'>
                <button className="relative inline-flex scale-90 md:scale-100 md:h-10 md:w-24 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-md font-medium text-white backdrop-blur-3xl">
                        Register
                    </span>
                </button>
            </NavLink>
        </nav>
    )
}

export default AuthButtons