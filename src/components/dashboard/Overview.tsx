const Overview = () => {
  return (
    <div className="flex gap-2 flex-col justify-between items-start w-full overflow-hidden relative h-full rounded-2xl p-4 text-xl md:text-4xl font-bold text-white bg-zinc-900">
      <div className="flex w-full gap-2 flex-1">
        <div className="flex flex-col gap-2 w-full ">
          <div className="flex gap-2">
            <div className="w-1/3 h-24 border rounded-lg text-2xl">
              Total Income : 500
            </div>
            <div className="w-1/3 h-24 border rounded-lg text-2xl">
              Total Expense : 800
            </div>
            <div className="w-1/3 h-24 border rounded-lg text-2xl">
              Total Budget : 1200
            </div>
          </div>
          <div className="border h-full rounded-md"></div>
        </div>
        <div className="border w-2/5  rounded-md h-full">
          <h1 className="text-white">recent expenses</h1>
        </div>
      </div>
      <div className="border w-full h-52 rounded-md ">
        <h1 className="text-white">recent budgets</h1>
      </div>
    </div>
  );
};

export default Overview;
