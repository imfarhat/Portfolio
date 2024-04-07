import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import svg404 from "../assets/images/backgrounds/404-spacecraft.svg";
import svgWave from "../assets/images/backgrounds/wave.svg";

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
      <main
        className="flex flex-col items-center justify-between gap-0 py-20 text-[#f5f5f5]/90 bg-[#16181d] bg-cover"
        style={{
          backgroundImage: `url(${svgWave})`,
        }}
      >
        <h2 className="text-lg">
          <em>Sorry, page not found!</em>
        </h2>
        <img src={svg404} alt="404" className="h-96" />
        <div className="ficjc flex-col gap-4">
          <code>
            Redirecting to {previousPage ? "previous" : "Home"} page in{" "}
            {countdown}s...
          </code>
          <button onClick={goBackOrHome} className="back-or-home-btn text-sm">
            Go {previousPage ? "Back" : "Home"} Now
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default NoPage;
