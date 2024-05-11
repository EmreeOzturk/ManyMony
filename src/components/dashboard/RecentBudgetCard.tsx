import { motion } from "framer-motion";

const RecentBudgetCard = ({
  title,
  percentage,
  Icon,
}: {
  title: string;
  percentage: number;
  Icon: React.ReactNode;
}) => {
  return (
    <div className="shadow-indigo-200 shadow-sm h-1/4 rounded-md w-full flex items-center justify-between px-8 py-2 ">
      <div className="flex items-center gap-2 w-20">
        <div className="bg-zinc-700 p-[6px] rounded-sm">{Icon}</div>
        <p className="text-[16px] text-zinc-300">{title}</p>
      </div>
      <div className="flex w-1/2 items-center ">
        <div className="relative w-full mr-2 h-2 bg-gray-300 rounded-md ">
          <motion.div
            className="absolute top-0 left-0 h-full bg-indigo-400 rounded-md"
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%`, transition: { duration: 2 } }}
          />
        </div>
        <span className="text-sm">{percentage}%</span>
      </div>
      <div className="cursor-pointer">
        <p className="text-lg font-normal text-blue-400 underline">View</p>
      </div>
    </div>
  );
};

export default RecentBudgetCard;
