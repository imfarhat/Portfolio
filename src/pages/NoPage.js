import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import { TbError404 } from "react-icons/tb";

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
      <main className="flex flex-col items-center justify-between gap-24 py-24 px-4 text-white/90 bg-[#16181d]">
        <h2 className="text-3xl font-semibold">Sorry, page not found!</h2>
        <TbError404 className="text-9xl scale-[3]" />
        <div className="ficjc flex-col gap-2">
          <h3 className="text-lg">
            Redirecting to {previousPage ? "Previous" : "Home"} page in{" "}
            {countdown}s...
          </h3>
          <button
            onClick={goBackOrHome}
            className="text-base px-4 py-1 bg-white text-black font-semibold rounded active:bg-white/75 transition-all md:duration-200 ease-in"
          >
            {previousPage ? "Go Back" : "Go Home"}
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default NoPage;
