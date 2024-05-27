import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const RecentBudgetCard = ({
  title,
  percentage,
  Icon,
  budgetId,
}: {
  title: string;
  percentage: number;
  Icon: React.ReactNode;
  budgetId: string;
}) => {
  const navigate = useNavigate();
  return (
    <div className="shadow-indigo-200 border-b h-1/4 rounded-md hover:bg-indigo-950/70 w-full flex items-center justify-between px-8 ">
      <div className="flex items-center gap-2 w-20">
        <div className="bg-zinc-700 p-[3px] rounded-sm">{Icon}</div>
        <p className="text-[16px] text-zinc-300">{title}</p>
      </div>
      <div className="flex w-1/2 items-center ">
        <div className="relative w-full mr-2 h-2 bg-zinc-400 rounded-md ">
          <motion.div
            className="absolute top-0 left-0 h-full bg-indigo-400 rounded-md"
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%`, transition: { duration: 2 } }}
          />
        </div>
        <span className="text-sm">{percentage.toFixed(0)}%</span>
      </div>
      <div className="cursor-pointer">
        <button
          onClick={() => {
            navigate(`/budgets/${budgetId}`);
          }}
          className="text-lg font-normal text-blue-400 underline"
        >
          View
        </button>
      </div>
    </div>
  );
};

export default RecentBudgetCard;
