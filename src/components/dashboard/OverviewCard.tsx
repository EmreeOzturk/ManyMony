import { ReactElement } from "react";
import { Ellipsis } from "lucide-react";
const OverviewCard = ({
  title,
  value,
  Icon,
}: {
  title: string;
  value: number;
  Icon?: ReactElement;
}) => {
  return (
    <div
      className="w-1/3 h-32 p-4 flex items-start justify-center flex-col gap-2 rounded-lg bg-indigo-950/40 border border-indigo-500/40
            isolate
         overflow-hidden
    shadow-xl shadow-black/5
    relative 
    before:absolute before:inset-0
    before:-translate-x-full
    before:animate-[shimmer_2s_infinite]
    before:bg-gradient-to-r
    before:from-transparent before:via-indigo-900/10 to-transparent"
    >
      <div className="absolute right-2 top-0 cursor-pointer">
        <Ellipsis />
      </div>
      <div className="bg-zinc-700 w-fit rounded-full p-1">{Icon}</div>
      <div>
        <h3 className="text-lg">{title}</h3>
        <p className="text-xl">${value}</p>
      </div>
    </div>
  );
};

export default OverviewCard;
