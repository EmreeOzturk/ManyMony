import logomark from '../assets/logomark.svg'
import { Form, NavLink } from 'react-router-dom'
import Trash from '../assets/icons/Trash'
const Header = (
    { userName }: { userName: string }
) => {
    return (
        <nav>
            <NavLink to="/" aria-label='Go to home'>
                <img src={logomark} alt="logomark" />
                <span>
                    Many Mony
                </span>
            </NavLink>
            <h1>Header</h1>
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
                    <div>
                        <NavLink to="/login">
                            Login
                        </NavLink>
                        <NavLink to="/signup">
                            Signup
                        </NavLink>
                    </div>
                )
            }
        </nav >
    )
}

export default Header