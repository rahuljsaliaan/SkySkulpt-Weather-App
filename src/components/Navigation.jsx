import Logo from "./Logo";
import SearchBar from "./SearchBar";

function Navigation() {
  return (
    <header className="flex justify-center items-center w-full p-2 sm:p-4 gap-3 bg-gradient-to-b from-teal-400 to-blue-500">
      <Logo />
      <SearchBar />
    </header>
  );
}

export default Navigation;
