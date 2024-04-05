import React, { useState, useEffect, useCallback } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  TbHomeQuestion,
  TbHomeSignal,
  TbUserScan,
  TbSend,
  TbWorldCode,
} from "react-icons/tb";
import { IoCloseSharp } from "react-icons/io5";
import debounce from "lodash/debounce";
import ShareButton from "../components/ShareButton.js";
import UrlCopyButton from "../components/UrlCopyButton.js";

function Header() {
  const navigate = useNavigate(); // Initialize useNavigate

  const [online, setOnline] = useState(navigator.onLine);
  const [lastKeyPressed, setLastKeyPressed] = useState(null);
  const [headerPromo, setHeaderPromo] = useState(() => {
    // Check if the user has previously closed the header promo
    const storedHeaderPromo = localStorage.getItem("headerPromo") === "closed";
    // If the stored value is 'closed', return false, otherwise return true (default)
    return !storedHeaderPromo;
  });

  useEffect(() => {
    // Handle online/offline status
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
      setHeaderPromo(false); // Hide the promo if found in localStorage to be closed
    }
  }, []);

  const handleDebouncedKeyPress = useCallback(
    (e) => {
      const key = e.key.toLowerCase();

      const tagName = e.target?.tagName?.toLowerCase(); // Safely access tagName
      if (
        e.altKey &&
        (tagName || ["input", "textarea"].includes(tagName)) &&
        key === lastKeyPressed
      ) {
        return;
      }

      /*
      if (!e.altKey) return;
      <--
      // Check if any modifier key is pressed
      if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
      // Check if only one key is pressed and it's an alphabet key
      if (key.length !== 1 || !/[a-z]/.test(key)) return;
      -->
      const tagName = e.target?.tagName?.toLowerCase(); // Safely access tagName
      if (tagName && ["input", "textarea"].includes(tagName)) return;
      if (key === lastKeyPressed) return; // Check if the current key is the same as the last one
      */
      const actions = {
        h: () => navigate("/"),
        a: () => navigate("/about"),
        p: () => navigate("/projects"),
        c: () => navigate("/contact"),
        // s: () => handleShare(),
        u: () => {
          localStorage.setItem("headerPromo", "open");
          setHeaderPromo(true);
        },
        x: () => {
          if (!headerPromo) return;
          if (
            window.confirm(
              `Are you sure you want to close the "Hello World!" section?\n\nPress 'u' to undo or clear data.`
            )
          ) {
            localStorage.setItem("headerPromo", "closed");
            setHeaderPromo(false);
          } else {
            setTimeout(() => {
              setLastKeyPressed(null);
            }, 10);
          }
        },
      };

      const action = actions[key];
      if (action) {
        action();
        setLastKeyPressed(key);
      }
    },
    [navigate, lastKeyPressed, headerPromo]
  );

  useEffect(() => {
    const debouncedKeyPress = debounce((e) => handleDebouncedKeyPress(e), 200);
    const handleKeyPress = (e) => {
      debouncedKeyPress(e);
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      // Cleanup debounce function
      debouncedKeyPress.cancel();
    };
  }, [handleDebouncedKeyPress]);

  // Render the component
  return (
    <header>
      {headerPromo && (
        <section className="flex flex-row-reverse w-full gap-2 md:gap-4 px-2 md:px-1 pt-1.5 items-center justify-end md:justify-center max-w-7xl text-[#f5f5f5] font-bold rounded-b-md">
          <span className="px-2 animate-pulse text-[0.925rem] font-normal">
            Hello World!
          </span>
          <button
            title="Close (x), Undo (u)"
            onClick={() => handleDebouncedKeyPress({ key: "x" })}
            className="header-promo-btn"
          >
            <IoCloseSharp />
          </button>
          <ShareButton />
          <UrlCopyButton />
        </section>
      )}
      <nav>
        <Link
          to="/"
          className="text-lg md:text-xl font-semibold px-0 pt-1 md:pt-2 md:pb-1.5"
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
