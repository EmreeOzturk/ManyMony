import { databases } from "../lib/appwrite";
import { Query } from "appwrite";
import type { LoaderFunction } from "react-router-dom";
import { fetchDataFromLocalStorage } from "../helper";
export const dashboardLoader: LoaderFunction = async () => {
  const userId = fetchDataFromLocalStorage("userId");
  const budgets = await databases.listDocuments(
    "66343e800011dbbdd0f4",
    "66343eb4001c491d89a7",
    [Query.equal("userId", userId), Query.orderDesc("$createdAt")]
  );

  // const getDataa = async () => {
  //   const allBudget = await fetch(
  //     "https://manymonyapp.azurewebsites.net/api/budgets/getAll",
  //     {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "text/plain",
  //       },
  //       mode: "cors",
  //     }
  //   );
  //   console.log(allBudget?.status);
  //   const allBudgetData = await allBudget.json();
  //   return allBudgetData;
  // };

  // useEffect(() => {
  //   getDataa();
  // }, []);

  return budgets;
};
