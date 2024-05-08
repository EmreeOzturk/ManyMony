import { Tabs } from "@/src/components/ui/tabs"
import { tabs } from "../constraints/PrivateRoute"

const Dashboard = () => {
    return (
        <div className="h-3/4 px-10 mt-10 [perspective:1000px] relative flex flex-col mx-auto w-full  items-start justify-start ">
            <Tabs tabs={tabs} />
        </div>
    )
}

export default Dashboard
