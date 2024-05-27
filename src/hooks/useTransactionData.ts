import { Models } from "appwrite";
import { useLoaderData } from "react-router-dom";

const useTransactionData = () => {
  const { documents } = useLoaderData() as { documents: Models.Document[] };

  const transactions = documents.map((budget) => {
    const transactions = budget?.expense?.map(
      (transaction: Models.Document) => {
        return {
          name: budget.name,
          category: budget.category,
          budgetId: budget.$id,
          usage: budget.usage,
          amount: transaction.amount,
          date: transaction.$createdAt,
          id: transaction.$id,
        };
      }
    );

    return transactions;
  });
  const recentTransactions = transactions.flat().sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  }) as Models.Document[];

  return {
    recentTransactions,
  };
};

export { useTransactionData };
