import { Input } from "../../components/ui/input"
import { BackgroundBeams } from "../../components/ui/background-beams";
import BottomGradient from "../../components/ui/bottom-gradient";
import { cn } from "../../utils/cn";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const radius = 500;
  const [visible, setVisible] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <div className="h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="w-[600px] z-20  mx-auto p-4">
        <motion.form
          style={{
            background: useMotionTemplate`
  radial-gradient(
    ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
    var(--violet-950),
    transparent 100%
  )
`,
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
          className="border border-violet-800/40 p-12 rounded-xl bg-transparent flex gap-5 flex-col items-center justify-center " >
          <div className="mb-10 w-full">
            <h1 className="text-4xl font-bold text-neutral-400 dark:text-neutral-900">
              Welcome to {" "}
              <span
                className={cn(
                  `text-gradient bg-gradient-to-r from-cyan-700 to-violet-800 `,
                  "bg-clip-text text-transparent"
                )}
              >
                ManyMony
              </span>
            </h1>
            <p className="text-neutral-300 dark:text-neutral-700 mt-2">
              Fill in the form to get started
            </p>
          </div>
          <div className="w-full">
            <label className="text-neutral-400" htmlFor="email">Email</label>
            <Input id="email" placeholder="youremail@manymony.com" type="email" />
          </div>
          <div className="w-full">
            <label htmlFor="password" className="text-neutral-400">Password</label>
            <Input id="password" placeholder="*********" type="password" />
          </div>
          <button
            className="bg-gradient-to-br relative group/btn from-black  to-neutral-800 block  w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            <span
              className=""
            >
              Log in
            </span>
            <BottomGradient />
          </button>

          <div
            className="flex flex-col items-start justify-center w-full text-center mt-4"
          >
            <Link to="#" className="text-neutral-400 dark:text-neutral-700
              hover:text-neutral-500 hover:underline
            ">Forgot your password?</Link>
            <Link to="/register" className="text-neutral-400 dark:text-neutral-700 mt-2 hover:text-neutral-500 hover:underline">Don't have an account? {" "}
              <span
                className="font-bold"
              >
                Register
              </span>
            </Link>
          </div>
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        </motion.form>
      </div >
      <BackgroundBeams />
    </div >
  )
}

export default LoginPage


