import Nav from "../components/Nav";
import Logo from "../components/Logo";

const Header = () => {
  return (
    <header className=" flex h-24 items-center justify-around bg-slate-50 shadow-md">
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;
