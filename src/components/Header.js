import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  TbHomeQuestion,
  TbHomeSignal,
  TbUserScan,
  TbSend,
  TbWorldCode,
} from "react-icons/tb";

function Header() {
  const [online, setOnline] = useState(navigator.onLine);

  const [lastKeyPressed, setLastKeyPressed] = useState(null);

  const [headerPromo, setHeaderPromo] = useState(
    localStorage.getItem("headerPromo") !== "closed"
  );
  const headerPromoParentRef = useRef(null);

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

  useEffect(() => {
    // Check if the user has previously closed the header promo
    const storedHeaderPromo = localStorage.getItem("headerPromo") === "closed";
    if (storedHeaderPromo) {
      setHeaderPromo(false); // Hide the promo if found in localStorage
    }
  }, [headerPromo]);

  const removeHeaderPromo = () => {
    setHeaderPromo(false); // Hide the promo
    localStorage.setItem("headerPromo", "closed"); // Store in localStorage
    setLastKeyPressed(null);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      const key = e.key.toLowerCase();
      if (key === lastKeyPressed) {
        return; // No need to proceed if last key and current key are the same
      }
      switch (key) {
        case "h":
          document.getElementById("home").click();
          break;
        case "a":
          document.getElementById("about").click();
          break;
        case "p":
          document.getElementById("projects").click();
          break;
        case "c":
          document.getElementById("contact").click();
          break;
        case ">":
          localStorage.setItem("headerPromo", "open"); // Store in localStorage
          setHeaderPromo(true);
          break;
        case "<":
          localStorage.setItem("headerPromo", "closed"); // Store in localStorage
          setHeaderPromo(false);
          break;
        default:
          break;
      }
      setLastKeyPressed(key);
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [lastKeyPressed]);

  const navLinkClassNormal =
    "px-3 pt-1.5 pb-0.5 md:px-3 md:pt-2.5 md:pb-2 flex flex-col md:flex-row md:gap-1.5 items-center justify-center rounded-t-xl font-semibold bg-white/[0.075] backdrop-blur-sm transition-all duration-200 ease-in active:bg-white/85 active:text-[#16181d] hover:bg-white hover:text-[#16181d] select-none";

  const navLinkClassWide =
    "px-1.5 pt-1.5 pb-0.5 md:px-2 md:pt-2.5 md:pb-2 flex flex-col md:flex-row md:gap-1.5 items-center justify-center rounded-t-xl font-semibold bg-white/[0.075] backdrop-blur-sm transition-all duration-200 ease-in active:bg-white/85 active:text-[#16181d] hover:bg-white hover:text-[#16181d] select-none";

  return (
    <header className="flex flex-col items-center justify-center sticky top-0 z-20 bg-[#16181d]">
      {headerPromo && (
        <section
          ref={headerPromoParentRef}
          className="hidden md:flex items-center justify-between max-w-7xl w-full text-[#f0f0f2] rounded-b-md"
        >
          <div className="px-2 py-0.5 animate-bounce font-light italic">
            Hello World!
          </div>
          <button
            title="Close (<), Undo (>)"
            onClick={() => removeHeaderPromo()}
            className="px-4 rounded-tr-md rounded-bl-md text-xs py-0.5 font-semibold bg-white/[0.035] hover:bg-red-600/90 active:bg-red-600/75 text-white/90 transition overflow-hidden"
          >
            {"</>"}
          </button>
          <Link
            to="/contact"
            className="px-2 py-0.5 animate-bounce font-light italic"
          >
            Hire me!
          </Link>
        </section>
      )}
      <nav className="px-2 pt-1.5 md:px-2.5 md:pt-1 flex items-center justify-between max-w-7xl w-full text-white">
        <Link
          to="/"
          className="text-lg md:text-xl pr-2 md:pr-2 py-2.5 md:pt-2 md:pb-1.5"
        >
          I. Farhat
        </Link>
        <div className="flex gap-2 md:gap-3 items-center justify-center">
          <NavLink
            to="/"
            title="Home (h)"
            id="home"
            className={navLinkClassNormal}
          >
            {online ? (
              <TbHomeSignal className="text-2xl md:text-[1.35rem]" />
            ) : (
              <TbHomeQuestion className="text-2xl md:text-[1.35rem]" />
            )}
            <span className="text-xs md:text-base">Home</span>
          </NavLink>
          <NavLink
            to="/about"
            title="About (a)"
            id="about"
            className={navLinkClassNormal}
          >
            <TbUserScan className="text-2xl md:text-[1.35rem]" />
            <span className="text-xs md:text-base">About</span>
          </NavLink>
          <NavLink
            to="/projects"
            title="Projects (p)"
            id="projects"
            className={navLinkClassWide}
          >
            <TbWorldCode className="text-2xl md:text-[1.35rem]" />
            <span className="text-xs md:text-base">Projects</span>
          </NavLink>
          <NavLink
            to="/contact"
            title="Contact (c)"
            id="contact"
            className={navLinkClassWide}
          >
            <TbSend className="text-2xl md:text-[1.35rem]" />
            <span className="text-xs md:text-base">Contact</span>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
