import { useLoaderData, Link } from "react-router-dom"
import Intro from "../components/Intro";
import AddBudgetForm from "../components/forms/AddBudgetForm";
import { Budget, Expense } from "../types";
import AddExpenseForm from "../components/forms/AddExpenseForm";
import BudgetItem from "../components/BudgetItem";
import ExpensesTable from "../components/ExpensesTable";
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
                                        {
                                            budgets.sort((a, b) => b.amount - a.amount).map(budget => (
                                                <BudgetItem key={budget.id} budget={budget} />
                                            ))
                                        }
                                    </div>
                                    {expenses && expenses.length > 0 && (
                                        <div className="grid-m">
                                            <h2>Recent Expenses</h2>
                                            <ExpensesTable expenses={
                                                expenses.sort((a, b) => b.createdAt - a.createdAt).slice(0, 5)
                                            } />
                                            {expenses.length > 5 && (
                                                <Link style={{
                                                    display: "block",
                                                    textAlign: "center",
                                                    marginTop: "1rem"
                                                
                                                }} to="/expenses" className="btn--dark btn">View all expenses</Link>
                                            )}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="grid-sm">
                                    <h3>Create a budget to get started</h3>
                                    <AddBudgetForm />
                                </div>
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