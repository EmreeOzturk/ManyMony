import { useLoaderData } from "react-router-dom"
import Intro from "../components/Intro";
import AddBudgetForm from "../components/AddBudgetForm";
import { Budget } from "../types";
const Dashboard = () => {
    
    const { userName, budgets } = useLoaderData() as { userName: string, budgets: Budget[] };
    return (
        <>
            {userName ? (
                <div className="dashboard">
                    <h2>Welcome back <span className="accent">{userName}</span></h2>
                    <div className="grid-sm">
                        {/* {
                            budgets ? () : ()
                        } */}
                        <div className="grid-lg">
                            <div className="flex-lg">
                                <AddBudgetForm />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <Intro />
            )
            }
        </>
    )
}

export default Dashboard