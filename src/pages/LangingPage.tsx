import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { WobbleCard } from "../components/ui/wobble-card";
import WalletIcon2 from "../components/icons/WalletIcon2";
import RealTimeIcon from "../components/icons/RealTimeIcon";
import ChartIcon from "../components/icons/ChartIcon";
import TagIcon from "../components/icons/TagIcon";
const LangingPage = () => {
  return (
    <>
      {/* <section className="h-full absolute inset-0 -z-10  w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"> */}
      <LampContainer>
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl "
        >
          <h1>A New Way to Budget</h1>
          <h2 className="text-5xl mt-2">Easy, Fast, and Effective</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className=" bg-gradient-to-br flex gap-3 from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent"
        >
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="bg-black text-white flex items-center space-x-2"
          >
            Sign Up Now
          </HoverBorderGradient>
        </motion.div>
      </LampContainer>
      <div className="h-[120vh] w-full bg-black bg-dot-white/[0.2]  relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-full bg-green-950/40 min-h-[500px] lg:min-h-[300px]"
            className=""
          >
            <div>
              <div className="w-14 h-14 rounded-md bg-gray-900 flex justify-center items-center">
                <WalletIcon2 />
              </div>
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Advanced Budgeting
              </h2>
              <p className="mt-4 text-left  text-base/6 text-neutral-200">
                Our advanced budgeting feature allows you to create personalized budgets tailored to your specific needs and financial goals. Whether you're saving for a big purchase or aiming to reduce debt, you can easily allocate funds to different categories.
              </p>
            </div>

          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-red-950/40">
            <div className="w-14 h-14 rounded-md bg-gray-900 flex justify-center items-center">
              <RealTimeIcon />
            </div>
            <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Real-Time Expense Tracking
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              With our real-time expense tracking feature, you can monitor your spending as it happens. Keep a close eye on your expenses, categorized by type, and instantly see how much you've spent in each category.
            </p>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 lg:col-span-1 bg-blue-950/40 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
            <div >
              <div className="w-14 h-14 rounded-md bg-gray-900  flex justify-center items-center">
                <ChartIcon />
              </div>
              <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Reports and Charts
              </h2>
              <p className="mt-4  text-left  text-base/6 text-neutral-200">
                Dive deep into your financial data with our comprehensive reports and charts. Visualize your financial data with interactive charts and graphs, making it easy to spot trends and identify areas for improvement
              </p>
            </div>

          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-violet-950/40 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
            <div >
              <div className="w-14 h-14 rounded-md bg-gray-900 flex justify-center items-center">
                <TagIcon />
              </div>
              <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Expense Categorization and Tagging
              </h2>
              <p className="mt-4  text-left  text-base/6 text-neutral-200">
                With over 100,000 mothly active bot users, Gippity AI is the most
                Easily organize your expenses with our categorization and tagging feature. Categorize your expenses into custom categories that reflect your spending habits and financial priorities. Additionally, tag transactions with keywords or labels to further classify your expenses or identify specific trends.
              </p>
            </div>

          </WobbleCard>
        </div>
      </div>

      {/* </section> */}
    </>
  )
}

export default LangingPage