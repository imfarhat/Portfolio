import moon from "../assets/images/backgrounds/moon.png";

function Navbar() {
  const navLinksClasses =
    "px-3 py-1.5 rounded font-semibold bg-white/10 text-white backdrop-blur-sm transition duration-300 ease-in active:scale-95 hover:bg-white hover:text-[#323262] drop-shadow-md";
  return (
    <>
      <nav className="flex items-center justify-center top-0 sticky z-20">
        <div
          className="hidden md:flex gap-4 items-center justify-between max-w-[90rem] mx-2 w-full p-4 rounded-md rounded-t-none bg-blue-800/15"
          style={{ backgroundImage: `url(${moon})` }}
        >
          <a
            href="./home"
            className="rounded font-semibold text-2xl text-white drop-shadow-md"
          >
            I Farhat
          </a>
          <div className="flex gap-4 items-center justify-center">
            <a href="./home" className={navLinksClasses}>
              Home
            </a>
            <a href="./about" className={navLinksClasses}>
              About Me
            </a>
            <a href="./projects" className={navLinksClasses}>
              Projects
            </a>
            <a href="./contact" className={navLinksClasses}>
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
