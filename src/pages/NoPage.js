import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import { TbFaceIdError } from "react-icons/tb";

function NoPage() {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();
  const previousPage = sessionStorage.getItem("previousPage");

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCount) => prevCount - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const goBackOrHome = useCallback(() => {
    previousPage ? navigate(previousPage) : navigate("/");
  }, [navigate, previousPage]);

  useEffect(() => {
    countdown === 0 && goBackOrHome();
  }, [countdown, goBackOrHome]);

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-between gap-16 py-32 text-[#f5f5f5]/90 bg-[#16181d]">
        <h2 className="text-xl font-semibold">Sorry, page not found!</h2>
        <img
          src="https://raw.githubusercontent.com/imfarhat/Portfolio/c41a6ef4a9dba6b5f9310435ca3f6d2b1b30376f/src/assets/images/backgrounds/404-spacescraft.svg"
          alt="404 "
        />
        <div className="ficjc flex-col gap-6">
          <span>
            Redirecting to {previousPage ? "Previous" : "Home"} page in{" "}
            {countdown}s...
          </span>
          <button onClick={goBackOrHome} className="back-or-home-btn">
            Go {previousPage ? "Back" : "Home"} Now
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default NoPage;
