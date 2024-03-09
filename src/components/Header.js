import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaCode } from "react-icons/fa6";
import {
  TbHomeQuestion,
  TbHomeSignal,
  TbUserScan,
  TbSend,
  TbWorldCode,
} from "react-icons/tb";

function Header() {
  const [home, about, contact, projects] = [
    useRef(),
    useRef(),
    useRef(),
    useRef(),
  ];

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
      if (e.target.tagName.toLowerCase() === "input") {
        return; // If the target is an input field, do nothing
      }
      switch (key) {
        case "h":
        case "/":
          home.current.click();
          break;
        case "a":
          about.current.click();
          break;
        case "p":
          projects.current.click();
          break;
        case "c":
          contact.current.click();
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

  return (
    <header>
      {headerPromo && (
        <section
          ref={headerPromoParentRef}
          className="hidden md:flex items-center justify-between max-w-7xl w-full text-[#f0f0f2] rounded-b-md"
        >
          <div className="px-2 animate-bounce font-light italic">
            Hello World!
          </div>
          <button
            title="Close (<), Undo (>)"
            onClick={removeHeaderPromo}
            className="header-promo-close-btn"
          >
            <FaCode />
          </button>
          <Link to="/contact" className="px-2 animate-bounce font-light italic">
            Hire me!
          </Link>
        </section>
      )}
      <nav>
        <Link
          to="/"
          className="text-lg md:text-xl font-semibold pr-2 md:pr-2 py-2.5 md:pt-2 md:pb-1.5"
        >
          I. Farhat
        </Link>
        <div className="flex gap-2 md:gap-3 items-center justify-center">
          <NavLink to="/" title="Home (h)" ref={home} className="nav-link-n">
            {online ? (
              <TbHomeSignal className="nav-link-icon" />
            ) : (
              <TbHomeQuestion className="nav-link-icon" />
            )}
            <span className="nav-link-span">Home</span>
          </NavLink>
          <NavLink
            to="/about"
            title="About (a)"
            ref={about}
            className="nav-link-n"
          >
            <TbUserScan className="nav-link-icon" />
            <span className="nav-link-span">About</span>
          </NavLink>
          <NavLink
            to="/projects"
            title="Projects (p)"
            ref={projects}
            className="nav-link-w"
          >
            <TbWorldCode className="nav-link-icon" />
            <span className="nav-link-span">Projects</span>
          </NavLink>
          <NavLink
            to="/contact"
            title="Contact (c)"
            ref={contact}
            className="nav-link-w"
          >
            <TbSend className="nav-link-icon" />
            <span className="nav-link-span">Contact</span>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
