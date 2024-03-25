import { useFetcher } from "react-router-dom"
import { Budget } from "../../types"
import { useRef, useEffect } from "react"
import Add from "../../assets/icons/Add"
const AddExpenseForm = (
    { budgets }: { budgets: Budget[] }
) => {
    const formRef = useRef<HTMLFormElement>(null)
    const focusRef = useRef<HTMLInputElement>(null)
    const fetcher = useFetcher()
    const isSubmitting = fetcher.state === 'submitting'
    useEffect(() => {
        if (!isSubmitting) {
            formRef.current?.reset()
        }
        focusRef.current?.focus()
    }, [isSubmitting])

    return (
        <div className="form-wrapper">
            <h2 className="h3">Add New <span className="accent">
                {budgets.length === 1 && budgets[0].name}
            </span> Expense</h2>
            <fetcher.Form
                method="POST"
                className="grid-sm"
                ref={formRef}
            >
                <input type="hidden" name="_action" value="createExpense" />
                <div className="expense-input">
                    <div className="grid-xs">
                        <label htmlFor="newExpense">Name</label>
                        <input
                            type="text"
                            name="newExpense"
                            id="newExpense"
                            required
                            ref={focusRef}
                            placeholder="e.g. Rent"
                        />
                    </div>
                    <div className="grid-xs"
                        style={{
                            marginTop: '1rem'
                        }}
                    >
                        <label htmlFor="newExpenseAmount">Amount</label>
                        <input
                            type="number"
                            name="newExpenseAmount"
                            id="newExpenseAmount"
                            required
                            placeholder="e.g. 150.00"
                            step={0.01}
                            inputMode="decimal"
                        />
                    </div>
                    <div className="grid-xs" hidden={budgets.length === 1} style={{
                        marginTop: '1rem'
                    }}>
                        <label htmlFor="newExpenseBudget">Budget Category</label>
                        <select
                            name="newExpenseBudget"
                            id="newExpenseBudget"
                            required
                        >
                            {budgets.sort((a, b) => b.createdAt - a.createdAt).map(budget => (
                                <option key={budget.id} value={budget.id}>{budget.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="grid-xs" style={{
                        marginTop: '1rem'
                    }}>
                        <button
                            type="submit"
                            className={`btn ${isSubmitting ? 'btn--dark' : 'btn--primary'}`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Adding...' : <><Add /> Add Expense</>}
                        </button>
                    </div>
                </div>
            </fetcher.Form>
        </div>
    )
}

export default AddExpenseForm