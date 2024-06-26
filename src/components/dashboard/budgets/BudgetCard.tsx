import { Badge } from "@/src/components/ui/badge";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import iconMapping, { Category } from "@/src/helper/iconMapping";
const BudgetCard = ({
  name,
  amount,
  percentage,
  categories,
  index,
  budgetId,
}: {
  name: string;
  amount: number;
  percentage: number;
  categories: Category;
  index: number;
  budgetId: string;
}) => {
  const IconComp = iconMapping[categories];
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative flex flex-col cursor-pointer hover:bg-indigo-950 transition-transform duration-300 ease-in-out"
    >
      <Link
        to={`/budgets/${budgetId}`}
        className="relative flex flex-col cursor-pointer "
      >
        <div className="max-w-sm w-72 px-6 py-8 h-[270px] border bg-indigo-950/40 border-indigo-500/40 rounded-xl overflow-hidden shadow-lg">
          <div className="absolute top-0 right-0 px-3 py-3 rounded-bl-2xl border-zinc-600/40 border-l border-b  text-xs font-bold bg-zinc-900 text-zinc-300">
            {percentage.toFixed(0)}%
          </div>
          <div className="w-12 h-12 rounded-xl bg-zinc-900 p-2 flex items-center justify-center mb-2">
            {IconComp && <IconComp />}
          </div>
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-zinc-300 text-lg">${amount}</p>
          <div className="flex items-center justify-start mt-6 gap-2">
            <Badge className="px-4 py-2 text-sm">{categories}</Badge>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BudgetCard;
