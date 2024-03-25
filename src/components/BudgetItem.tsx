import { formatCurrency, calculateTotalExpensesByBudgetId, formatPercentage } from "../helper"
import { Budget } from "../types"

const BudgetItem = (
    { budget }: { budget: Budget }
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
        </div>
    )
}

export default BudgetItem