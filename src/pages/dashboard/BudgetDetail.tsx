import { useLoaderData } from "react-router-dom"
import { Budget, Expense } from "../../types"
import BudgetItem from "../../components/BudgetItem"
import AddExpenseForm from "../../components/forms/AddExpenseForm"
import ExpensesTable from "../../components/ExpensesTable"

const BudgetDetail = () => {
    const { budget, expenses } = useLoaderData() as { budget: Budget, expenses: Expense[] }
    return (
        <div
            className="grid-lg"

        >
            <h1 className="h2">
                <span className="accent">{budget.name}</span> Overview
            </h1>
            <div className="flex-lg">
                <BudgetItem budget={budget} showDelete={true} />
                <AddExpenseForm budgets={[budget]} />
            </div>
            {expenses && expenses.length > 0 && (
                <div className="grid-md">
                    <h2>
                        <span className="accent">{budget.name}</span> Expenses
                    </h2>
                    <ExpensesTable expenses={expenses} />
                </div>
            )}
        </div>
    )
}

export default BudgetDetail