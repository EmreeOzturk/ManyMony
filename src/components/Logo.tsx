import { NavLink, useNavigate } from "react-router-dom"
import WalletIcon from "./icons/WalletIcon"

const Logo = () => {
    const navigate = useNavigate()
    return (
        <div>
            <NavLink to="/" className="flex items-center justify-center gap-3 text-2xl  font-mono font-bold
                    bg-gradient-to-r from-cyan-700  to-violet-800 text-transparent bg-clip-text 
                ">
                <WalletIcon />
                <span >
                    ManyMony
                </span>
            </NavLink>

            <button
                onClick={() => {
                    navigate('/dashboard')
                }}
                className="bg-gradient-to-r from-cyan-700  to-violet-800 text-transparent bg-clip-text text-lg font-mono"
            >
                Test
            </button>
        </div>
    )
}

export default Logo