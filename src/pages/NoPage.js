import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import { TbError404 } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function NoPage() {
  const [countdown, setCountdown] = useState(10); // Reduced the countdown for demonstration
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCount) => prevCount - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      navigate(-1); // Go back one step in history
    }
  }, [countdown, navigate]);

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-between gap-36 py-44 px-4 text-white/90 bg-[#16181d]">
        <h2 className="text-3xl font-semibold">Sorry, page not found!</h2>
        <TbError404 className="text-9xl scale-[3]" />
        <div className="ficjc flex-col gap-4">
          <h3 className="text-2xl">
            {" "}
            Redirecting to previous page in {countdown}s...
          </h3>
          <button
            onClick={() => navigate(-1)}
            className="text-lg px-4 py-1.5 bg-white text-black font-semibold rounded active:bg-white/75 transition md:duration-200 ease-in"
          >
            Go Back Now
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}
export default NoPage;
