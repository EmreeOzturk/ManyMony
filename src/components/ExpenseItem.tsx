import { formatCurrency, formatDateToLocaleString, findBudgetPropsById } from "../helper"
import { Expense } from "../types"
import { useLocation, Link } from 'react-router-dom'
import Trash from "../assets/icons/Trash"
const ExpenseItem = ({ expense }
    : { expense: Expense }
) => {
    const location = useLocation();
    return (
        <>
            <td>{expense.name}</td>
            <td>{formatCurrency(expense.amount)}</td>
            <td>{formatDateToLocaleString(expense.createdAt)}</td>
            {location.pathname === "/expenses" && (<td >
                <Link to={`/`}
                    style={{
                        backgroundColor: findBudgetPropsById(expense.budgetId)?.color
                    }}
                >
                    {findBudgetPropsById(expense.budgetId)?.name}
                </Link>
            </td>)}
            {location.pathname === "/expenses" && (<td className="text-right">
                <button className="btn btn--warning">
                    <Trash />
                </button>
            </td>)}
        </>
    )
}
export default ExpenseItem