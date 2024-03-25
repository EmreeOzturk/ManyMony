import illus from "../assets/illustration.jpg"
import CreateAccountForm from "./forms/CreateAccountForm"
const Intro = () => {
    return (
        <div className='intro'>
            <div>
                <h1>
                    Take control of <span className='accent'>Your Money</span>
                </h1>
                <p>
                    Personal budgeting is the secret to financial success. With <span className="accent">Many Mony</span>, you can take control of your money by tracking your expenses and income.
                </p>
                <CreateAccountForm />
            </div>
            <img src={illus} alt="" />
        </div >
    )
}

export default Intro