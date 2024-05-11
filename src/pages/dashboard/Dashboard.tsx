import { Tabs } from "@/src/components/ui/tabs";
import useTabs from "@/src/hooks/useTabs";

const Dashboard = () => {
  const tabs = useTabs();

  return (
    <div className="h-[82%] px-10 mt-10 [perspective:1000px] relative flex flex-col mx-auto w-full  items-start justify-start ">
      <Tabs tabs={tabs} />
    </div>
  );
};

export default Dashboard;
