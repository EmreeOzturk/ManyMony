import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { WobbleCard } from "../components/ui/wobble-card";
import WalletIcon2 from "../components/icons/WalletIcon2";
import RealTimeIcon from "../components/icons/RealTimeIcon";
import ChartIcon from "../components/icons/ChartIcon";
import TagIcon from "../components/icons/TagIcon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion"
import TeamCard from "../components/TeamCard";
const LangingPage = () => {
  return (
    <>
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
      <div className="h-full select-none pb-36 pt-20 w-full bg-slate-950 bg-dot-white/[0.2]  relative flex flex-col gap-10 items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-full bg-gray-950/60  min-h-[500px] lg:min-h-[300px]"
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
        <div className="absolute  w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        <div className="absolute  w-20 h-[100%] left-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        <div className="absolute  w-20 h-[100%] right-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
        <div className="w-2/3 ">
          <div className="bg-gradient-to-br from-slate-200 to-slate-500 text-transparent tracking-tight  bg-clip-text text-center text-4xl  py-4 font-medium   md:text-7xl ">
            <h1>FAQs</h1>
          </div>
          <Accordion type="single" collapsible className="w-full" >
            <AccordionItem value="item-1" color="#fff">
              <AccordionTrigger>Is your app free to use?</AccordionTrigger>
              <AccordionContent>
                Yes, our app is completely free to use. You can access basic features for free and optionally upgrade to a premium plan for additional features you need.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Which devices is it compatible with?</AccordionTrigger>
              <AccordionContent>
                Since our app is web-based, it can be accessed through any web browser. Additionally, we have mobile apps available for iOS and Android devices.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How can I integrate my bank accounts into the app?</AccordionTrigger>
              <AccordionContent>
                You can securely integrate your bank accounts into our app. Simply navigate to the account settings section within the app and select "Bank Accounts" to add your bank accounts.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Are my data secure?</AccordionTrigger>
              <AccordionContent>
                User security is our priority. All your data is protected with strong encryption methods, and your privacy is always guaranteed. Moreover, our app follows regularly updated security protocols.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>What are the advantages of the premium plan?</AccordionTrigger>
              <AccordionContent>
                Our premium plan provides access to more advanced features. These features include customized reports, automatic bill reminders, and expanded data storage space, among others.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="w-full relative">
          <div className="bg-gradient-to-br from-slate-200 to-slate-500 text-transparent tracking-tight  bg-clip-text text-center text-4xl  py-4 font-medium   md:text-7xl ">
            <h1>Team</h1>
          </div>
          <div className="w-full flex items-center gap-10 py-10 justify-center">
            <TeamCard src="/team/akin.png" role="Software Dev, DB Admin" name="Akın Buzkuş" />
            <TeamCard src="/team/me.png" role="Software Dev, UI/UX Designer" name="Emre Öztürk" middle />
            <TeamCard src="/team/hilal.png" role="Software Dev, Scrum Master" name="Hilal Şentürk" />
          </div>
        </div>
      </div >

    </>
  )
}

export default LangingPage