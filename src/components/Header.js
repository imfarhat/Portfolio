import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaCode } from "react-icons/fa6";
import {
  TbHomeQuestion,
  TbHomeSignal,
  TbUserScan,
  TbSend,
  TbWorldCode,
} from "react-icons/tb";

function Header() {
  const navigate = useNavigate(); // Initialize useNavigate

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
      const altKey = e.altKey;

      if (key === lastKeyPressed) {
        return; // No need to proceed if last key and current key are the same
      }
      if (e.target.tagName.toLowerCase() === "input") {
        return; // If the target is an input field, do nothing
      }
      switch (true) {
        case key === "h" && altKey:
          navigate("/");
          break;
        case key === "a" && altKey:
          navigate("/about");
          break;
        case key === "p" && altKey:
          navigate("/projects");
          break;
        case key === "c" && altKey:
          navigate("/contact");
          break;
        case key === ">" && altKey:
          localStorage.setItem("headerPromo", "open"); // Store in localStorage
          setHeaderPromo(true);
          break;
        case key === "<" && altKey:
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
  }, [lastKeyPressed, navigate]);

  return (
    <header>
      {headerPromo && (
        <section
          ref={headerPromoParentRef}
          className="flex items-center justify-between max-w-7xl w-full text-white font-bold rounded-b-md"
        >
          <div className="px-2 animate-bounce font-light">Hello World!</div>
          <button
            title="Close (Alt + <), Undo (Alt + >)"
            onClick={removeHeaderPromo}
            className="header-promo-close-btn"
          >
            <FaCode />
          </button>
          <Link to="/contact" className="px-2 animate-bounce font-light">
            Hire me!
          </Link>
        </section>
      )}
      <nav>
        <Link
          to="/"
          className="text-lg md:text-xl font-semibold pr-2 md:pr-2 py-2"
        >
          I. Farhat
        </Link>
        <div className="flex gap-2 md:gap-3 items-center justify-center">
          <NavLink to="/" title="Home (Alt + h)" className="nav-link-n">
            {online ? (
              <TbHomeSignal className="nav-link-icon" />
            ) : (
              <TbHomeQuestion className="nav-link-icon" />
            )}
            <span className="nav-link-span">Home</span>
          </NavLink>
          <NavLink to="/about" title="About (Alt + a)" className="nav-link-n">
            <TbUserScan className="nav-link-icon" />
            <span className="nav-link-span">About</span>
          </NavLink>
          <NavLink
            to="/projects"
            title="Projects (Alt + p)"
            className="nav-link-w"
          >
            <TbWorldCode className="nav-link-icon" />
            <span className="nav-link-span">Projects</span>
          </NavLink>
          <NavLink
            to="/contact"
            title="Contact (Alt + c)"
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
