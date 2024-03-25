import { Form, Link } from "react-router-dom";
import Trash from "../assets/icons/Trash";
import { formatCurrency, calculateTotalExpensesByBudgetId, formatPercentage } from "../helper"
import { Budget } from "../types"

const BudgetItem = (
    { budget, showDelete = false }: { budget: Budget, showDelete?: boolean }
) => {
    const { id, name, amount, color } = budget;
    const totalExpense = calculateTotalExpensesByBudgetId(id);
    return (
        <div className="budget"
            style={{
                borderColor: color,
                color: color,
                backgroundColor: `${color}1A`
            }}
        >
            <div className="progress-text">
                <h3>{name}</h3>
                <p>{formatCurrency(amount)}</p>
            </div>
            <progress max={amount} value={totalExpense} >
                {formatPercentage(amount, totalExpense)}
            </progress>
            <div className="progress-text">
                <small>{formatCurrency(totalExpense)} spent</small>
                <small>{formatCurrency(amount - totalExpense)} remaining</small>
            </div>
            {showDelete ? (
                <div className="flex-sm">
                    <Form
                        method="DELETE"
                        onSubmit={(event) => {
                            if (
                                !confirm(
                                    "Are you sure you want to permanently delete this budget?"
                                )
                            ) {
                                event.preventDefault();
                            }
                        }}
                    >
                        <input type="hidden" name="_action" value="deleteBudget" />
                        <input type="hidden" name="budgetId" value={id} />
                        <button type="submit" className="btn btn--warning">
                            <span>Delete Budget</span>
                            <Trash />
                        </button>
                    </Form>
                </div>
            ) : (
                <div className="flex-sm">
                    <Link to={`/budgets/${id}`} className="btn">
                        <span>View Details</span>
                        {/* <BanknotesIcon  /> */}
                    </Link>
                </div>
            )}
        </div>
    )
}

export default BudgetItem