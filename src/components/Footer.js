import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { TbMessageShare } from "react-icons/tb";
import { IoGlobeOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";

function Footer() {
  const [emailSub, setEmailSub] = useState("");
  const [emailResume, setEmailResume] = useState("");
  const inputResumeReqRef = useRef(null);

  const handleSubInputChange = (e) => {
    setEmailSub(e.target.value);
  };

  const handleResumeInputChange = (e) => {
    setEmailResume(e.target.value);
  };

  // const handleSubSubmit = (e) => {
  //   e.preventDefault();
  //   // Here you can perform any validation or submission logic
  //   console.log("Submitted email:", emailSub);
  // };
  // const handleResumeSubmit = (e) => {
  //   e.preventDefault();
  //   // Here you can perform any validation or submission logic
  //   console.log("Submitted email:", emailResume);
  // };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  function locateResumeReqInput() {
    if (inputResumeReqRef.current) {
      window.scrollTo({
        top: document.body.scrollHeight, // Scroll to the bottom of the page
        behavior: "smooth",
      });
      inputResumeReqRef.current.focus();
    }
  }

  return (
    <footer className="flex flex-col items-center justify-center gap-4 bg-[#16181d]">
      <section className="w-full pb-4 text-[#141e28] bg-gradient-to-l from-[#16181d] to-[#646674]/25 flex items-center justify-center">
        <button className="back-to-top-btn" onClick={scrollToTop}>
          Back to Top
        </button>
      </section>

      <section className="py-4 grid grid-cols-2 md:grid-cols-4 items-start justify-center gap-3 md:gap-6 rounded-3xl">
        <div className="footer-link-card">
          <h3 className="footer-card-h3">Quick Links</h3>
          <ul className="p-2 flex flex-col gap-0.5">
            <Link to="/" className="footer-links-panel-item">
              Home page
            </Link>
            <Link to="/about" className="footer-links-panel-item">
              About page
            </Link>
            <Link to="/contact" className="footer-links-panel-item">
              Contact page
            </Link>
            <Link to="/projects" className="footer-links-panel-item">
              Projects page
            </Link>
          </ul>
        </div>

        <div className="footer-link-card">
          <h3 className="footer-card-h3">Services</h3>
          <ul className="p-2 flex flex-col gap-0.5">
            <Link
              to="https://farhateservices.pages.dev"
              rel="noopener norefferer"
              target="_blank"
              className="footer-links-panel-item"
            >
              Web Development
            </Link>
            <Link
              to="#"
              rel="noopener norefferer"
              target="_blank"
              className="footer-links-panel-item"
            >
              Educational Website
            </Link>
            <Link
              to="https://tis.pages.dev"
              rel="noopener norefferer"
              target="_blank"
              className="footer-links-panel-item"
            >
              Institutional Website
            </Link>
            <Link
              to="https://farhateservices.pages.dev/eCommerce/"
              rel="noopener norefferer"
              target="_blank"
              className="footer-links-panel-item"
            >
              E Commerce Website
            </Link>
          </ul>
        </div>

        <div className="footer-link-card">
          <h3 className="footer-card-h3">Categories</h3>
          <ul className="p-2 flex flex-col gap-0.5">
            <Link
              to="https://farhateservices.pages.dev"
              rel="noopener norefferer"
              target="_blank"
              className="footer-links-panel-item"
            >
              Business Portfolio
            </Link>
            <Link
              to="https://tis.pages.dev"
              rel="noopener norefferer"
              target="_blank"
              className="footer-links-panel-item"
            >
              Educational Website
            </Link>
            <Link
              to="https://farhateservices.pages.dev/eCommerce/"
              rel="noopener norefferer"
              target="_blank"
              className="footer-links-panel-item"
            >
              E Commerce Website
            </Link>
            <Link
              to="https://farhateservices.pages.dev/projects"
              rel="noopener norefferer"
              target="_blank"
              className="footer-links-panel-item"
            >
              Website Development
            </Link>
          </ul>
        </div>

        <div className="footer-link-card">
          <h3 className="footer-card-h3">For Recruiters</h3>
          <ul className="p-2 flex flex-col gap-0.5">
            <button
              onClick={locateResumeReqInput}
              className="footer-links-panel-item"
            >
              Resume
            </button>
            <li className="footer-links-panel-item">Web Developer</li>
            <li className="footer-links-panel-item">Persuising UG Degree</li>
            <li className="footer-links-panel-item">Working with React JS</li>
          </ul>
        </div>
      </section>

      <section className="py-4 flex flex-col items-center justify-center gap-3 rounded-3xl w-full">
        <div className="flex flex-col items-center justify-center bg-gradient-to-r from-[#16181d] to-[#646674]/25 text-[#fdfdff] w-full">
          <h2 className="footer-panel-h2">Connect with me</h2>
          <article className="px-2 py-4 md:px-4 md:py-6 flex flex-wrap items-center justify-between gap-4 md:gap-6 w-fit text-3xl">
            <Link
              to="/contact"
              rel="noopener norefferer"
              className="social-link-item hover:bg-[#3e65cf] text-[#3e65cf]"
            >
              <TbMessageShare />
            </Link>
            <Link
              to="https://www.instagram.com/raan_farhat/"
              rel="noopener norefferer"
              target="_blank"
              className="social-link-item social-link-ig-addon"
            >
              <FaInstagram />
            </Link>
            <Link
              to="mailto:imfarhat.dev@gmail.com"
              rel="noopener norefferer"
              target="_blank"
              className="social-link-item hover:bg-[#3e65cf] text-[#3e65cf]"
            >
              <MdOutlineMarkEmailUnread />
            </Link>
            <Link
              to="https://wa.me/+919830836212?text=Hi%20I.%20Frahat%20from%20Farhat%20e%20Services%20%26%20Assistance!%0A%0A[Redirected%20from%20your%20portfolio%20website]"
              rel="noopener norefferer"
              target="_blank"
              className="social-link-item hover:bg-[#4ac959] text-[#4ac959]"
            >
              <FaWhatsapp />
            </Link>
            <Link
              to="https://farhateservices.pages.dev"
              rel="noopener norefferer"
              target="_blank"
              className="social-link-item hover:bg-[#3273dc] text-[#3273dc]"
            >
              <IoGlobeOutline />
            </Link>
          </article>
        </div>
      </section>

      <section className="py-4 flex flex-col items-center justify-center gap-3 rounded-3xl w-full">
        <div className="flex flex-col items-center justify-center bg-gradient-to-r from-[#16181d] to-[#646674]/25 text-[#fdfdff] w-full">
          <h2 className="footer-panel-h2">Feedback+ Tab</h2>
          <article
            className="px-2 py-4 md:px-4 md:py-8 flex flex-wrap items-center justify-center lg:justify-between gap-8 w-full max-w-7xl
          "
          >
            <form
              action=""
              method="post"
              className="flex flex-col gap-2 md:gap-4 items-center justify-center"
            >
              <input
                type="email"
                size="30"
                required
                pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                name="subEmail"
                id="subEmail"
                placeholder="example@gmail.com"
                value={emailSub}
                onChange={handleSubInputChange}
                className="py-1.5 px-2 text-[#16181d] focus:outline-sky-500 invalid:focus:outline-sky-500 valid:focus:outline-green-500 out-of-range:border-red-500 outline-1 rounded"
              />
              <button type="submit" className="feedback-tab-btn">
                Subscribe+
              </button>
            </form>

            <form
              action=""
              method="post"
              className="flex flex-col gap-2 md:gap-4 items-center justify-center"
            >
              <div className="flex flex-row gap-2 items-center justify-center star-group">
                <input
                  type="radio"
                  className="star"
                  id="one"
                  name="star_rating"
                  value="1"
                  required
                />
                <input
                  type="radio"
                  className="star"
                  id="two"
                  name="star_rating"
                  value="2"
                />
                <input
                  type="radio"
                  className="star"
                  id="three"
                  name="star_rating"
                  value="3"
                />
                <input
                  type="radio"
                  className="star"
                  id="four"
                  name="star_rating"
                  value="4"
                />
                <input
                  type="radio"
                  className="star"
                  id="five"
                  name="star_rating"
                  value="5"
                />
              </div>
              <button type="submit" className="feedback-tab-btn">
                Rate us
              </button>
            </form>

            <form
              action=""
              method="post"
              className="flex flex-col gap-2 md:gap-4 items-center justify-center"
            >
              <input
                type="email"
                size="30"
                required
                pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                name="resumeEmail"
                id="resumeEmail"
                placeholder="example@gmail.com"
                value={emailResume}
                onChange={handleResumeInputChange}
                ref={inputResumeReqRef}
                className="py-1.5 px-2 text-[#16181d] focus:outline-sky-500 invalid:focus:outline-sky-500 valid:focus:outline-green-500 out-of-range:border-red-500 outline-1 rounded"
              />
              <button type="submit" className="feedback-tab-btn">
                Resume &#10148;
              </button>
            </form>
          </article>
        </div>
      </section>

      <section className="px-2 py-4 md:px-4 flex items-center justify-between gap-2.5 text-[#fdfdff] bg-gradient-to-l from-[#16181d] to-[#646674]/25 w-full text-xs md:text-base">
        <Link to="/" className="flex gap-1 md:gap-1.5">
          <span>&copy;</span> <span>{new Date().getFullYear()}</span>
          <span>I. Farhat</span>
        </Link>
        <Link
          to="https://farhateservices.github.io/fesa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="flex flex-row gap-1 md:gap-1.5 items-center justify-center">
            Powered by
            <img
              src="https://farhateservices.github.io/fesa/logo-head-white.png"
              alt="Farhat e Services & Assistance"
              loading="lazy"
              className="h-5 filter bg-blend-multiply"
            />
            Farhat e Services & Assistance
          </span>
        </Link>
      </section>
    </footer>
  );
}

export default Footer;
