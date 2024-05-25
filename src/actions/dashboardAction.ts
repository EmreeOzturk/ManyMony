import type { ActionFunction } from "react-router-dom";
import { toast } from "react-toastify";
import { databases } from "../lib/appwrite";
import { AppwriteException, ID } from "appwrite";
import {
  checkCreateBudgetFormData,
  checkCreateExpenseFormData,
  checkDeleteExpenseFormData,
} from "../helper/checkFormData";
export const dashboardAction: ActionFunction = async ({
  request,
}: {
  request: Request;
}) => {
  const formData = await request.formData();
  const actionType = formData.get("_action");

  if (actionType === "createBudget") {
    const budgetName = formData.get("budgetName");
    const budgetLimit = formData.get("budgetLimit");
    const category = formData.get("budgetCategory");
    const userId = formData.get("userId");

    const errors = checkCreateBudgetFormData(
      budgetName as string,
      budgetLimit as string,
      category as string
    );
    if (Object.keys(errors).length > 0) {
      return errors;
    }
    try {
      databases
        .createDocument(
          "66343e800011dbbdd0f4", // => DB ID
          "66343eb4001c491d89a7", // => Collection ID
          ID.unique(),
          {
            name: budgetName?.toString(),
            limit: Number(budgetLimit),
            category: category,
            userId: userId?.toString(),
          }
        )
        .then(() => {
          toast.success("Budget added successfully", {
            autoClose: 2000,
            position: "bottom-right",
          });
        })
        .catch((error: AppwriteException) => {
          console.log(error);
          return {
            message: "Failed to create budget",
            status: "error",
          };
        });
      return {
        message: "Budget added successfully",
        status: "success",
      };
    } catch (error) {
      return {
        message: "Failed to create budget",
        status: "error",
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

  if (actionType === "createExpense") {
    const budgetId = formData.get("budget");
    const expenseAmount = formData.get("amount");
    const userId = formData.get("userId");
    const oldUsage = formData.get("oldUsage");

    console.log(oldUsage);
    const errors = checkCreateExpenseFormData(
      budgetId as string,
      expenseAmount as string,
      userId as string
    );

    if (Object.keys(errors).length > 0) {
      return errors;
    }

    try {
      const createExpense = databases.createDocument(
        "66343e800011dbbdd0f4",
        "66343ebc0025e1be1729",
        ID.unique(),
        {
          budget: budgetId?.toString(),
          amount: Number(expenseAmount),
          userId: userId?.toString(),
        }
      );

      const updateBudget = databases.updateDocument(
        "66343e800011dbbdd0f4",
        "66343eb4001c491d89a7",
        budgetId?.toString() as string,
        {
          usage: Number(oldUsage) + Number(expenseAmount),
        }
      );

      await Promise.all([createExpense, updateBudget]);
      toast.success("Expense added successfully", {
        autoClose: 2000,
        position: "bottom-right",
      });
      return {
        message: "Expense added successfully",
        status: "success",
      };
    } catch (error) {
      return {
        message: "Failed to create expense",
        status: "error",
      };
    }
  }
};
