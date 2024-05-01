// import logomark from '../assets/logomark.svg'
import { useAuth } from '../hooks/useAuth'
import { Models } from 'appwrite';
import Logo from './Logo';
import AuthButtons from './AuthButtons';
const Header = (
) => {
    const auth = useAuth();
    return (
        <header className='bg-transparent backdrop-blur-md z-10 text-neutral-400 max-w-7xl fixed left-0 right-0 mt-4 rounded-xl shadow-lg mx-auto flex justify-between items-center h-16 px-12'>
            <Logo />
            {
                (auth as {
                    user: Models.Session
                })?.user ? (
                    <button
                        onClick={() => {
                            (auth as {
                                logoutAction: () => void
                            })?.logoutAction()
                        }}
                    >
                        Logout
                    </button>
                ) : (
                    <AuthButtons />
                )
            }
        </header>
    )
}

export default Header
