import { Models } from "appwrite";
import { useLoaderData } from "react-router-dom";

const useOverviewData = () => {
  const { documents } = useLoaderData() as { documents: Models.Document[] };
  console.log(documents);

  const totalBudget = documents.reduce((acc, curr) => {
    return acc + Number(curr.limit);
  }, 0);

  const totalExpense = documents.reduce((acc, curr) => {
    return acc + Number(curr.usage);
  }, 0);

  const recentBudgets = documents.slice(0, 3).map((budget) => {
    return {
      name: budget.name,
      limit: budget.limit,
      usage: budget.usage,
      id: budget.$id,
    };
  });

  const expenses = documents.map((budget) => {
    const expenses = budget.expense.map((expense: Models.Document) => {
      return {
        name: budget.name,
        amount: expense.amount,
        date: expense.$createdAt,
        id: expense.$id,
      };
    });

    return expenses;
  });
  const recentExpenses = expenses.flat().sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  }) as Models.Document[];

  const chartData = documents.map((budget) => {
    return {
      name: budget.name,
      "Budget Limit": budget.limit,
      "Budget Spent": budget.usage,
    };
  });

  return {
    totalBudget,
    totalExpense,
    recentBudgets,
    recentExpenses,
    chartData,
  };
};

export { useOverviewData };
