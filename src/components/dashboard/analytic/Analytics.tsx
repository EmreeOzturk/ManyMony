import { LineChart, DonutChart, Legend, BarChart } from "@tremor/react";
import { useAnalyticData } from "@/src/hooks/useAnalyticData";

const dataFormatter = (number: number) =>
  `$${Intl.NumberFormat("us").format(number).toString()}`;

const valueFormatter = (number: number) =>
  `$ ${Intl.NumberFormat("us").format(number).toString()}`;

const Analytics = () => {
  const { chartData, piaData, lineData } = useAnalyticData();
  return (
    <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl  font-bold text-zinc-300 bg-zinc-900">
      <div className="flex items-center justify-center  w-full h-full">
        <div className="flex flex-col w-full">
          <LineChart
            className="h-80"
            data={lineData}
            index="date"
            categories={["Daily Spendings"]}
            colors={["indigo", "rose"]}
            valueFormatter={dataFormatter}
            yAxisWidth={60}
            onValueChange={(v) => console.log(v)}
          />
          <BarChart
            className="mt-6"
            data={chartData}
            index="name"
            categories={["Budget Limit", "Budget Spent"]}
            colors={["blue", "teal", "amber", "rose", "indigo", "emerald"]}
            valueFormatter={dataFormatter}
            yAxisWidth={48}
          />
        </div>
        <div className="flex h-full flex-col items-center justify-start space-y-6">
          <DonutChart
            data={piaData}
            category="limit"
            index="name"
            valueFormatter={valueFormatter}
            colors={["blue", "cyan", "indigo", "violet", "fuchsia"]}
            className="w-40"
          />
          <Legend
            categories={piaData.map((d) => d.name)}
            colors={["blue", "cyan", "indigo", "violet", "fuchsia"]}
            className="max-w-xs"
          />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
