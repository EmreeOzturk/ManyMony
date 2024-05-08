import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";

import FeatCards from "../components/landing/FeatCards";
import FAQs from "../components/landing/FAQs";
import Team from "../components/landing/Team";
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
        <FeatCards />
        <div className="absolute  w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        <div className="absolute  w-20 h-[100%] left-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        <div className="absolute  w-20 h-[100%] right-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
        <FAQs />
        <Team />
      </div>

    </>
  )
}

export default LangingPage