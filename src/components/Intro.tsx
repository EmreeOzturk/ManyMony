import { Form } from "react-router-dom"
import UserPlus from "../assets/icons/UserPlus"
import illus from "../assets/illustration.jpg"
const Intro = () => {
    return (
        <div className='intro'>
            <div>
                <h1>
                    Take control of <span className='accent'>Your Mone</span>
                </h1>
                <p>
                    Personal budgeting is the secret to financial success. With <span className="accent">Many Mony</span>, you can take control of your money by tracking your expenses and income.
                </p>
                <Form method='POST'>
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
            </div>
            <img src={illus} alt="" />
        </div >
    )
}

export default Intro