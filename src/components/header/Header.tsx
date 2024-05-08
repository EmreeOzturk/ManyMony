// import logomark from '../assets/logomark.svg'
import { useAuth } from '../../hooks/useAuth'
import { Models } from 'appwrite';
import Logo from './Logo';
import AuthButtons from './AuthButtons';
import { useNavigate } from 'react-router-dom';
const Header = (
) => {
    const auth = useAuth();
    const navigate = useNavigate();
    return (
        <header className='bg-transparent backdrop-blur-md z-10 text-neutral-400 max-w-7xl fixed left-0 right-0 mt-4 rounded-xl shadow-lg mx-auto flex justify-between items-center h-16 px-4 md:px-12'>
            <Logo />
            {
                (auth as {
                    user: Models.Session
                })?.user ? (
                    <div>
                        <button
                            onClick={() => {
                                navigate('/dashboard')
                            }}
                            className="relative mr-2 inline-flex scale-90 md:scale-100 md:h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                                Dashboard
                            </span>
                        </button>
                        <button
                            onClick={() => {
                                (auth as {
                                    logoutAction: () => void
                                })?.logoutAction()
                            }}
                            className="relative inline-flex scale-90 md:scale-100 md:h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                                Logout
                            </span>
                        </button>
                    </div>
                ) : (
                    <AuthButtons />
                )
            }
        </header>
    )
}

export default Header
