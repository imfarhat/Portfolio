import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import React, { useState } from "react";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiJavascript } from "react-icons/si";
import { TbLoader } from "react-icons/tb";

function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  sessionStorage.setItem("previousPage", window.location.pathname);

  return (
    <>
      <Header />
      <main className="py-4 md:pt-8 pb-16 ficjc flex-col gap-8 bg-[#16181d]">
        <section className="pt-8 pb-24 max-w-7xl w-full h-full flex flex-col gap-8">
          <article className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 rounded-md overflow-hidden">
            <aside className="flex flex-col items-start justify-center gap-2 w-full md:w-[50%] p-2 md:p-4 h-full text-[#f5f5f5]">
              <h1 className="text-3xl font-bold">
                Welcome to I Farhat's Portfolio Website!
              </h1>
              <p className="text-[#f5f5f5]/75">
                I am I. Farhat, a passionate web developer with expertise in
                HTML, CSS, Tailwind CSS, JavaScript and React JS. With a strong
                foundation in coding principles and a creative mindset, I strive
                to create engaging and user-friendly web experiences.
              </p>
            </aside>
            <aside className="w-full md:w-[50%] p-4 md:p-6 bg-gradient-to-b from-transparent to-[#f5f5f5]/5 rounded-full animate-spin">
              <div className="group md:cursor-pointer bg-gradient-to-t from-[#f5f5f5]/5 to-[#f5f5f5]/10 aspect-square rounded-full p-4 md:p-6 animate-reverse-spin">
                <div className="bg-gradient-to-t from-[#f5f5f5]/10 to-[#f5f5f5]/5 aspect-square rounded-full p-4 md:p-6 animate-spin">
                  <div className="bg-gradient-to-t from-[#16181d] from-80% to-[#141e28] w-full h-full aspect-square rounded-full p-4 md:p-6 animate-reverse-spin ficjc transition-all ease-in md:duration-200">
                    {!imageLoaded && (
                      <TbLoader className="text-7xl h-[50%] w-[50%] text-[#f5f5f5]/50 animate-[spin_3s_ease-in-out_infinite]" />
                    )}
                    <img
                      src="https://raw.githubusercontent.com/imfarhat/portfolio/main/src/assets/images/characters/working-dev.png"
                      alt="Working Developer"
                      loading="eager"
                      onLoad={handleImageLoad}
                      style={{ display: imageLoaded ? "block" : "none" }}
                    />
                  </div>
                </div>
              </div>
            </aside>
          </article>

          <article className="flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-between gap-4 bg-gradient-to-r from-[#16181d] to-[#646674]/25 md:rounded-md overflow-hidden p-2 md:p-4">
            <h1 className="rotate-0 lg:rotate-90 text-[#f5f5f5] text-2xl md:text-3xl font-bold">
              Skills
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <h3 className="programming-lang-card">
                <FaHtml5 className="text-7xl md:text-9xl text-[#e34c26]/95 bg-[#f5f5f5] rounded" />
                <span className="text-sm md:text-base">HTML</span>
              </h3>
              <h3 className="programming-lang-card">
                <FaCss3Alt className="text-7xl md:text-9xl text-[#264de4]/95 bg-[#f5f5f5] rounded" />
                <span className="text-sm md:text-base">CSS</span>
              </h3>
              <h3 className="programming-lang-card">
                <SiTailwindcss className="text-7xl md:text-9xl text-sky-500 bg-[#f5f5f5] rounded p-1.5" />
                <span className="text-sm md:text-base">Tailwind</span>
              </h3>
              <h3 className="programming-lang-card">
                <SiJavascript className="text-7xl md:text-9xl text-[#f0db4f] rounded" />
                <span className="text-sm md:text-base">JavaScript</span>
              </h3>
              <h3 className="programming-lang-card">
                <FaReact className="text-7xl md:text-9xl text-sky-400 bg-[#f5f5f5] rounded p-1.5" />
                <span className="text-sm md:text-base">React JS</span>
              </h3>
            </div>
          </article>

          <article className="flex flex-col items-start justify-center gap-2 p-2 md:p-4 text-[#f5f5f5]">
            <h1 className="text-3xl font-bold">Interests</h1>
            <p className="text-[#f5f5f5]/75">
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
