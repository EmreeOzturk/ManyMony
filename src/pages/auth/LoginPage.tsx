import { Input } from "../../components/ui/input"
import { BackgroundBeams } from "../../components/ui/background-beams";
import BottomGradient from "../../components/ui/bottom-gradient";
import { cn } from "../../utils/cn";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import BackToHome from "../../components/BackToHome";





const LoginPage = () => {
  const radius = 500;
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  function handleInputChanges(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    if (name === 'email') {
      setEmail(value)
    } else {
      setPassword(value)
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // check if email and password are valid
    if (email === '' || password === '') {
      alert("please provide a valid input");
      return
    }
    if (!emailRegex.test(email)) {
      alert("please provide a valid email");
      return
    }
    if (!passwordRegex.test(password)) {
      alert("please provide a valid password");
      return
    }

    console.log(email, password)
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
          onSubmit={handleSubmit}
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
              value={email}
              onChange={handleInputChanges}
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
              value={password}
              onChange={handleInputChanges}
            />
          </div>
          <button
            className="bg-gradient-to-br relative group/btn from-black  to-neutral-800 block hover:text-neutral-300 transition-all  w-full text-neutral-500 rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
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


