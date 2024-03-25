import { formatCurrency, formatDateToLocaleString } from "../helper"
import { Expense } from "../types"

const ExpenseItem = ({ expense }
    : { expense: Expense }
) => {
    return (
        <>
            <td>{expense.name}</td>
            <td>{formatCurrency(expense.amount)}</td>
            <td>{formatDateToLocaleString(expense.createdAt)}</td>
        </>
    )
}
export default ExpenseItem