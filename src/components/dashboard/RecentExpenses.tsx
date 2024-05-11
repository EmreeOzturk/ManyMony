import RecentExpenseCard from "./RecentExpenseCard";

const RecentExpenses = () => {
  return (
    <>
      <h3 className="text-2xl">Recent Expenses</h3>
      <div className="w-full flex flex-col gap-2">
        <RecentExpenseCard
          title={"food"}
          value={200}
          date={new Date().toLocaleDateString()}
        />
        <RecentExpenseCard
          title={"rent"}
          value={400}
          date={new Date().toLocaleDateString()}
        />
        <RecentExpenseCard
          title={"transport"}
          value={100}
          date={new Date().toLocaleDateString()}
        />
        <RecentExpenseCard
          title={"entertainment"}
          value={100}
          date={new Date().toLocaleDateString()}
        />
      </div>
    </>
  );
};

export default RecentExpenses;
