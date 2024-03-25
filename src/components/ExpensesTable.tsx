import { Expense } from '../types'
import ExpenseItem from "./ExpenseItem"
import { useLocation } from 'react-router-dom'

const ExpensesTable = (
    { expenses }: { expenses: Expense[] }
) => {
    const location = useLocation();
    const tableHeaders = ["Name", "Amount", "Date", "Actions"]
    if (location.pathname === "/expenses") {
        tableHeaders.push("Budget")
    }

    return (
        <div className="table">
            <table>
                <thead>
                    <tr>
                        {
                            tableHeaders.map((i, index) => (
                                <th key={index}>{i}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        expenses.map((expense) => (
                            <tr key={expense.id}>
                                <ExpenseItem expense={expense} />
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ExpensesTable