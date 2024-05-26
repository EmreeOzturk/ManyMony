import { Link } from "react-router-dom";
import LeftArrow from "../icons/LeftArrow";

const BackToHome = ({
  url = "/",
  text = "Back To Home",
}: {
  url?: string;
  text?: string;
}) => {
  return (
    <div className="absolute top-10 left-10 cursor-pointer z-20">
      <Link
        to={url}
        className="text-neutral-500 hover:text-neutral-300 transition-all flex items-center gap-1 justify-center "
      >
        <LeftArrow />
        <span>{text}</span>
      </Link>
    </div>
  );
};

export default BackToHome;
