import { useMemo } from "react";
import Analyze from "@/src/components/dashboard/Analyze";
import Budgets from "@/src/components/dashboard/budgets/Budgets";
import Overview from "@/src/components/dashboard/overview/Overview";
import Transcations from "@/src/components/dashboard/transactions/Transactions";
// export const tabs = [
//   {
//     title: "Overview",
//     value: "overview",
//     content: Overview,
//   },
//   {
//     title: "Budgets",
//     value: "budgets",
//     content: Budgets,
//   },
//   {
//     title: "Expenses",
//     value: "expenses",
//     content: Expenses,
//   },
//   {
//     title: "Analyze",
//     value: "analyze",
//     content: Analyze,
//   },
// ];

const useTabs = () => {
  const tabs = useMemo(
    () => [
      {
        title: "Overview",
        value: "overview",
        content: <Overview />,
      },
      {
        title: "Budgets",
        value: "budgets",
        content: <Budgets />,
      },
      {
        title: "Transactions",
        value: "transactions",
        content: <Transcations />,
      },
      {
        title: "Analyze",
        value: "analyze",
        content: <Analyze />,
      },
    ],
    []
  );

  return tabs;
};

export default useTabs;
