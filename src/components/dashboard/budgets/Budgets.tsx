import BudgetCard from "./BudgetCard";

const Budgets = () => {
  return (
    <div className="w-full gap-4 overflow-y-auto px-10 mx-auto overflow-hidden flex items-center flex-wrap justify-center relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-zinc-300 bg-zinc-900">
      <BudgetCard
        name="Food"
        amount={200}
        percentage={50}
        categories={["Groceries", "Eating Out"]}
        index={1}
      />
      <BudgetCard
        name="Transport"
        amount={100}
        percentage={25}
        categories={["Fuel", "Public Transport"]}
        index={2}
      />
      <BudgetCard
        name="Entertainment"
        amount={50}
        percentage={12.5}
        categories={["Movies", "Games"]}
        index={3}
      />
      <BudgetCard
        name="Shopping"
        amount={100}
        percentage={25}
        categories={["Clothes", "Electronics"]}
        index={4}
      />

      <BudgetCard
        name="Food"
        amount={200}
        percentage={50}
        categories={["Groceries", "Eating Out"]}
        index={5}
      />

      <BudgetCard
        name="Transport"
        amount={100}
        percentage={25}
        categories={["Fuel", "Public Transport"]}
        index={6}
      />
      <BudgetCard
        name="Entertainment"
        amount={50}
        percentage={12.5}
        categories={["Movies", "Games"]}
        index={7}
      />
    </div>
  );
};

export default Budgets;
