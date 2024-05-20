import { databases } from "../lib/appwrite";
import { Query } from "appwrite";
import type { LoaderFunction } from "react-router-dom";
import { fetchDataFromLocalStorage } from "../helper";
export const dashboardLoader: LoaderFunction = async ({ context, request }) => {
  const userId = fetchDataFromLocalStorage("userId");
  const budgets = await databases.listDocuments(
    "66343e800011dbbdd0f4",
    "66343eb4001c491d89a7",
    [Query.equal("userId", userId)]
  );
  console.log(budgets);
  console.log("dashboardLoader");
  console.log(context);
  console.log(request.headers);
  return [];
};
