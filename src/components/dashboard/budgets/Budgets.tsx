import BudgetCard from "./BudgetCard";

const Budgets = () => {
  return (
    <div className="w-full gap-4 overflow-y-auto px-16 overflow-hidden flex items-start flex-wrap justify-center relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-zinc-900">
      <BudgetCard
        name="Food"
        amount={200}
        percentage={50}
        categories={["Groceries", "Eating Out"]}
      />
      <BudgetCard
        name="Transport"
        amount={100}
        percentage={25}
        categories={["Fuel", "Public Transport"]}
      />
      <BudgetCard
        name="Entertainment"
        amount={50}
        percentage={12.5}
        categories={["Movies", "Games"]}
      />
      <BudgetCard
        name="Shopping"
        amount={100}
        percentage={25}
        categories={["Clothes", "Electronics"]}
      />
   
    </div>
  );
};

export default Budgets;
