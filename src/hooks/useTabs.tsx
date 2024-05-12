import { useMemo } from "react";
import Budgets from "@/src/components/dashboard/budgets/Budgets";
import Overview from "@/src/components/dashboard/overview/Overview";
import Transcations from "@/src/components/dashboard/transactions/Transactions";
import Analytics from "@/src/components/dashboard/Analytics";

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
        title: "Analytics",
        value: "analytics",
        content: <Analytics />,
      },
    ],
    []
  );

  return tabs;
};

export default useTabs;
