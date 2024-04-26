import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
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
          className=" bg-gradient-to-br flex gap-3 from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent"
        >
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="bg-black text-white flex items-center space-x-2"
          >
            Get Started
          </HoverBorderGradient>
        </motion.div>
      </LampContainer>
      <div className="h-screen">

      </div>
      {/* </section> */}
    </>
  )
}

export default LangingPage