import type { ActionFunction } from "react-router-dom";
import { redirect } from "react-router-dom";
import { databases } from "../lib/appwrite";
import { toast } from "react-toastify";
import { checkDeleteExpenseFormData } from "../helper/checkFormData";
import { AppwriteException } from "appwrite";

export const budgetDetailAction: ActionFunction = async ({
  request,
}: {
  request: Request;
}) => {
  const formData = await request.formData();
  const actionType = formData.get("_action");

  if (actionType === "deleteBudget") {
    const budgetId = formData.get("budgetId");

    try {
      databases
        .deleteDocument(
          "66343e800011dbbdd0f4",
          "66343eb4001c491d89a7",
          budgetId as string
        )
        .then(() => {
          toast.success("Budget deleted successfully", {
            autoClose: 2000,
            position: "bottom-right",
          });
        })
        .catch(() => {
          toast.error("Failed to delete budget", {
            autoClose: 2000,
            position: "bottom-right",
          });
        });
      return redirect("/dashboard");
    } catch (e) {
      console.log(e);
      return {
        status: "failed",
      };
    }
  }
  if (actionType === "deleteExpense") {
    const expenseId = formData.get("_id");
    const budgetId = formData.get("_budgetId");
    const amount = formData.get("amount");
    const usage = formData.get("usage");

    const errors = checkDeleteExpenseFormData(
      expenseId as string,
      amount as string,
      budgetId as string
    );
    if (Object.keys(errors).length > 0) {
      return errors;
    }
    try {
      const deleteExpense = databases.deleteDocument(
        "66343e800011dbbdd0f4",
        "66343ebc0025e1be1729",
        expenseId?.toString() as string
      );
      const updateBudget = databases.updateDocument(
        "66343e800011dbbdd0f4",
        "66343eb4001c491d89a7",
        budgetId as string,
        {
          usage: Number(usage) - Number(amount),
        }
      );
      await Promise.all([deleteExpense, updateBudget])
        .then(() => {
          toast.success("Expense deleted successfully", {
            autoClose: 2000,
            position: "bottom-right",
          });
        })
        .catch((error: AppwriteException) => {
          console.log(error);
          return {
            message: "Failed to delete expense",
            status: "error",
          };
        });
      return {
        message: "Expense deleted successfully",
        status: "success",
      };
    } catch (error) {
      return {
        message: "Failed to delete expense",
        status: "error",
      };
    }
  }
  if (actionType === "editBudget") {
    const budgetId = formData.get("budgetId");
    const budgetName = formData.get("budgetName");
    const budgetLimit = formData.get("budgetLimit");
    const budgetCategory = formData.get("budgetCategory");

    try {
      databases
        .updateDocument(
          "66343e800011dbbdd0f4",
          "66343eb4001c491d89a7",
          budgetId as string,
          {
            name: budgetName && budgetName,
            limit: budgetLimit && Number(budgetLimit),
            category: budgetCategory && budgetCategory,
          }
        )
        .then(() => {
          toast.success("Budget updated successfully", {
            autoClose: 2000,
            position: "bottom-right",
          });
        })
        .catch(() => {
          toast.error("Failed to update budget", {
            autoClose: 2000,
            position: "bottom-right",
          });
        });
      return {
        status: "success",
      };
    } catch (e) {
      console.log(e);
      return {
        status: "failed",
      };
    }
  }
};
