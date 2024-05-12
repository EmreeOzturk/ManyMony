import { Album } from "lucide-react";
const BudgetCard = () => {
  return (
    <div className="relative">
      <div className="max-w-sm w-64 border bg-indigo-950/70 border-zinc-600/40 rounded-xl overflow-hidden shadow-lg p-4">
        <div className="absolute top-0 right-0 px-3 py-3 rounded-bl-2xl border-zinc-600/40 border-l border-b  text-xs font-bold bg-zinc-900 text-zinc-300">
          24%
        </div>
        <div className="w-12 h-12 rounded-xl bg-zinc-900 p-2 flex items-center justify-center mb-2">
          <Album className="w-10 h-10 object-cover text-zinc-300" />
        </div>
        <div className="font-bold text-xl mb-2">Food Budget</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, quia, nulla!
        </p>
        <div className=" bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </div>
        <div className=" bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </div>
        <span className=" bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div>
    </div>
  );
};

export default BudgetCard;
