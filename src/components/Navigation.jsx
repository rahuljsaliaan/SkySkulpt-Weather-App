import Logo from "./Logo";
import SearchBar from "./SearchBar";

function Navigation() {
  return (
    <header className="flex w-full items-center justify-center gap-3 bg-gradient-to-b from-cyan-400/70 to-blue-500/70 p-2 backdrop-blur-sm sm:p-4">
      <Logo />
      <SearchBar />
    </header>
  );
}

export default Navigation;
