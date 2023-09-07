import Logo from "./Logo";
import SearchBar from "./SearchBar";

function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-gradient-to-b from-teal-400 to-blue-500 p-4 flex justify-normal">
      <Logo />
      <SearchBar />
    </nav>
  );
}

export default Navigation;
