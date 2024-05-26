import { LoaderFunction } from "react-router-dom";
import { fetchDataFromLocalStorage } from "../helper";
import { databases } from "../lib/appwrite";
export const budgetDetailLoader: LoaderFunction = async ({ params }) => {
  const userId = fetchDataFromLocalStorage("userId");
  if (!userId) {
    throw new Error("User not found");
  }
  const budgetId = params.budgetId;
  const budget = await databases.getDocument(
    "66343e800011dbbdd0f4",
    "66343eb4001c491d89a7",
    budgetId?.toString() as string
  );
  if (budget.userId !== userId) {
    throw new Error("Unauthorized");
  }
  return budget;
};
