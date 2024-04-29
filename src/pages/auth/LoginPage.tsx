import { Input } from "../../components/ui/input"
import { BackgroundBeams } from "../../components/ui/background-beams";
import { cn } from "../../utils/cn";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";
import { FormEventHandler, useState } from "react";
import { Link } from "react-router-dom";
import BottomGradient from "../../components/ui/bottom-gradient";
import BackToHome from "../../components/BackToHome";
import { useAuth } from "../../context/AuthProvider";
const LoginPage = () => {
  const radius = 500;
  const [visible, setVisible] = useState(false);
  const auth = useAuth();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: { currentTarget: HTMLElement, clientX: number, clientY: number }) {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = (e.currentTarget.email as HTMLInputElement).value;
    const password = (e.currentTarget.password as HTMLInputElement).value;
    console.log(email, password)
    try {
      (auth as { loginAction: (email: string, password: string) => void }).loginAction(email, password);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <BackToHome />
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{ duration: 1 }}
        className="w-[600px] z-20  mx-auto p-4">
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
          onSubmit={handleSubmit as FormEventHandler<HTMLFormElement>}
          className=" backdrop-blur-[2px] shadow-sm shadow-violet-300 p-12 rounded-xl bg-transparent flex gap-5 flex-col items-center justify-center " >
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
              Fill in the form to continue your journey with us
            </p>
          </div>

          <div className="w-full">
            <label className="text-neutral-400" htmlFor="email">Email</label>
            <Input
              id="email"
              placeholder="youremail@manymony.com"
              type="email"
              name="email"
              aria-label="email"
              aria-describedby="user-email"
              aria-invalid="false"
            />
          </div>
          <div className="w-full">
            <label htmlFor="password" className="text-neutral-400">Password</label>
            <Input
              id="password"
              placeholder="*********"
              type="password"
              name="password"
              aria-label="password"
              aria-describedby="user-password"
              aria-invalid="false"
            />
          </div>
          <button
            className="bg-gradient-to-br relative group/btn from-black  to-neutral-800 block hover:text-neutral-300 transition-all  w-full text-neutral-500 rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Login
            <BottomGradient />
          </button>
          <div
            className="flex flex-col items-start justify-center w-full text-center mt-4"
          >
            <Link to="#" className="text-neutral-500 
              hover:text-neutral-300 
            ">Forgot your password?</Link>
            <Link to="/register" className="group text-neutral-500  mt-2 hover:text-neutral-400">Don't have an account? {" "}
              <span
                className="font-bold
                  group-hover:underline
                "
              >
                Register
              </span>
            </Link>
          </div>
          <div className="bg-gradient-to-r from-transparent via-violet-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        </motion.form>
      </motion.div >
      <BackgroundBeams />
    </div >
  )
}

export default LoginPage


