function Logo() {
  return (
    <a
      href="/"
      className="bg-black/50  px-4 py-2 rounded-full shadow-xl flex gap-3 items-center hover:bg-black/30"
    >
      <img className="w-12" alt="logo" src="/src/assets/skyskulpt-logo.png" />
      <h1 className="text-2xl text-white font-bold">SkySkulpt</h1>
    </a>
  );
}

export default Logo;
