import { Models } from "appwrite";
import BudgetCard from "./BudgetCard";
import { useLoaderData } from "react-router-dom";
const Budgets = () => {
  const { documents } = useLoaderData() as { documents: Models.Document[] };
  return (
    <div className="w-full gap-4 overflow-y-auto px-10 mx-auto overflow-hidden flex items-center flex-wrap justify-center relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-zinc-300 bg-zinc-900">
      {documents.map((budget, index) => {
        return (
          <BudgetCard
            key={budget.$id}
            name={budget.name}
            amount={budget.limit}
            percentage={(budget.usage / budget.limit) * 100}
            categories={budget.category}
            index={index}
            budgetId={budget.$id}
          />
        );
      })}
    </div>
  );
};

export default Budgets;
