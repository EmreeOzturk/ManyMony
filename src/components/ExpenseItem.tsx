import { formatCurrency, formatDateToLocaleString, findBudgetPropsById } from "../helper"
import { Expense } from "../types"
import { useLocation, Link, useFetcher } from 'react-router-dom'
import Trash from "../assets/icons/Trash"
const ExpenseItem = ({ expense }
    : { expense: Expense }
) => {
    const location = useLocation();
    const fetcher = useFetcher();
    return (
        <>
            <td>{expense.name}</td>
            <td>{formatCurrency(expense.amount)}</td>
            <td>{formatDateToLocaleString(expense.createdAt)}</td>
            {location.pathname === "/expenses" && (<td >
                <Link to={`/budgets/${expense.budgetId}`}
                    style={{
                        backgroundColor: findBudgetPropsById(expense.budgetId)?.color
                    }}
                >
                    {findBudgetPropsById(expense.budgetId)?.name}
                </Link>
            </td>)}
            <td className="text-right">
                <fetcher.Form
                    method="DELETE"
                >
                    <input type="hidden" name="_action" value="deleteExpense" />
                    <input type="hidden" name="expenseId" value={expense.id} />
                    <button className="btn btn--warning">
                        <Trash />
                    </button>
                </fetcher.Form>

            </td>
        </>
    )
}
export default ExpenseItem