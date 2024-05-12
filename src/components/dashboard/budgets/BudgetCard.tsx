import { Album } from "lucide-react";
import { Badge } from "@/src/components/ui/badge";
const BudgetCard = ({
  name,
  amount,
  percentage,
  categories,
}: {
  name: string;
  amount: number;
  percentage: number;
  categories: string[];
}) => {
  return (
    <div className="relative flex flex-col ">
      <div className="max-w-sm w-72 px-6 py-8 h-[270px] border bg-indigo-950/40 border-indigo-500/40 rounded-xl overflow-hidden shadow-lg">
        <div className="absolute top-0 right-0 px-3 py-3 rounded-bl-2xl border-zinc-600/40 border-l border-b  text-xs font-bold bg-zinc-900 text-zinc-300">
          {percentage}%
        </div>
        <div className="w-12 h-12 rounded-xl bg-zinc-900 p-2 flex items-center justify-center mb-2">
          <Album className="w-10 h-10 object-cover text-zinc-300" />
        </div>
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-zinc-300 text-lg">${amount}</p>
        <div className="flex items-center justify-start mt-6 gap-2">
          {categories.map((category) => (
            <Badge key={category}>{category}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BudgetCard;
