import { Models } from "appwrite";
import { useLoaderData } from "react-router-dom";

const useTransactionData = () => {
  const { documents } = useLoaderData() as { documents: Models.Document[] };
  console.log(documents);

  const transactions = documents.map((budget) => {
    console.log(budget)
    const transactions = budget.expense.map(
      (transaction: Models.Document) => {
        return {
          name: budget.name,
          amount: transaction.amount,
          date: transaction.$createdAt,
          category: budget.category,
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
