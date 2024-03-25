import { redirect, type ActionFunction } from "react-router-dom";
import { toast } from "react-toastify";
import { createExpense } from "../helper";
import { Budget, Expense } from "../types";

export const budgetDetailAction: ActionFunction = async ({
  request,
}: {
  request: Request;
}) => {
  const formData = await request.formData();
  const actionType = formData.get("_action");
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

  if (actionType === "deleteExpense") {
    try {
      const expenseId = formData.get("expenseId");
      const expenses = JSON.parse(localStorage.getItem("expenses") || "[]");
      const updatedExpenses = expenses.filter(
        (expense: Expense) => expense.id !== expenseId
      );
      localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
      return toast.success("Expense deleted successfully");
    } catch (error) {
      toast.error("Failed to delete expense");
      throw new Error("Failed to delete expense");
    }
  }

  if (actionType === "deleteBudget") {
    try {
      const budgetId = formData.get("budgetId");
      const budgets = JSON.parse(localStorage.getItem("budgets") || "[]");
      const updatedBudgets = budgets.filter(
        (budget: Budget) => budget.id !== budgetId
      );
      localStorage.setItem("budgets", JSON.stringify(updatedBudgets));
      toast.success("Budget deleted successfully");
      return redirect("/");
    } catch (error) {
      toast.error("Failed to delete budget");
      throw new Error("Failed to delete budget");
    }
  }
};
