import React, { useState, useEffect, useCallback, useRef } from "react";
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
  const [headerPromo, setHeaderPromo] = useState(true);
  const [dayName, setDayName] = useState("Loading..");
  const headerPromoParentRef = useRef(null);

  // Debounce key press event
  const [debouncedKeyPress] = useState(() =>
    debounce((e) => handleDebouncedKeyPress(e), 250)
  );

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

  const removeHeaderPromo = () => {
    localStorage.setItem("headerPromo", "closed");
    setHeaderPromo(false);
    setLastKeyPressed("x");
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      debouncedKeyPress(e);
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [debouncedKeyPress]);

  const handleDebouncedKeyPress = useCallback(
    (e) => {
      const key = e.key.toLowerCase();
      const { tagName } = e.target;
      if (["input", "textarea"].includes(tagName.toLowerCase())) return;
      if (key === lastKeyPressed) return;

      const actions = {
        h: () => navigate("/"),
        a: () => navigate("/about"),
        p: () => navigate("/projects"),
        c: () => navigate("/contact"),
        u: () => {
          localStorage.setItem("headerPromo", "open");
          setHeaderPromo(true);
        },
        x: () => {
          localStorage.setItem("headerPromo", "closed");
          setHeaderPromo(false);
        },
      };

      const action = actions[key];
      if (action) {
        action();
        setLastKeyPressed(key);
      }
    },
    [navigate, lastKeyPressed, setHeaderPromo]
  );

  const updateDayName = useCallback(() => {
    const days = [
      "Sunday!",
      "Monday!",
      "Tuesday!",
      "Wednesday!",
      "Thursday!",
      "Friday!",
      "Saturday!",
    ];
    const currentDate = new Date();
    const currentDayIndex = currentDate.getDay();
    setDayName(days[currentDayIndex]);

    const millisecondsUntilMidnight =
      24 * 60 * 60 * 1000 - (currentDate % (24 * 60 * 60 * 1000));
    const timerId = setTimeout(updateDayName, millisecondsUntilMidnight);
    return () => clearTimeout(timerId);
  }, []);

  useEffect(() => {
    updateDayName();
    //return () => {};
  }, [updateDayName]);

  // Render the component
  return (
    <header>
      {headerPromo && (
        <section
          ref={headerPromoParentRef}
          className="flex md:px-0.5 pt-1.5 items-center justify-between max-w-7xl w-full text-[#f5f5f5] font-bold rounded-b-md"
        >
          <span className="px-2 animate-pulse font-light text-sm">
            Hello World!
          </span>
          <ShareButton />
          <button
            title="Close (x), Undo (u)"
            onClick={removeHeaderPromo}
            className="header-promo-btn"
          >
            <IoCloseSharp />
          </button>
          <UrlCopyButton />
          <span className="px-2 animate-pulse font-light transition-all md:duration-200 ease-in text-sm">
            It's {dayName}
          </span>
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
          <NavLink to="/" title="Home (h)" className="nav-link-n">
            {online ? (
              <TbHomeSignal className="nav-link-icon" />
            ) : (
              <TbHomeQuestion className="nav-link-icon" />
            )}
            <span className="nav-link-span">Home</span>
          </NavLink>
          <NavLink to="/about" title="About (a)" className="nav-link-n">
            <TbUserScan className="nav-link-icon" />
            <span className="nav-link-span">About</span>
          </NavLink>
          <NavLink to="/projects" title="Projects (p)" className="nav-link-w">
            <TbWorldCode className="nav-link-icon" />
            <span className="nav-link-span">Projects</span>
          </NavLink>
          <NavLink to="/contact" title="Contact (c)" className="nav-link-w">
            <TbSend className="nav-link-icon" />
            <span className="nav-link-span">Contact</span>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
