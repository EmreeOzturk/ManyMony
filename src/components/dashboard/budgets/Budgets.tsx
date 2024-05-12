import BudgetCard from "./BudgetCard";

const Budgets = () => {
  return (
    <div className="w-full gap-2 overflow-hidden flex items-center   flex-wrap justify-center relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-zinc-900">
      <BudgetCard />
      <BudgetCard />
      <BudgetCard />
      <BudgetCard />
    </div>
  );
};

export default Budgets;
