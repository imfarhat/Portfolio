import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import workingDev from "../assets/images/characters/working-dev.png";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiJavascript } from "react-icons/si";

function Home() {
  const langClasses =
    "p-2 md:p-4 rounded bg-gradient-to-tl hover:bg-gradient-to-br from-[#16181d] from-70% to-[#646674] font-semibold text-white flex flex-col gap-1 md:gap-2 items-center justify-center ";

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center bg-[#16181d]">
        <section className="py-6 max-w-7xl w-full h-full flex flex-col gap-8">
          <article className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 rounded-md overflow-hidden">
            <aside className="flex flex-col items-start justify-center gap-2 w-full md:w-[50%] p-2 md:p-4 h-full text-white">
              <h1 className="text-3xl font-bold">
                Welcome to I Farhat's Portfolio Website!
              </h1>
              <p className="text-white/75">
                I am I. Farhat, a passionate web developer with expertise in
                HTML, CSS, Tailwind CSS, JavaScript, React, C, and C++. With a
                strong foundation in coding principles and a creative mindset, I
                strive to create engaging and user-friendly web experiences.
              </p>
            </aside>
            <aside className="w-full md:w-[50%] p-4 md:p-6 bg-gradient-to-b from-transparent to-white/5 rounded-full animate-spin">
              <div className="group md:cursor-pointer bg-gradient-to-t from-white/5 to-white/10 aspect-square rounded-full p-4 md:p-6 animate-reverse-spin">
                <div className="bg-gradient-to-t from-white/10 to-white/5 aspect-square rounded-full p-4 md:p-6 animate-spin">
                  <div className="bg-gradient-to-t from-[#16181d] from-80% to-[#141e28] w-full h-full aspect-square rounded-full p-4 md:p-6 animate-reverse-spin">
                    <img
                      src={workingDev}
                      alt="Web Developer"
                      className="w-full h-full aspect-square group-hover:scale-105 transition ease-in duration-200 select-none pointer-events-none md:pointer-events-auto md:animate-pulse md:group-hover:animate-none"
                    />
                  </div>
                </div>
              </div>
            </aside>
          </article>

          <article className="flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-between gap-4 bg-gradient-to-r from-[#16181d] to-[#646674]/25 rounded-md overflow-hidden p-2 md:p-4">
            <h1 className="rotate-0 lg:rotate-90 text-[#fdfdff] text-2xl md:text-3xl font-bold">
              Skills
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <h3 className={langClasses}>
                <FaHtml5 className="text-7xl md:text-9xl text-[#e34c26]/95 bg-[#fdfdff]/95 rounded" />
                <span className="text-sm md:text-base">HTML</span>
              </h3>
              <h3 className={langClasses}>
                <FaCss3Alt className="text-7xl md:text-9xl text-[#264de4]/95 bg-[#fdfdff]/95 rounded" />
                <span className="text-sm md:text-base">CSS</span>
              </h3>
              <h3 className={langClasses}>
                <SiTailwindcss className="text-7xl md:text-9xl text-sky-500 bg-[#fdfdff]/95 rounded p-1.5" />
                <span className="text-sm md:text-base">Tailwind</span>
              </h3>
              <h3 className={langClasses}>
                <SiJavascript className="text-7xl md:text-9xl text-[#f0db4f] rounded" />
                <span className="text-sm md:text-base">JavaScript</span>
              </h3>
              <h3 className={langClasses}>
                <FaReact className="text-7xl md:text-9xl text-sky-400 bg-[#fdfdff]/95 rounded p-1.5" />
                <span className="text-sm md:text-base">React JS</span>
              </h3>
            </div>
          </article>

          <article className="flex flex-col items-start justify-center gap-2 p-2 md:p-4 text-white">
            <h1 className="text-3xl font-bold">Interests</h1>
            <p className="text-white/75">
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
