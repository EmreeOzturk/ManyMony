import { useLoaderData } from "react-router-dom";
import { Models } from "appwrite";

const useAnalyticData = () => {
  const { documents } = useLoaderData() as { documents: Models.Document[] };

  const chartData = documents.map((budget) => {
    return {
      name: budget.name,
      "Budget Limit": budget.limit,
      "Budget Spent": budget.usage,
    };
  });

  const piaData = documents.map((budget) => {
    return {
      name: budget.name,
      limit: budget.limit,
    };
  });

  const lineData = documents.map((budget) => {
    const transactions = budget.expense.map((transaction: Models.Document) => {
      return {
        date: new Date(transaction.$createdAt).toLocaleString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
        "Daily Spendings": transaction.amount,
      };
    });

    return transactions;
  });

  const expandedLineData = lineData.flat().sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  return {
    chartData,
    piaData,
    lineData: expandedLineData,
  };
};

export { useAnalyticData };
