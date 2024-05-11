const RecentExpenseCard = ({
  title,
  value,
  date,
}: {
  title: string;
  value: number;
  date: string;
}) => {
  return (
    <div className="bg-zinc-600/20 flex flex-col items-start py-2 px-4  justify-between w-full h-16 rounded-md">
      <div className="w-full flex justify-between items-center">
        <h4 className="text-lg">{title}</h4>
        <p className="text-lg">${value}</p>
      </div>
      <div>
        <p className="text-sm text-zinc-600">
          {new Date(date).toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      </div>
    </div>
  );
};

export default RecentExpenseCard;
