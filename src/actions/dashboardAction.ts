import { toast } from "react-toastify";
import type { ActionFunction } from "react-router-dom";
import { saveDataToLocalStorage, createExpense } from "../helper";
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
    console.log("createBudget");
    const budgetName = formData.get("budgetName");
    const budgetLimit = formData.get("budgetLimit");
    const categpry = formData.get("budgetCategory");
    const userId = formData.get("userId");
    const errors = {} as Record<string, string>;
    console.log({
      budgetName,
      budgetLimit,
      categpry,
      userId,
    });
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
      // const result = await databases.createDocument(
      //   "66343e800011dbbdd0f4",
      //   "66343eb4001c491d89a7",
      //   ID.unique(),
      //   {
      //     name: budgetName?.toString(),
      //     limit: Number(budgetLimit),
      //     category: categpry,
      //     userId: userId?.toString(),
      //   }
      // );
      // console.log(result);
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
