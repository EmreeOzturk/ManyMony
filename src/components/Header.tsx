// import logomark from '../assets/logomark.svg'
import { NavLink } from 'react-router-dom'
// import Trash from '../assets/icons/Trash'
import WalletIcon from './icons/WalletIcon'
import { useAuth } from '../hooks/useAuth'
const Header = (
    // { userName }: { userName: string }
) => {
    const auth = useAuth();
    return (
        <header className='bg-transparent backdrop-blur-md z-10 text-neutral-400 max-w-7xl fixed left-0 right-0 mt-4 rounded-xl shadow-lg mx-auto flex justify-between items-center h-16 px-12'>
            <div>
                <NavLink to="/expenses" className="flex items-center justify-center gap-3 text-2xl tracking-widest font-mono
                    bg-gradient-to-r from-violet-500 to-blue-700 text-transparent bg-clip-text logoAnimation
                ">
                    <WalletIcon className="logoAnimation" />
                    <span>
                        ManyMony
                    </span>
                </NavLink>
            </div>
            <nav className='flex items-center justify-center gap-4 text-2xl font-mono'>
                <NavLink to="/login" aria-label='login link'>
                    Login
                </NavLink>
                <NavLink to="/register" aria-label='register link'>
                    Register
                </NavLink>
            </nav>
            <button
                onClick={() => {
                    (auth as {
                        logoutAction: () => void
                    })?.logoutAction()
                }}
            >
                Logout
            </button>
        </header>
    )
}

export default Header


{/* <nav>
<NavLink to="/" aria-label='Go to home'>
    <img src={logomark} alt="logomark" />
    <span>
        Many Mony
    </span>
</NavLink>
{
    userName ? (
        <Form action='/logout' method='POST'
            onSubmit={(event) => {
                if (!confirm('Are you sure you want to logout?')) {
                    event.preventDefault()
                }
            }
            }>
            <button
                type='submit'
                aria-label='Logout'
                className='btn btn--warning'
            >
                <Trash />
                Logout
            </button>
        </Form>
    ) : (
        <div >

        </div>
    )
}
</nav > */}