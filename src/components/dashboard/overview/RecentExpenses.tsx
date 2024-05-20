import { Models } from "appwrite";
import RecentExpenseCard from "./RecentExpenseCard";

const RecentExpenses = ({ data }: { data: Models.Document[] }) => {
  return (
    <div className="border flex flex-col items-start gap-6 justify-start overflow-y-scroll max-h-[480px]  border-indigo-500/40 bg-indigo-950/30 w-2/5 p-4 rounded-md ">
      <h3 className="text-2xl">Recent Expenses</h3>
      <div className="w-full flex flex-col gap-2">
        {data.map((expense) => {
          return (
            <RecentExpenseCard
              key={expense.$id}
              title={expense.name}
              value={expense.amount}
              date={expense.date}
            />
          );
        })}
        
      </div>
    </div>
  );
};

export default RecentExpenses;
