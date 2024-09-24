import Nav from "../components/Nav";
import Logo from "../components/Logo";
import HamburgerMenu from "../components/HamburgerMenu";

const Header = () => {
  return (
    <div className="w-full">
      <header className="flex h-24 items-center justify-around w-full md:shadow-md">
        <Logo />
        <Nav />
        <HamburgerMenu />
      </header>
    </div>
  );
};

export default Header;
