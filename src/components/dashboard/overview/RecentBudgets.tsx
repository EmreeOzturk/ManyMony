import { Banana, Drama, Plane } from "lucide-react";
import RecentBudgetCard from "./RecentBudgetCard";
import { Models } from "appwrite";

const RecentBudgets = ({ data }: { data: Models.Document[] }) => {
  return (
    <div className="border flex flex-col p-4 bg-indigo-950/30 overflow-y-hidden items-start gap-2 justify-start border-indigo-500/40 w-full  rounded-md ">
      <h3 className="text-2xl">Recent Budgets</h3>
      {data.map((budget) => {
        return (
          <RecentBudgetCard
            key={budget.$id}
            title={budget.name}
            percentage={(budget.usage / budget.limit) * 100}
            Icon={<Drama />}
          />
        );
      })}
    </div>
  );
};

export default RecentBudgets;
