import { LineChart, DonutChart, Legend, BarChart } from "@tremor/react";
const chartdata = [
  { date: "2022-01-01", "Daily Spendings": 100 },
  { date: "2022-01-02", "Daily Spendings": 120 },
  { date: "2022-01-03", "Daily Spendings": 80 },
  { date: "2022-01-04", "Daily Spendings": 90 },
  { date: "2022-01-05", "Daily Spendings": 110 },
  { date: "2022-01-06", "Daily Spendings": 95 },
  { date: "2022-01-07", "Daily Spendings": 100 },
  { date: "2022-01-08", "Daily Spendings": 85 },
  { date: "2022-01-09", "Daily Spendings": 115 },
  { date: "2022-01-10", "Daily Spendings": 130 },
  { date: "2022-01-11", "Daily Spendings": 105 },
  { date: "2022-01-12", "Daily Spendings": 98 },
  { date: "2022-01-13", "Daily Spendings": 125 },
  { date: "2022-01-14", "Daily Spendings": 80 },
  { date: "2022-01-15", "Daily Spendings": 90 },
  { date: "2022-01-16", "Daily Spendings": 100 },
  { date: "2022-01-17", "Daily Spendings": 105 },
  { date: "2022-01-18", "Daily Spendings": 110 },
  { date: "2022-01-19", "Daily Spendings": 115 },
  { date: "2022-01-20", "Daily Spendings": 120 },
  { date: "2022-01-21", "Daily Spendings": 85 },
  { date: "2022-01-22", "Daily Spendings": 95 },
  { date: "2022-01-23", "Daily Spendings": 100 },
  { date: "2022-01-24", "Daily Spendings": 105 },
  { date: "2022-01-25", "Daily Spendings": 110 },
  { date: "2022-01-26", "Daily Spendings": 115 },
  { date: "2022-01-27", "Daily Spendings": 120 },
  { date: "2022-01-28", "Daily Spendings": 125 },
  { date: "2022-01-29", "Daily Spendings": 130 },
  { date: "2022-01-30", "Daily Spendings": 135 },
  { date: "2022-01-31", "Daily Spendings": 140 },
];
export const chartdata2 = [
  {
    name: "Food Budget",
    "Budget Limit": 890,
    "Budget Spent": 338,
  },
  {
    name: "Entertainment Budget",
    "Budget Limit": 990,
    "Budget Spent": 233,
  },
  {
    name: "Groceries Budget",
    "Budget Limit": 550,
    "Budget Spent": 535,
  },
  {
    name: "Transport Budget",
    "Budget Limit": 660,
    "Budget Spent": 500,
  },
];

const dataFormatter = (number: number) =>
  `$${Intl.NumberFormat("us").format(number).toString()}`;
const categoriesData = [
  {
    name: "Food Budget",
    limit: 1180,
  },
  {
    name: "Entertainment Budget",
    limit: 456,
  },
  {
    name: "Groceries Budget",
    limit: 390,
  },
  {
    name: "Transport Budget",
    limit: 240,
  },
  {
    name: "Shopping Budget",
    limit: 190,
  },
];

const valueFormatter = (number: number) =>
  `$ ${Intl.NumberFormat("us").format(number).toString()}`;

const Analytics = () => {
  return (
    <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl  font-bold text-zinc-300 bg-zinc-900">
      <div className="flex items-center justify-center  w-full h-full">
        <div className="flex flex-col w-full">
          <LineChart
            className="h-80"
            data={chartdata}
            index="date"
            categories={["Daily Spendings"]}
            colors={["indigo", "rose"]}
            valueFormatter={dataFormatter}
            yAxisWidth={60}
            onValueChange={(v) => console.log(v)}
          />
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
        <div className="flex h-full flex-col items-center justify-start space-y-6">
          <DonutChart
            data={categoriesData}
            category="limit"
            index="name"
            valueFormatter={valueFormatter}
            colors={["blue", "cyan", "indigo", "violet", "fuchsia"]}
            className="w-40"
          />
          <Legend
            categories={[
              "Food Budget",
              "Entertainment Budget",
              "Groceries Budget",
              "Transport Budget",
              "Shopping Budget",
            ]}
            colors={["blue", "cyan", "indigo", "violet", "fuchsia"]}
            className="max-w-xs"
          />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
