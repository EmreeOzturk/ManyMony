import { Expense } from '../types'
import ExpenseItem from "./ExpenseItem"
const ExpensesTable = (
    { expenses }: { expenses: Expense[] }
) => {
    return (
        <div className="table">
            <table>
                <thead>
                    <tr>
                        {
                            ["Name", "Amount", "Date"].map((i, index) => (
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