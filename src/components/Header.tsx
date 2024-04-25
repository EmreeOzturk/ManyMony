import logomark from '../assets/logomark.svg'
import { Form, NavLink } from 'react-router-dom'
import Trash from '../assets/icons/Trash'
const Header = (
    { userName }: { userName: string }
) => {
    return (
        <header className='bg-slate-600/40 text-white max-w-7xl fixed left-0 right-0 mt-4 rounded-xl shadow-lg mx-auto flex justify-between items-center'>
            <div>
                Logo
            </div>

            <div>
                <nav>
                    <p>Login</p>
                    <p>Register</p>
                </nav>
            </div>
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