import RecentExpenseCard from "./RecentExpenseCard";

const RecentExpenses = () => {
  return (
    <div className="border flex flex-col items-start gap-6 justify-start overflow-y-scroll max-h-[480px]  border-indigo-500/40 bg-indigo-950/30 w-2/5 p-4 rounded-md ">
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
        <RecentExpenseCard
          title={"entertainment"}
          value={100}
          date={new Date().toLocaleDateString()}
        />
        <RecentExpenseCard
          title={"entertainment"}
          value={100}
          date={new Date().toLocaleDateString()}
        />
        <RecentExpenseCard
          title={"entertainment"}
          value={100}
          date={new Date().toLocaleDateString()}
        />
      </div>
    </div>
  );
};

export default RecentExpenses;
