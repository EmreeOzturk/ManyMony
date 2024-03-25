import type { ActionFunction } from "react-router-dom";
import { toast } from "react-toastify";
import { Expense } from "../types";

export const expensesAction: ActionFunction = async ({
  request,
}: {
  request: Request;
}) => {
  const formData = await request.formData();
  const actionType = formData.get("_action");

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
};
