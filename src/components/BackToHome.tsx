import { Link } from 'react-router-dom'
import LeftArrow from './icons/LeftArrow'

const BackToHome = () => {
    return (
        <div className="absolute top-10 left-10 cursor-pointer z-20">
            <Link
                to="/"
                className="text-neutral-500 hover:text-neutral-300 flex items-center gap-1 justify-center ">
                <LeftArrow />
                Back To Home

            </Link>
        </div>
    )
}

export default BackToHome