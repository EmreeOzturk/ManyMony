import logomark from '../assets/logomark.svg'
import { Form, NavLink } from 'react-router-dom'
import Trash from '../assets/icons/Trash'
import { toast } from 'react-toastify'
const Header = (
    { userName }: { userName: string }
) => {
    const logoutToast = () => {
        toast.warning('Logging out...', {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }
    return (
        <nav>
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
                            onClick={logoutToast}
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
        </nav >
    )
}

export default Header