// primary bg color = bg-indigo-950

import { TrendingUp, TrendingDown } from "lucide-react";
import OverviewCard from "./OverviewCard";
import RecentExpenses from "./RecentExpenses";
import RecentBudgets from "./RecentBudgets";
import { BarChart } from "@tremor/react";
import { chartdata2 } from "../analytic/Analytics";

const dataFormatter = (number: number) =>
  Intl.NumberFormat("us").format(number).toString();
const Overview = () => {
  return (
    <div className="flex gap-2 flex-col justify-between items-start w-full overflow-hidden relative h-full rounded-2xl p-4 text-xl md:text-4xl font-bold text-zinc-300 bg-zinc-900">
      <div className="flex w-full gap-2 flex-1">
        <div className="flex flex-col gap-2 w-full ">
          <div className="flex gap-2">
            <OverviewCard
              title="Total Budget"
              value={1200}
              Icon={<TrendingUp className="text-green-400" />}
            />
            <OverviewCard
              title="Total Expense"
              value={800}
              Icon={<TrendingDown className="text-red-400" />}
            />
          </div>
          <div className="border-indigo-500/40 bg-indigo-950/30 border h-full rounded-md">
            <BarChart
              className="mt-6"
              data={chartdata2}
              index="name"
              categories={["Budget Limit", "Budget Spent"]}
              colors={["blue", "teal", "amber", "rose", "indigo", "emerald"]}
              valueFormatter={dataFormatter}
              yAxisWidth={48}
            />
          </div>
        </div>
        <RecentExpenses />
      </div>
      <RecentBudgets />
    </div>
  );
};

export default Overview;
