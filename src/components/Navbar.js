import React, { useState, useEffect } from "react";
import {
  TbHomeQuestion,
  TbSend,
  TbHomeSignal,
  TbUserScan,
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
  }, [online]);

  const navLinksClasses =
    "px-3 py-1.5 flex gap-1.5 items-center justify-center rounded font-semibold bg-white/10 text-white backdrop-blur-sm transition duration-300 ease-in active:scale-95 hover:bg-white hover:text-[#323262] drop-shadow-md";
  return (
    <>
      <nav className="flex items-center justify-center top-0 sticky z-20">
        <div className="flex gap-4 items-center justify-between max-w-[90rem] mx-2 w-full p-4 rounded-md rounded-t-none bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500">
          <a
            href="./home"
            className="rounded font-semibold text-2xl text-white drop-shadow-md"
          >
            I Farhat
          </a>
          <div className="flex gap-4 items-center justify-center">
            <a href="./home" className={navLinksClasses}>
              {online ? (
                <TbHomeSignal className="text-xl" />
              ) : (
                <TbHomeQuestion className="text-xl" />
              )}
              Home.
            </a>
            <a href="./about" className={navLinksClasses}>
              <TbUserScan className="text-xl" />
              About.
            </a>
            <a href="./projects" className={navLinksClasses}>
              <LuFileCode2 className="text-xl" />
              Projects.
            </a>
            <a href="./contact" className={navLinksClasses}>
              <TbSend className="text-xl" />
              Contact.
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
