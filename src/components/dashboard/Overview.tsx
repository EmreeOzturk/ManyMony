// primary bg color = bg-indigo-950

import { TrendingUp, TrendingDown, Wallet ,Banana ,Plane,Drama} from "lucide-react";
import OverviewCard from "./OverviewCard";
import RecentExpenses from "./RecentExpenses";
import RecentBudgetCard from "./RecentBudgetCard";

const Overview = () => {
  return (
    <div className="flex gap-2 flex-col justify-between items-start w-full overflow-hidden relative h-full rounded-2xl p-4 text-xl md:text-4xl font-bold text-zinc-300 bg-zinc-900">
      <div className="flex w-full gap-2 flex-1">
        <div className="flex flex-col gap-2 w-full ">
          <div className="flex gap-2">
            <OverviewCard
              title="Total Income"
              value={400}
              Icon={<TrendingUp className="text-green-400" />}
            />
            <OverviewCard
              title="Total Expense"
              value={800}
              Icon={<TrendingDown className="text-red-400" />}
            />
            <OverviewCard
              title="Total Budget"
              value={1200}
              Icon={<Wallet className="text-sky-400" />}
            />
          </div>
          <div className="border h-full rounded-md"></div>
        </div>
        <div className="border flex flex-col items-start gap-2 justify-between border-indigo-500/40 bg-indigo-950/30 w-2/5 p-4 rounded-md h-full">
          <RecentExpenses />
        </div>
      </div>
      <div className="border flex flex-col p-4 bg-indigo-950/30 overflow-y-hidden items-start gap-2 justify-start border-indigo-500/40 w-full h-full rounded-md ">
        <h3 className="text-2xl">Recent Budgets</h3>
        <RecentBudgetCard
          title={"transport"}
          percentage={73}
          Icon={<Plane />}
        />
        <RecentBudgetCard title={"food"} percentage={40} Icon={<Banana />} />
        <RecentBudgetCard
          title={"entertainment"}
          percentage={60}
          Icon={<Drama />}
        />
      </div>
    </div>
  );
};

export default Overview;
