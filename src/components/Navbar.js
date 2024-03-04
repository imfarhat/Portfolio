import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  TbHomeQuestion,
  TbHomeSignal,
  TbUserScan,
  TbSend,
} from "react-icons/tb";
import { LuFileCode2 } from "react-icons/lu";

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

  const navLinkClass =
    "px-3 py-1.5 flex gap-1.5 items-center justify-center rounded font-semibold bg-white/10 text-white backdrop-blur-sm transition duration-300 ease-in active:scale-95 active:bg-white active:text-[#323262] hover:bg-white hover:text-[#323262] drop-shadow-md";

  return (
    <nav className="flex items-center justify-center top-0 sticky z-20">
      <div className="flex gap-4 items-center justify-between max-w-7xl mx-2 w-full p-4 rounded-md rounded-t-none bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500">
        <Link
          to="/"
          className="rounded font-semibold text-2xl text-white drop-shadow-md px-3 py-1"
        >
          I. Farhat
        </Link>
        <div className="flex gap-4 items-center justify-center">
          <NavLink to="/" className={navLinkClass}>
            {online ? (
              <TbHomeSignal className="text-xl" />
            ) : (
              <TbHomeQuestion className="text-xl" />
            )}
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            <TbUserScan className="text-xl" />
            About
          </NavLink>
          <NavLink to="/projects" className={navLinkClass}>
            <LuFileCode2 className="text-xl" />
            Projects
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            <TbSend className="text-xl" />
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
