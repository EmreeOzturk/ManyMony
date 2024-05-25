import { toast } from "react-toastify";
import type { ActionFunction } from "react-router-dom";
import { saveDataToLocalStorage } from "../helper";
import { databases } from "../lib/appwrite";
import { ID } from "appwrite";
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
    const budgetName = formData.get("budgetName");
    const budgetLimit = formData.get("budgetLimit");
    const categpry = formData.get("budgetCategory");
    const userId = formData.get("userId");
    const errors = {} as Record<string, string>;

    if (!budgetName) {
      errors["budgetName"] = "Budget name is required";
      toast.error("Budget name is required", {
        autoClose: 2000,
        position: "bottom-right",
      });
    }
    if (!budgetLimit) {
      errors["budgetLimit"] = "Budget limit is required";
      toast.error("Budget limit is required", {
        autoClose: 2000,
        position: "bottom-right",
      });
    }
    if (!categpry) {
      errors["categpry"] = "Budget category is required";
      toast.error("Budget category is required", {
        autoClose: 2000,
        position: "bottom-right",
      });
    }
    if (Object.keys(errors).length > 0) {
      return errors;
    }
    try {
      await databases.createDocument(
        "66343e800011dbbdd0f4",
        "66343eb4001c491d89a7",
        ID.unique(),
        {
          name: budgetName?.toString(),
          limit: Number(budgetLimit),
          category: categpry,
          userId: userId?.toString(),
        }
      );
      toast.success("Budget added successfully", {
        autoClose: 2000,
        position: "bottom-right",
      });
      return {
        message: "Budget added successfully",
        status: "success",
      };
    } catch (error) {
      console.log(error);
      return {
        message: "Failed to create budget",
        status: "error",
      };
    }
  }

  if (actionType === "deleteExpense") {
    const expenseId = formData.get("_id");
    const errors = {} as Record<string, string>;
    if (!expenseId) {
      errors["expenseId"] = "Expense ID is required";
      toast.error("Expense ID is required", {
        autoClose: 2000,
        position: "bottom-right",
      });
    }

    if (Object.keys(errors).length > 0) {
      return errors;
    }

    try {
      const expense = await databases.getDocument(
        "66343e800011dbbdd0f4",
        "66343ebc0025e1be1729",
        expenseId?.toString() as string
      );
      const budgetId = expense.budget?.$id;
      const expenseAmount = expense.amount;
      const oldUsage = await databases.getDocument(
        "66343e800011dbbdd0f4",
        "66343eb4001c491d89a7",
        budgetId as string
      );

      await databases.deleteDocument(
        "66343e800011dbbdd0f4",
        "66343ebc0025e1be1729",
        expenseId?.toString() as string
      );

      await databases.updateDocument(
        "66343e800011dbbdd0f4",
        "66343eb4001c491d89a7",
        budgetId as string,
        {
          usage: Number(oldUsage.usage) - Number(expenseAmount),
        }
      );
      toast.success("Expense deleted successfully", {
        autoClose: 2000,
        position: "bottom-right",
      });
      return {
        message: "Expense deleted successfully",
        status: "success",
      };
    } catch (error) {
      console.log(error);
      return {
        message: "Failed to delete expense",
        status: "error",
      };
    }
  }

  if (actionType === "createExpense") {
    const budgetId = formData.get("budget");
    const expenseAmount = formData.get("amount");
    const userId = formData.get("userId");
    const errors = {} as Record<string, string>;

    if (!budgetId) {
      errors["budget"] = "Budget is required";
      toast.error("Budget is required", {
        autoClose: 2000,
        position: "bottom-right",
      });
    }

    if (!expenseAmount) {
      errors["amount"] = "Amount is required";
      toast.error("Amount is required", {
        autoClose: 2000,
        position: "bottom-right",
      });
    }

    if (Object.keys(errors).length > 0) {
      return errors;
    }

    try {
      await databases.createDocument(
        "66343e800011dbbdd0f4",
        "66343ebc0025e1be1729",
        ID.unique(),
        {
          budget: budgetId?.toString(),
          amount: Number(expenseAmount),
          userId: userId?.toString(),
        }
      );
      const oldUsage = await databases.getDocument(
        "66343e800011dbbdd0f4",
        "66343eb4001c491d89a7",
        budgetId?.toString() as string
      );

      await databases.updateDocument(
        "66343e800011dbbdd0f4",
        "66343eb4001c491d89a7",
        budgetId?.toString() as string,
        {
          usage: Number(oldUsage.usage) + Number(expenseAmount),
        }
      );
      toast.success("Expense added successfully", {
        autoClose: 2000,
        position: "bottom-right",
      });
      return {
        message: "Expense added successfully",
        status: "success",
      };
    } catch (error) {
      console.log(error);
      return {
        message: "Failed to create expense",
        status: "error",
      };
    }
  }
};
