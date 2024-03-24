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
      <main className="flex flex-col items-center justify-between gap-8 py-4 md:pt-8 pb-16 text-[#f5f5f5]/90 bg-[#16181d]">
        <h2 className="text-lg font-semibold">Sorry, page not found!</h2>
        <TbFaceIdError className="text-9xl" />
        <div className="ficjc flex-col gap-2">
          <h3>
            Redirecting to {previousPage ? "Previous" : "Home"} page in{" "}
            {countdown}s...
          </h3>
          <button
            onClick={goBackOrHome}
            className="text-base px-4 py-1 border-2 text-[#f5f5f5] hover:bg-[#f5f5f5] hover:text-[#16181d] active:text-[#16181d] font-semibold rounded active:bg-[#f5f5f5]/75 transition active:scale-95 md:duration-200 ease-in"
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
