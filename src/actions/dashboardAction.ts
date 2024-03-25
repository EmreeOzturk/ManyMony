import { toast } from "react-toastify";
// import { saveDataToLocalStorage } from "../helper";
import type { ActionFunction } from "react-router-dom";
import { saveDataToLocalStorage, createBudget, createExpense } from "../helper";
export const dashboardAction: ActionFunction = async ({
  request,
}: {
  request: Request;
}) => {
  const formData = await request.formData();
  const actionType = formData.get("_action");
  if (actionType === "createUser") {
    try {
      const userName = formData.get("userName");
      saveDataToLocalStorage("userName", userName?.toString() || "");
      return toast.success(`Welcome ${userName}`);
    } catch (error) {
      toast.error("Failed to create account");
      throw new Error("Failed to create account");
    }
  }

  if (actionType === "createBudget") {
    try {
      const budgetName = formData.get("budgetName");
      const newBudgetAmount = formData.get("newBudgetAmount");
      await createBudget(
        budgetName?.toString() || "",
        newBudgetAmount?.toString() || ""
      );
      return toast.success("Budget added successfully");
    } catch (error) {
      toast.error("Failed to add budget");
      throw new Error("Failed to add budget");
    }
  }

  if (actionType === "createExpense") {
    try {
      const budgetId = formData.get("newExpenseBudget");
      const expenseName = formData.get("newExpense");
      const expenseAmount = formData.get("newExpenseAmount");
      await createExpense(
        budgetId?.toString() || "",
        expenseName?.toString() || "",
        expenseAmount?.toString() || ""
      );
      return toast.success(`Expense ${expenseName} added successfully`);
    } catch (error) {
      toast.error("Failed to add expense");
      throw new Error("Failed to add expense");
    }
  }
};
