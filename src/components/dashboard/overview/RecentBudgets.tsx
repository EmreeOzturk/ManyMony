import { Banana, Drama, Plane } from "lucide-react";
import RecentBudgetCard from "./RecentBudgetCard";

const RecentBudgets = () => {
  return (
    <>
      <h3 className="text-2xl">Recent Budgets</h3>
      <RecentBudgetCard title={"transport"} percentage={73} Icon={<Plane />} />
      <RecentBudgetCard title={"food"} percentage={40} Icon={<Banana />} />
      <RecentBudgetCard
        title={"entertainment"}
        percentage={60}
        Icon={<Drama />}
      />
    </>
  );
};

export default RecentBudgets;
