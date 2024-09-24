import { FaBookmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="md:text-2xl lg:text-3xl text-xl">
      <Link className="flex items-center gap-4" to="/">
        <FaBookmark className=" text-orange-400" />
        <h2 className=" text-orange-400 font-medium uppercase font-montserrat">
          Todo App
        </h2>
      </Link>
    </div>
  );
};

export default Logo;
