import { useLoaderData } from "react-router-dom";
import { Models } from "appwrite";

const useAnalyticData = () => {
  const { documents } = useLoaderData() as { documents: Models.Document[] };
  console.log(documents);

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

  //   const lineData = [
  //     { date: "2022-01-01", "Daily Spendings": 100 },
  //     { date: "2022-01-02", "Daily Spendings": 120 },
  //     { date: "2022-01-03", "Daily Spendings": 80 },
  //     { date: "2022-01-04", "Daily Spendings": 90 },
  //     { date: "2022-01-05", "Daily Spendings": 110 },
  //     { date: "2022-01-06", "Daily Spendings": 95 },
  //     { date: "2022-01-07", "Daily Spendings": 100 },
  //     { date: "2022-01-08", "Daily Spendings": 85 },
  //     { date: "2022-01-09", "Daily Spendings": 115 },
  //     { date: "2022-01-10", "Daily Spendings": 130 },
  //     { date: "2022-01-11", "Daily Spendings": 105 },
  //     { date: "2022-01-12", "Daily Spendings": 98 },
  //     { date: "2022-01-13", "Daily Spendings": 125 },
  //     { date: "2022-01-14", "Daily Spendings": 80 },
  //     { date: "2022-01-15", "Daily Spendings": 90 },
  //     { date: "2022-01-16", "Daily Spendings": 100 },
  //     { date: "2022-01-17", "Daily Spendings": 105 },
  //     { date: "2022-01-18", "Daily Spendings": 110 },
  //     { date: "2022-01-19", "Daily Spendings": 115 },
  //     { date: "2022-01-20", "Daily Spendings": 120 },
  //     { date: "2022-01-21", "Daily Spendings": 85 },
  //     { date: "2022-01-22", "Daily Spendings": 95 },
  //     { date: "2022-01-23", "Daily Spendings": 100 },
  //     { date: "2022-01-24", "Daily Spendings": 105 },
  //     { date: "2022-01-25", "Daily Spendings": 110 },
  //     { date: "2022-01-26", "Daily Spendings": 115 },
  //     { date: "2022-01-27", "Daily Spendings": 120 },
  //     { date: "2022-01-28", "Daily Spendings": 125 },
  //     { date: "2022-01-29", "Daily Spendings": 130 },
  //     { date: "2022-01-30", "Daily Spendings": 135 },
  //     { date: "2022-01-31", "Daily Spendings": 140 },
  //   ];

  const lineData = documents.map((budget) => {
    const transactions = budget.expense.map((transaction: Models.Document) => {
      return {
        date: transaction.$createdAt,
        "Daily Spendings": transaction.amount,
      };
    });

    return transactions;
  });

  const expandedLineData = lineData.flat().sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  console.log(expandedLineData);

  return {
    chartData,
    piaData,
    lineData: expandedLineData,
  };
};

export { useAnalyticData };
