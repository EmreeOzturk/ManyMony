import ChartIcon from "../icons/ChartIcon"
import RealTimeIcon from "../icons/RealTimeIcon"
import TagIcon from "../icons/TagIcon"
import WalletIcon2 from "../icons/WalletIcon2"
import { WobbleCard } from "../ui/wobble-card"

const FeatCards = () => {
    return (
        <div className="grid px-8 md:px-0 grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
            <WobbleCard
                containerClassName="col-span-1 lg:col-span-2 h-full bg-gray-950/60"
            >
                <div>
                    <div className="w-14 h-14 rounded-md bg-gray-900 flex justify-center items-center">
                        <WalletIcon2 />
                    </div>
                    <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold bg-gradient-to-br from-slate-200 to-slate-500 text-transparent tracking-tight  bg-clip-text">
                        Advanced Budgeting
                    </h2>
                    <p className="mt-4 text-left  text-base/6 text-neutral-200">
                        Our advanced budgeting feature allows you to create personalized budgets tailored to your specific needs and financial goals. Whether you're saving for a big purchase or aiming to reduce debt, you can easily allocate funds to different categories.
                    </p>
                </div>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-gray-950/60 ">
                <div className="w-14 h-14 rounded-md bg-gray-900 flex justify-center items-center">
                    <RealTimeIcon />
                </div>
                <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold bg-gradient-to-br from-slate-200 to-slate-500 text-transparent tracking-tight  bg-clip-text">
                    Real-Time Expense Tracking
                </h2>
                <p className="mt-4 text-left  text-base/6 text-neutral-200">
                    With our real-time expense tracking feature, you can monitor your spending as it happens. Keep a close eye on your expenses, categorized by type, and instantly see how much you've spent in each category.
                </p>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 lg:col-span-1 bg-gray-950/60  h-[350px]">
                <div className="flex flex-col items-start justify-center" >
                    <div className="w-14 h-14 rounded-md bg-gray-900  flex justify-center items-center">
                        <ChartIcon />
                    </div>
                    <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold bg-gradient-to-br from-slate-200 to-slate-500 text-transparent tracking-tight  bg-clip-text">
                        Reports and Charts
                    </h2>
                    <p className="mt-4  text-left  text-base/6 text-neutral-200">
                        Dive deep into your financial data with our comprehensive reports and charts. Visualize your financial data with interactive charts and graphs, making it easy to spot trends and identify areas for improvement
                    </p>
                </div>

            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-gray-950/60 h-[350px]">
                <div className="flex flex-col items-start justify-center " >
                    <div className="w-14 h-14 rounded-md bg-gray-900 flex justify-center items-center">
                        <TagIcon />
                    </div>
                    <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold bg-gradient-to-br from-slate-200 to-slate-500 text-transparent tracking-tight  bg-clip-text">
                        Expense Categorization and Tagging
                    </h2>
                    <p className="mt-4  text-left  text-base/6 text-neutral-200">
                        With over 100,000 mothly active bot users, Gippity AI is the most
                        Easily organize your expenses with our categorization and tagging feature. Categorize your expenses into custom categories that reflect your spending habits and financial priorities. Additionally, tag transactions with keywords or labels to further classify your expenses or identify specific trends.
                    </p>
                </div>
            </WobbleCard>
        </div>
    )
}

export default FeatCards