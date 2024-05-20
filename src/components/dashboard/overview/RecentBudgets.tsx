import { Banana, Drama, Plane } from "lucide-react";
import RecentBudgetCard from "./RecentBudgetCard";

const RecentBudgets = () => {
  return (
    <div className="border flex flex-col p-4 bg-indigo-950/30 overflow-y-hidden items-start gap-2 justify-start border-indigo-500/40 w-full  rounded-md ">
      <h3 className="text-2xl">Recent Budgets</h3>
      <RecentBudgetCard title={"transport"} percentage={73} Icon={<Plane />} />
      <RecentBudgetCard title={"food"} percentage={40} Icon={<Banana />} />
      <RecentBudgetCard
        title={"entertainment"}
        percentage={60}
        Icon={<Drama />}
      />
    </div>
  );
};

export default RecentBudgets;
