import { Drama } from "lucide-react";
import RecentBudgetCard from "./RecentBudgetCard";

const RecentBudgets = ({
  data,
}: {
  data: {
    name: string;
    limit: number;
    usage: number;
    id: string;
  }[];
}) => {
  return (
    <div className="border flex flex-col p-2 bg-indigo-950/30 overflow-y-auto items-start h-full gap-2 justify-start border-indigo-500/40 w-full  rounded-md ">
      <h3 className="text-2xl">Recent Budgets</h3>
      {data.map((budget) => {
        return (
          <RecentBudgetCard
            key={budget.id}
            title={budget.name}
            percentage={(budget.usage / budget.limit) * 100}
            Icon={<Drama />}
            budgetId={budget.id}
          />
        );
      })}
    </div>
  );
};

export default RecentBudgets;
