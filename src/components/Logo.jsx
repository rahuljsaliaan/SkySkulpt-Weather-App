import logo from "../assets/skyskulpt-logo.png";

function Logo() {
  return (
    <a
      href="/"
      className="bg-black/50 p-2 sm:px-4 rounded-full shadow-xl flex justify-center items-center sm:absolute sm:left-4 gap-3 hover:bg-black/30"
    >
      <img className="w-10" alt="logo" src={logo} />
      <h1 className="hidden sm:block text-2xl text-white font-bold">
        SkySkulpt
      </h1>
    </a>
  );
}

export default Logo;
