import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import { IoGlobeOutline } from "react-icons/io5";
import { MdInstallDesktop } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

function Projects() {
  sessionStorage.setItem("previousPage", window.location.pathname);

  return (
    <>
      <Header />
      <main className="py-4 md:pt-8 pb-16 ficjc flex-col gap-8 bg-[#16181d]">
        <section className="w-full flex flex-col ficjc gap-8">
          <article className="max-w-7xl flex flex-col items-center justify-center gap-4 text-[#f5f5f5] md:rounded-md overflow-hidden p-2 md:p-4">
            <h1 className="font-semibold px-2 text-center text-3xl">
              Projects
            </h1>
            <p className="px-2 md:px-4 text-justify text-[#f5f5f5]/75 drop-shadow shadow-black flex flex-wrap gap-x-1">
              Welcome to my
              <span className="text-[#f5f5f5]">digital gallery</span>
              where pixels meet passion! Below, you'll find a curated selection
              of my proudest creations. From sleek website designs to robust
              <span className="text-[#f5f5f5]">web applications,</span> each
              project represents a unique journey of creativity and
              craftsmanship.
            </p>
            <h1>Here are some of my recent projects</h1>
          </article>
        </section>
        <section className="md:rounded-md overflow-hidden p-2 md:p-4 w-full ficjc bg-gradient-to-r from-[#16181d] to-[#646674]/25">
          <article className="max-w-7xl w-full items-center justify-center ffwicjc gap-4 md:gap-6">
            <div className="projects-card group">
              <h3>
                T.I.S.
                <span>
                  <Link
                    to="https://tis.pages.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoGlobeOutline />
                  </Link>
                  <Link
                    to="https://github.com/imfarhat/The-International-School"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsGithub />
                  </Link>
                </span>
              </h3>
              <img
                src="https://raw.githubusercontent.com/imfarhat/The-International-School/main/contents/images/logo/main-icon.png"
                alt="TIS Logo"
                loading="eager"
                className="p-2"
              />
              <p className="group-hover:opacity-100 h-fit">
                <strong>The International School (TIS)</strong>: Coded one of my
                finest projects of 2023 coded using HTML, Tailwind CSS and
                JavaScript with 40+ pages. A school website with all the extra
                ordinary experince and discovery options.
              </p>
            </div>

            <div className="projects-card group">
              <h3>
                AttendQR
                <span>
                  <Link
                    to="https://attendqr.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoGlobeOutline />
                  </Link>
                  <Link
                    to="https://github.com/imfarhat/AttendQR"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsGithub />
                  </Link>
                </span>
              </h3>
              <img
                src="https://raw.githubusercontent.com/imfarhat/AttendQR/main/public/AttendQR.png"
                alt="AttendQR Logo"
                loading="eager"
              />
              <p className="group-hover:opacity-100 h-fit">
                <strong>AttendQR</strong>: QR Code based Attendance App to makr
                attendace of employees, students, etc. and can be used in most
                of the sectors minimizing the resourced and making the place
                techy. Currently in initial phase...
              </p>
            </div>

            <div className="projects-card group">
              <h3>
                Business Portfolio
                <span>
                  <Link
                    to="https://farhateservices.pages.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoGlobeOutline />
                  </Link>
                  <Link
                    to="https://github.com/farhateservices/fesa/tree/main/eCommerce"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsGithub />
                  </Link>
                </span>
              </h3>
              <img
                src="https://raw.githubusercontent.com/farhateservices/fesa/main/logo-head-black.png"
                alt="FeSA Logo"
                loading="eager"
              />
              <p className="group-hover:opacity-100 h-fit">
                <strong>Farhat e Services & Assistance</strong>: A platform that
                showcases my skills in HTML, CSS, and JavaScript. Designed with
                mobile users in mind, this website offers a smooth and intuitive
                experience on your smartphone.
              </p>
            </div>

            <div className="projects-card group">
              <h3>
                SkipPi
                <span>
                  <Link
                    to="https://github.com/imfarhat/SkipPi?tab=readme-ov-file#installation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:block"
                  >
                    <MdInstallDesktop />
                  </Link>
                  <Link
                    to="https://github.com/imfarhat/SkipPi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsGithub />
                  </Link>
                </span>
              </h3>
              <img
                src="https://raw.githubusercontent.com/imfarhat/SkipPi/main/icon.png"
                alt="SkipPi Logo"
                loading="eager"
              />
              <p className="group-hover:opacity-100 h-fit">
                <strong>A Chrome / Firefox Extension</strong>: Auto-skip YouTube
                ads in under 0.1 second, efficiently bypassing ads skippable
                after 5 seconds, completing the skip in less than 100
                milliseconds and saving nearly 5 seconds each time.
              </p>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
export default Projects;
