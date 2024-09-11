import { FaBookmark } from "react-icons/fa6";

const Logo = () => {
  return (
    <div className="flex items-center gap-4">
      <FaBookmark className="text-3xl text-orange-400" />
      <h2 className="text-3xl text-orange-400 font-medium uppercase font-montserrat">
        Todo App
      </h2>
    </div>
  );
};

export default Logo;
