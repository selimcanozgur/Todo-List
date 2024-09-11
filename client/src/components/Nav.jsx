import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul className="flex gap-8 font-poppins font-medium text-zinc-600">
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
