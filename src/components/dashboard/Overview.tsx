// primary bg color = bg-indigo-950

import { TrendingUp, TrendingDown, Wallet } from "lucide-react";
import OverviewCard from "./OverviewCard";
import RecentExpenses from "./RecentExpenses";
import RecentBudgets from "./RecentBudgets";
import { BarChart } from "@tremor/react";

const chartdata = [
  {
    name: "Amphibians",
    "Number of threatened species": 2488,
  },
  {
    name: "Birds",
    "Number of threatened species": 1445,
  },
  {
    name: "Crustaceans",
    "Number of threatened species": 743,
  },
  {
    name: "Ferns",
    "Number of threatened species": 281,
  },
  {
    name: "Arachnids",
    "Number of threatened species": 251,
  },
  {
    name: "Corals",
    "Number of threatened species": 232,
  },
  {
    name: "Algae",
    "Number of threatened species": 98,
  },
];

const dataFormatter = (number: number) =>
  Intl.NumberFormat("us").format(number).toString();
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
          <div className="border-indigo-500/40 bg-indigo-950/30 border h-full rounded-md">
            <BarChart
              data={chartdata}
              index="name"
              categories={["Number of threatened species"]}
              colors={["indigo-800"]}
              valueFormatter={dataFormatter}
              onValueChange={(v) => console.log(v)}
              className="w-full h-[99%]"
            />
          </div>
        </div>
        <div className="border flex flex-col items-start gap-2 justify-between border-indigo-500/40 bg-indigo-950/30 w-2/5 p-4 rounded-md ">
          <RecentExpenses />
        </div>
      </div>
      <div className="border flex flex-col p-4 bg-indigo-950/30 overflow-y-hidden items-start gap-2 justify-start border-indigo-500/40 w-full  rounded-md ">
        <RecentBudgets />
      </div>
    </div>
  );
};

export default Overview;
