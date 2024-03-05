import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  TbHomeQuestion,
  TbHomeSignal,
  TbUserScan,
  TbSend,
  TbWorldCode,
} from "react-icons/tb";

function Navbar() {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const navLinkClassNormal =
    "px-3 pt-1.5 pb-0.5 md:px-3 md:pb-1 flex flex-col md:flex-row md:gap-1.5 items-center justify-center rounded-t-xl font-semibold bg-white/10 text-white backdrop-blur-sm transition duration-[250ms] ease-in active:bg-white/75 active:text-[#323262] hover:bg-white hover:text-[#323262]";

  const navLinkClassWide =
    "px-1.5 pt-1.5 pb-0.5 md:px-2 md:pb-1 flex flex-col md:flex-row md:gap-1.5 items-center justify-center rounded-t-xl font-semibold bg-white/10 text-white backdrop-blur-sm transition duration-[250ms] ease-in active:bg-white/75 active:text-[#323262] hover:bg-white hover:text-[#323262]";

  return (
    <nav className="flex items-center justify-center sticky top-0 z-20">
      <div className="flex gap-2 md:gap-4 items-center justify-between max-w-7xl mx-1 md:mx-2 w-full px-2 pt-2 pb-1 md:px-3 md:pt-3 md:pb-2 rounded-md rounded-t-none bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-md">
        <Link
          to="/"
          className="font-semibold text-xl md:text-2xl text-white drop-shadow-md"
        >
          I. Farhat
        </Link>
        <div className="flex gap-3 md:gap-4 items-center justify-center">
          <NavLink to="/" className={navLinkClassNormal}>
            {online ? (
              <TbHomeSignal className="text-2xl md:text-[1.35rem]" />
            ) : (
              <TbHomeQuestion className="text-2xl md:text-[1.35rem]" />
            )}
            <span className="text-xs md:text-base">Home</span>
          </NavLink>
          <NavLink to="/about" className={navLinkClassNormal}>
            <TbUserScan className="text-2xl md:text-[1.35rem]" />
            <span className="text-xs md:text-base">About</span>
          </NavLink>
          <NavLink to="/projects" className={navLinkClassWide}>
            <TbWorldCode className="text-2xl md:text-[1.35rem]" />
            <span className="text-xs md:text-base">Projects</span>
          </NavLink>
          <NavLink to="/contact" className={navLinkClassWide}>
            <TbSend className="text-2xl md:text-[1.35rem]" />
            <span className="text-xs md:text-base">Contact</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
