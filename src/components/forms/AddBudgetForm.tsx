import { useFetcher } from 'react-router-dom'
import Currency from '../../assets/icons/Currency'
import { useRef, useEffect } from 'react'
const AddBudgetForm = () => {
    const fetcher = useFetcher()
    const isSubmitting = fetcher.state === 'submitting'
    const formRef = useRef<HTMLFormElement>(null)
    const focusRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        if (!isSubmitting) {
            formRef.current?.reset()
        }
        if (focusRef.current) {
            focusRef.current.focus()
        }
    }, [isSubmitting])
    
    return (
        <div className='form-wrapper'>
            <h2 className='h3'>
                Create a new budget
            </h2>
            <fetcher.Form method='POST' className='grid-sm' ref={formRef}>
                <input type="hidden" name='_action' value="createBudget" />
                <div className="grid-xs">
                    <label htmlFor="newBudget">Budget Name</label>
                    <input
                        ref={focusRef}
                        id="newBudget"
                        type="text"
                        name="budgetName"
                        required
                        placeholder="e.g. Food Budget"
                        aria-label="Enter budget name"
                        autoComplete="off"
                    />
                </div>
                <div className="grid-xs">
                    <label htmlFor="newBudgetAmount">
                        Budget Amount
                    </label>
                    <input
                        id="newBudgetAmount"
                        type="number"
                        name="newBudgetAmount"
                        step={0.01}
                        required
                        placeholder="e.g. $1000"
                        aria-label="Enter budget amount"
                        autoComplete="off"
                        inputMode='decimal'
                    />
                </div>
                <div className="grid-xs">
                    <button
                        type='submit'
                        className={`btn ${isSubmitting ? 'btn--dark' : 'btn--primary'}`}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Creating...' : <> Create Budget  < Currency /></>}
                    </button>
                </div>
            </fetcher.Form>
        </div>
    )
}

export default AddBudgetForm