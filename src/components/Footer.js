import { Link } from "react-router-dom";
import { MdWhatsapp, MdOutlineMailLock } from "react-icons/md";
import { TbMessageShare } from "react-icons/tb";
import { IoIosGlobe } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const footerLinksClasses =
    "border-b-[1.5px] border-transparent hover:border-white w-fit transition duration-200 ease-in";
  const socialLinksClasses =
    "p-2.5 md:p-4 bg-white rounded-full text-[#16181d] hover:bg-[#16181d] hover:text-[#fdfdff] hover:scale-110 active:bg-opacity-25 transition duration-200 ease-in";
  return (
    <footer className="flex flex-col items-center justify-center gap-4 bg-[#16181d] border-t-2 border-[#646674]/5">
      <section className="w-full pb-4 text-[#141e28] bg-gradient-to-r from-[#16181d] to-[#646674]/25 flex items-center justify-center">
        <button
          className="bg-white rounded-b py-1.5 px-4 font-semibold active:bg-white/85 transition duration-200"
          onClick={scrollToTop}
        >
          Back to Top
        </button>
      </section>

      <section className="py-4 grid grid-cols-2 md:grid-cols-4 items-start justify-center gap-3 rounded-3xl">
        <div className="flex flex-col items-start justify-center bg-gradient-to-br from-[#16181d] from-85% to-[#646674] text-[#fdfdff] rounded-md w-full">
          <h3 className="font-semibold text-base py-2 px-4 text-center bg-white/5 w-full rounded-t-md mb-2.5">
            Quick Links
          </h3>
          <ul className="p-2 flex flex-col gap-0.5">
            <Link to="/" className={footerLinksClasses}>
              Home
            </Link>
            <Link to="/about" className={footerLinksClasses}>
              About
            </Link>
            <Link to="/projects" className={footerLinksClasses}>
              Projects
            </Link>
            <Link to="/contact" className={footerLinksClasses}>
              Contact
            </Link>
          </ul>
        </div>

        <div className="flex flex-col items-start justify-center bg-gradient-to-br from-[#16181d] from-85% to-[#646674] text-[#fdfdff] rounded-md w-full">
          <h3 className="font-semibold text-base py-2 px-4 text-center bg-white/5 w-full rounded-t-md mb-2.5">
            Services
          </h3>
          <ul className="p-2 flex flex-col gap-0.5">
            <Link
              to="https://farhateservices.pages.dev"
              rel="noopener norefferer"
              target="_blank"
              className={footerLinksClasses}
            >
              Web Development
            </Link>
            <Link
              to="https://farhateservices.pages.dev/eCommerce/"
              rel="noopener norefferer"
              target="_blank"
              className={footerLinksClasses}
            >
              E Commerce Website
            </Link>
            <Link
              to="https://tis.pages.dev"
              rel="noopener norefferer"
              target="_blank"
              className={footerLinksClasses}
            >
              Institutional Website
            </Link>
            <Link
              to="#"
              rel="noopener norefferer"
              target="_blank"
              className={footerLinksClasses}
            >
              Educational Website
            </Link>
          </ul>
        </div>

        <div className="flex flex-col items-start justify-center bg-gradient-to-br from-[#16181d] from-85% to-[#646674] text-[#fdfdff] rounded-md w-full">
          <h3 className="font-semibold text-base py-2 px-4 text-center bg-white/5 w-full rounded-t-md mb-2.5">
            Categories
          </h3>
          <ul className="p-2 flex flex-col gap-0.5">
            <Link
              to="https://farhateservices.pages.dev/projects"
              rel="noopener norefferer"
              target="_blank"
              className={footerLinksClasses}
            >
              Website Development
            </Link>
            <Link
              to="https://farhateservices.pages.dev/eCommerce/"
              rel="noopener norefferer"
              target="_blank"
              className={footerLinksClasses}
            >
              E Commerce Website
            </Link>
            <Link
              to="https://farhateservices.pages.dev"
              rel="noopener norefferer"
              target="_blank"
              className={footerLinksClasses}
            >
              Business Portfolio
            </Link>
            <Link
              to="https://tis.pages.dev"
              rel="noopener norefferer"
              target="_blank"
              className={footerLinksClasses}
            >
              Educational Website
            </Link>
          </ul>
        </div>

        <div className="flex flex-col items-start justify-center bg-gradient-to-br from-[#16181d] from-85% to-[#646674] text-[#fdfdff] rounded-md w-full">
          <h3 className="font-semibold text-base py-2 px-4 text-center bg-white/5 w-full rounded-t-md mb-2.5">
            For Reccruiters
          </h3>
          <ul className="p-2 flex flex-col gap-0.5">
            <li className={footerLinksClasses}>Resume</li>
            <li className={footerLinksClasses}>Web Developer</li>
            <li className={footerLinksClasses}>Persuising UG Degree</li>
            <li className={footerLinksClasses}>Working with React JS</li>
          </ul>
        </div>
      </section>

      <section className="py-4 flex flex-col items-center justify-center gap-3 rounded-3xl w-full">
        <div className="flex flex-col items-center justify-center bg-gradient-to-l from-[#16181d] to-[#646674]/25 text-[#fdfdff] w-full">
          <h3 className="font-semibold text-base py-2 px-4 text-center bg-white/5 rounded-b-md">
            Social Options
          </h3>
          <article className="px-2 py-4 md:px-4 md:py-6 flex flex-wrap items-center justify-between gap-4 md:gap-6 w-fit text-3xl">
            <Link
              to="/contact"
              rel="noopener norefferer"
              className={socialLinksClasses}
            >
              <TbMessageShare />
            </Link>
            <Link
              to="https://www.instagram.com/raan_farhat/"
              rel="noopener norefferer"
              target="_blank"
              className={socialLinksClasses}
            >
              <FaInstagram />
            </Link>
            <Link
              to="mailto:imfarhat.dev@gmail.com"
              rel="noopener norefferer"
              target="_blank"
              className={socialLinksClasses}
            >
              <MdOutlineMailLock />
            </Link>
            <Link
              to="https://wa.me/+919830836212?text=Hi%20I.%20Frahat%20from%20Farhat%20e%20Services%20%26%20Assistance!%0A%0A[Redirected%20from%20your%20portfolio%20website]"
              rel="noopener norefferer"
              target="_blank"
              className={socialLinksClasses}
            >
              <MdWhatsapp />
            </Link>
            <Link
              to="https://farhateservices.pages.dev"
              rel="noopener norefferer"
              target="_blank"
              className={socialLinksClasses}
            >
              <IoIosGlobe />
            </Link>
          </article>
        </div>
      </section>

      <section className="text-white"></section>

      <section className="px-2 py-4 md:px-4 flex items-center justify-between gap-2.5 text-[#fdfdff] bg-gradient-to-r from-[#16181d] to-[#646674]/25 w-full text-xs md:text-base">
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
