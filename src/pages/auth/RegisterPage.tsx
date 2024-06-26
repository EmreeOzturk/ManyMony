import { Input } from "../../components/ui/input"
import { BackgroundBeams } from "../../components/ui/background-beams";
import { cn } from "../../utils/cn";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";
import { FormEventHandler, useState } from "react";
import { Link } from "react-router-dom";
import BackToHome from "../../components/header/BackToHome";
import BottomGradient from "../../components/ui/bottom-gradient";
import { useAuth } from '../../hooks/useAuth'
import { toast } from "react-toastify";
const RegisterPage = () => {
    const radius = 600;
    const [visible, setVisible] = useState(false);
    const auth = useAuth();
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
        const { left, top } = currentTarget.getBoundingClientRect();

        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const email = (e.currentTarget.email as HTMLInputElement).value;
        const password = (e.currentTarget.password as HTMLInputElement).value;
        const name = (e.currentTarget.name as unknown as HTMLInputElement).value;
        const confPassword = (e.currentTarget.confPassword as HTMLInputElement).value;

        try {
            (auth as { registerAction: (email: string, password: string, confPassword: string, name: string) => void }).registerAction(email, password, confPassword, name);
        } catch (error) {
            toast.error((error as Error).message, {
                position: "bottom-right"
            });
        }

    }
    return (
        <div className="h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
            <BackToHome />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-[600px] z-20 mx-auto p-4">
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
                    className="backdrop-blur-[2px] shadow-sm shadow-violet-700/70 p-12 rounded-xl bg-transparent flex gap-5 flex-col items-center justify-center " >
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
                            Fill in the form and start your journey with us
                        </p>
                    </div>
                    <div className="w-full">
                        <label className="text-neutral-400" htmlFor="email">Name</label>
                        <Input
                            id="name"
                            placeholder="emre öztürk"
                            type="text"
                            name="name"
                            aria-label="name"
                            aria-describedby="user-name"
                            aria-invalid="false"
                        />
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

                    <div className="w-full">
                        <label htmlFor="conf-password" className="text-neutral-400">Confirm Password</label>
                        <Input id="confPassword" placeholder="*********" type="password"
                            name="confPassword" aria-label="conf-password" aria-describedby="user-conf-password" aria-invalid="false"
                        />
                    </div>

                    <button
                        className="bg-gradient-to-br relative group/btn hover:text-neutral-300 transition-all from-black  to-neutral-800 block  w-full text-neutral-500 rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                        type="submit"
                    >
                        <span>
                            Register
                        </span>
                        <BottomGradient />
                    </button>
                    <div
                        className="flex flex-col items-start justify-center w-full text-center mt-4"
                    >
                        <Link to="/login" className="group text-neutral-500  hover:text-neutral-400 ">Already have an account? {" "}
                            <span
                                className="font-bold
                                    group-hover:underline
                                "
                            >
                                Log in
                            </span>
                        </Link>
                    </div>
                    <div className="bg-gradient-to-r from-transparent via-violet-300 dark:via-neutral-700 to-transparent mt-8 h-[1px] w-full" />
                </motion.form>
            </motion.div>
            <BackgroundBeams />
        </div >
    )
}

export default RegisterPage


