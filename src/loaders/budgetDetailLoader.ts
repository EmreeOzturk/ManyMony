import { findBudgetPropsById, findExpensesByBudgetId } from "../helper";
import { LoaderFunction } from "react-router-dom";
export const budgetDetailLoader: LoaderFunction = async ({ params }) => {
  const budget = findBudgetPropsById(params.budgetId as string);
  if (!budget) {
    return {
      status: 404,
    };
  }

  const expenses = findExpensesByBudgetId(params.budgetId as string);

  return {
    budget,
    expenses,
  };
};
