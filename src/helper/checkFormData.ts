import { toast } from "react-toastify";
export const checkCreateBudgetFormData = (
  budgetName: string,
  budgetLimit: string,
  category: string
) => {
  const errors: {
    budgetName?: string;
    budgetLimit?: string;
    category?: string;
  } = {} as Record<string, string>;

  if (!budgetName) {
    errors["budgetName"] = "Budget name is required";
    toast.error("Budget name is required", {
      autoClose: 2000,
      position: "top-center",
      theme: "dark",
      pauseOnHover: false,
    });
  }
  if (!budgetLimit) {
    errors["budgetLimit"] = "Budget limit is required";
    toast.error("Budget limit is required", {
      autoClose: 2000,
      position: "top-center",
      theme: "dark",
      pauseOnHover: false,
    });
  }
  if (!category) {
    errors["category"] = "Budget category is required";
    toast.error("Budget category is required", {
      autoClose: 2000,
      position: "top-center",
      pauseOnHover: false,
      theme: "dark",
    });
  }
  return errors;
};

export const checkDeleteExpenseFormData = (
  expenseId: string,
  amount: string,
  budgetId: string
) => {
  const errors = {} as Record<string, string>;
  if (!expenseId) {
    errors["expenseId"] = "Expense ID is required";
    toast.error("Expense ID is required", {
      autoClose: 2000,
      position: "top-center",
      theme: "dark",
      pauseOnHover: false,
    });
  }
  if (!amount) {
    errors["amount"] = "Amount is required";
    toast.error("Amount is required", {
      autoClose: 2000,
      position: "top-center",
      theme: "dark",
      pauseOnHover: false,
    });
  }
  if (!budgetId) {
    errors["budgetId"] = "Budget ID is required";
    toast.error("Budget ID is required", {
      autoClose: 2000,
      position: "top-center",
      theme: "dark",
      pauseOnHover: false,
    });
  }
  return errors;
};

export const checkCreateExpenseFormData = (
  budgetId: string,
  amount: string,
  userId: string
) => {
  const errors = {} as Record<string, string>;
  if (!budgetId) {
    errors["budgetId"] = "Budget is required";
    toast.error("Budget is required", {
      autoClose: 2000,
      position: "top-center",
      theme: "dark",
      pauseOnHover: false,
    });
  }
  if (!amount) {
    errors["amount"] = "Amount is required";
    toast.error("Amount is required", {
      autoClose: 2000,
      position: "top-center",
      theme: "dark",
      pauseOnHover: false,
    });
  }
  if (!userId) {
    errors["userId"] = "User ID is required";
    toast.error("User ID is required", {
      autoClose: 2000,
      position: "top-center",
      theme: "dark",
      pauseOnHover: false,
    });
  }
  return errors;
};
