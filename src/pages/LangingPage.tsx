import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";
const LangingPage = () => {
  return (
    <>
      <section className="h-screen absolute inset-0 -z-10  w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <LampContainer
        >
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            Build lamps <br /> the right way
          </motion.h1>
        </LampContainer>
      </section>
    </>
  )
}

export default LangingPage