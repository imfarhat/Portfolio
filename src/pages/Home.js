import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import workingDev from "../assets/images/characters/working-dev.png";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiJavascript } from "react-icons/si";

function Home() {
  const langClasses =
    "p-2 md:p-4 rounded bg-gradient-to-tl hover:bg-gradient-to-br transition duration-300 from-[#141e28] from-70% to-[#646674] font-semibold text-white flex flex-col gap-1 md:gap-2 items-center justify-center ";

  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-60px)] md:min-h-[calc(100vh-54px)] flex flex-col items-center justify-center bg-no-repeat bg-cover bg-gradient-to-tl from-[#141e28] from-90% to-[#646674]">
        <section className="max-w-7xl w-full h-full flex flex-col gap-8">
          <article className="flex flex-wrap md:flex-nowrap md:flex-row items-center justify-between gap-4 rounded-md overflow-hidden">
            <aside className="flex flex-col items-start justify-center gap-2 w-full md:w-[50%] p-2 md:p-4 h-full text-white">
              <h1 className="text-3xl font-bold">
                Welcome to I Farhat's Portfolio Website!
              </h1>
              <p>
                I am I Farhat, a passionate web developer with expertise in
                HTML, CSS, Tailwind CSS, JavaScript, React, C, and C++. With a
                strong foundation in coding principles and a creative mindset, I
                strive to create engaging and user-friendly web experiences.
              </p>
            </aside>
            <aside className="w-full md:w-[50%]">
              <div>
                <img
                  src={workingDev}
                  alt="Background"
                  className="w-full h-full"
                />
              </div>
            </aside>
          </article>

          <article className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-4 bg-white rounded-md overflow-hidden p-2 md:p-4 md:pl-0">
            <h1 className="rotate-0 lg:-rotate-90 text-[#646674] text-2xl md:text-3xl font-bold">
              Skills
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <h3 className={langClasses}>
                <FaHtml5 className="text-7xl md:text-9xl" />
                <span className="text-sm md:text-base">HTML</span>
              </h3>
              <h3 className={langClasses}>
                <FaCss3Alt className="text-7xl md:text-9xl" />
                <span className="text-sm md:text-base">CSS</span>
              </h3>
              <h3 className={langClasses}>
                <SiTailwindcss className="text-7xl md:text-9xl" />
                <span className="text-sm md:text-base">Tailwind</span>
              </h3>
              <h3 className={langClasses}>
                <SiJavascript className="text-7xl md:text-9xl rounded" />
                <span className="text-sm md:text-base">JavaScript</span>
              </h3>
              <h3 className={langClasses}>
                <FaReact className="text-7xl md:text-9xl" />
                <span className="text-sm md:text-base">React JS</span>
              </h3>
            </div>
          </article>

          <article className="flex flex-col items-start justify-center gap-2 text-white">
            <h1 className="text-3xl font-bold">Interests</h1>
            <p>
              I am enthusiastic about exploring new technologies and frameworks
              to enhance my skills and stay updated with the latest trends in
              web development. In my free time, I enjoy contributing to
              open-source projects, experimenting with new coding techniques,
              and sharing my knowledge with the community.
            </p>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
export default Home;
