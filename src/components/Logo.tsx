import { NavLink } from "react-router-dom"
import WalletIcon from "./icons/WalletIcon"

const Logo = () => {
    return (
        <div>
            <NavLink to="/expenses" className="flex items-center justify-center gap-3 text-2xl  font-mono font-bold
                    bg-gradient-to-r from-cyan-700  to-violet-800 text-transparent bg-clip-text 
                ">
                <WalletIcon />
                <span>
                    ManyMony
                </span>
            </NavLink>
        </div>
    )
}

export default Logo