import iconMapping, { Category } from "@/src/helper/iconMapping";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const RecentBudgetCard = ({
  title,
  percentage,
  budgetId,
  category,
}: {
  title: string;
  percentage: number;
  budgetId: string;
  category: Category;
}) => {
  const navigate = useNavigate();
  const IconComponent = iconMapping[category];
  return (
    <div className="shadow-indigo-200 border-b h-1/4 rounded-md hover:bg-indigo-950/70 w-full flex items-center justify-between px-8 ">
      <div className="flex items-center justify-start  gap-2 w-20">
        <div className="bg-zinc-700 p-[3px] rounded-sm">
          {IconComponent && <IconComponent />}
        </div>
        <p className="text-[16px] text-zinc-300">{title}</p>
      </div>
      <div className="flex w-1/2 items-center ">
        <div className="relative w-full mr-2 h-2 bg-zinc-400 rounded-md ">
          <motion.div
            className="absolute top-0 left-0 h-full bg-indigo-400 rounded-md"
            initial={{ width: 0 }}
            animate={{
              width: `${Math.min(percentage, 100)}%`,
              transition: { duration: 2 },
            }}
          />
        </div>
        <span
          className={`text-sm ${percentage > 100 && "text-red-600"}
          ${percentage < 25 && "text-green-500"}
          ${percentage > 25 && "text-cyan-500"}
          ${percentage > 50 && "text-blue-500"}
          ${percentage > 80 && "text-orange-500"}
        `}
        >
          {percentage.toFixed(0)}%
        </span>
      </div>
      <div className="cursor-pointer flex items-center justify-center hover:scale-110 transition-all">
        <button
          onClick={() => {
            navigate(`/budgets/${budgetId}`);
          }}
          className="text-lg font-normal text-blue-400 "
        >
          View
        </button>
      </div>
    </div>
  );
};

export default RecentBudgetCard;
