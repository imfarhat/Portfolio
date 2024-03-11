import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { TbMessageShare } from "react-icons/tb";
import { IoGlobeOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";

function Footer() {
  const [user, setUser] = useState({
    subEmail: "",
    resumeEmail: "",
    folioRating: null,
  });
  const inputResumeReqRef = useRef(null);

  let name, value;
  const handleInputChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleFooterForm = async (e) => {
    e.preventDefault();
    const et = e.target;
    const submitButton = et.querySelector('button[type="submit"]');

    const submitBtnInitailaValue = submitButton.innerHTML;
    submitButton.innerHTML = "Wait... &#x23F3;";
    submitButton.disabled = true; // Disable submit button

    try {
      // Get current date and time
      const { submitDate, submitTime } = await getDateTime();

      // Get form data
      const formData = new FormData(et);

      // Append submitDate and submitTime to the formData
      formData.append("submitDate", submitDate);
      formData.append("submitTime", submitTime);
      formData.append("formName", et.name);
      formData.append("origin", "https://ifarhat.pages.dev");

      // Example: log the formData for demonstration
      /* for (let pair of formData.entries()) {
        console.log(pair[0] + ":" + pair[1]);
      } */

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbx4mZrF_arBlAqVwtlB1F63njETwBNwN0scd_zZ97gmVD4wIjL4azHIgF8PCHRVN4Q/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const { result } = await response.json();
      console.log("Response:", result);
      if (result === "error") {
        throw new Error("Backend response was not ok");
      }
      submitButton.innerHTML = "Success &check;";
      // Handle success response here
    } catch (error) {
      submitButton.innerHTML = "Error !";
      console.log(error);
      // Handle error here
    } finally {
      setUser({
        subEmail: "",
        resumeEmail: "",
        folioRating: null,
      });
      et.reset(); // Reset the form
      setTimeout(() => {
        submitButton.innerHTML = submitBtnInitailaValue;
        submitButton.disabled = false; // Enable submit button
      }, 2500);
    }
  };

  const getDateTime = async () => {
    const now = new Date();
    const dd = now.getDate().toString().padStart(2, "0");
    const mm = (now.getMonth() + 1).toString().padStart(2, "0");
    const yyyy = now.getFullYear();
    const submitDate = `${dd}/${mm}/${yyyy}`; // dd/mm/yyyy

    const h = now.getHours().toString().padStart(2, "0");
    const m = now.getMinutes().toString().padStart(2, "0");
    const s = now.getSeconds().toString().padStart(2, "0");
    const submitTime = `${h}:${m}:${s}`; // hh:mm:ss

    return { submitDate, submitTime };
  };

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
              className="social-link-item hover:bg-[#3e65cf] text-[#3e65cf] active:bg-opacity-85"
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
              className="social-link-item hover:bg-[#3e65cf] text-[#3e65cf] active:bg-opacity-85"
            >
              <MdOutlineMarkEmailUnread />
            </Link>
            <Link
              to="https://wa.me/+919830836212?text=Hi%20I.%20Frahat%20from%20Farhat%20e%20Services%20%26%20Assistance!%0A%0A[Redirected%20from%20your%20portfolio%20website]"
              rel="noopener norefferer"
              target="_blank"
              className="social-link-item hover:bg-[#4ac959] text-[#4ac959] active:bg-opacity-85"
            >
              <FaWhatsapp />
            </Link>
            <Link
              to="https://farhateservices.pages.dev"
              rel="noopener norefferer"
              target="_blank"
              className="social-link-item hover:bg-[#3273dc] text-[#3273dc] active:bg-opacity-85"
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
              name="Subscribers"
              autoComplete="off"
              onSubmit={handleFooterForm}
              className="flex flex-col gap-2 md:gap-4 items-center justify-center"
            >
              <input
                type="email"
                maxLength="35"
                size="30"
                required
                pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                name="subEmail"
                id="subEmail"
                placeholder="example@gmail.com"
                value={user.subEmail}
                onChange={handleInputChange}
                className="feedback-tab-input"
              />
              <button type="submit" className="feedback-tab-btn">
                Subscribe+
              </button>
            </form>

            <form
              action=""
              method="post"
              name="Ratings"
              autoComplete="off"
              onSubmit={handleFooterForm}
              className="flex flex-col gap-2 md:gap-4 items-center justify-center"
            >
              <label className="flex flex-row gap-2 items-center justify-center star-group">
                <input
                  type="radio"
                  className="star"
                  id="one"
                  name="folioRating"
                  value={1}
                  required
                  onChange={handleInputChange}
                />
                <input
                  type="radio"
                  className="star"
                  id="two"
                  name="folioRating"
                  value={2}
                  onChange={handleInputChange}
                />
                <input
                  type="radio"
                  className="star"
                  id="three"
                  name="folioRating"
                  value={3}
                  onChange={handleInputChange}
                />
                <input
                  type="radio"
                  className="star"
                  id="four"
                  name="folioRating"
                  value={4}
                  onChange={handleInputChange}
                />
                <input
                  type="radio"
                  className="star"
                  id="five"
                  name="folioRating"
                  value={5}
                  onChange={handleInputChange}
                />
              </label>
              <button type="submit" className="feedback-tab-btn">
                Rate us ★
              </button>
            </form>

            <form
              action=""
              method="post"
              name="Resumers"
              autoComplete="off"
              onSubmit={handleFooterForm}
              className="flex flex-col gap-2 md:gap-4 items-center justify-center"
            >
              <input
                type="email"
                maxLength="35"
                size="30"
                required
                pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                name="resumeEmail"
                id="resumeEmail"
                placeholder="example@gmail.com"
                value={user.resumeEmail}
                onChange={handleInputChange}
                ref={inputResumeReqRef}
                className="feedback-tab-input"
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
          to="https://farhateservices.pages.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="flex flex-row gap-1 md:gap-1.5 items-center justify-center">
            Powered by
            <img
              src="https://farhateservices.pages.dev/logo-head-white.png"
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
