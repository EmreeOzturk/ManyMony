import { useLoaderData } from "react-router-dom"
import { Expense } from "../types"
import ExpensesTable from "../components/ExpensesTable"
import { useLocation } from 'react-router-dom'

const AllExpenses = () => {
    const location = useLocation();
    const { expenses } = useLoaderData() as { expenses: Expense[] }
    return (
        <div className="grid-lg">
            {
                location.pathname == "/expenses" && (
                    <h2>All Expenses <small>({expenses.length} total)</small></h2>
                )
            }
            {expenses && expenses.length > 0 ? (
                <div className="grid-md">
                    <ExpensesTable expenses={expenses} />
                </div>
            ) : (
                <p>No Expenses to show</p>
            )}
        </div>
    )
}

export default AllExpenses