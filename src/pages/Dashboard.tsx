import { useLoaderData } from "react-router-dom"
import Intro from "../components/Intro";
import AddBudgetForm from "../components/forms/AddBudgetForm";
import { Budget, Expense } from "../types";
import AddExpenseForm from "../components/forms/AddExpenseForm";
import BudgetItem from "../components/BudgetItem";
const Dashboard = () => {
    const { userName, budgets, expenses } = useLoaderData() as { userName: string, budgets: Budget[], expenses: Expense[] };
    return (
        <>
            {userName ? (
                <div className="dashboard">
                    <h2>Welcome back <span className="accent">{userName}</span></h2>
                    <div className="grid-sm">
                        {
                            budgets && budgets.length > 0 ? (
                                <div className="grid-lg">
                                    <div className="flex-lg">
                                        <AddBudgetForm />
                                        <AddExpenseForm budgets={budgets} />
                                    </div>
                                    <h2>Existing Budgets</h2>
                                    <div className="budgets">
                                        {budgets.map(budget => (
                                            <BudgetItem budget={budget} />
                                        ))}
                                    </div>
                                </div>) : (
                                <>
                                    <div className="grid-sm">
                                        <h3>Create a budget to get started</h3>
                                        <AddBudgetForm />
                                    </div>
                                </>
                            )
                        }
                    </div>
                </div>
            ) :
                (
                    <Intro />
                )
            }
        </>
    )
}

export default Dashboard