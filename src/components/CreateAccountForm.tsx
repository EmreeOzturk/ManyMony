import { Form } from 'react-router-dom'
import UserPlus from '../assets/icons/UserPlus'

const CreateAccountForm = () => {
    return (
        <Form method='POST'>
            <input type="hidden" name='_action' value="createUser" />
            <input
                type="text"
                name="userName"
                required
                placeholder="Enter your name"
                aria-label="Enter your name"
                autoComplete="given-name"
            />
            <button
                type='submit'
                className='btn btn--primary'
            >
                <UserPlus />
                Create Account
            </button>
        </Form>
    )
}

export default CreateAccountForm