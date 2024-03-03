import wave from "../assets/images/backgrounds/wave.png";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiJavascript } from "react-icons/si";

function Home() {
  const lanClasses =
    "p-4 rounded bg-gradient-to-tr hover:bg-gradient-to-bl transition ease-in duration-300 from-indigo-500 via-purple-500 to-pink-500 font-semibold text-white flex flex-col gap-3 items-center justify-center";

  return (
    <>
      <div
        className="mt-4 min-h-[calc(100vh-84px)] flex items-center justify-center gap-40 bg-no-repeat bg-cover"
        style={{ backgroundImage: `url('${wave}')` }}
      >
        <div className="max-w-[90rem] w-full h-full bg-white/20 p-4 mx-2 flex flex-col gap-8 backdrop-blur-sm rounded-md">
          <div className="flex flex-col items-start justify-center gap-2">
            <h1 className="text-3xl font-bold">
              Welcome to I Farhat's Portfolio Website!
            </h1>
            <p>
              I am I Farhat, a passionate web developer with expertise in HTML,
              CSS, Tailwind CSS, JavaScript, React, C, and C++. With a strong
              foundation in coding principles and a creative mindset, I strive
              to create engaging and user-friendly web experiences.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-3xl font-bold">Skills</h1>
            <p className="flex flex-wrap items-center justify-center gap-4">
              <h2 className={lanClasses}>
                <FaHtml5 className="text-9xl" />
                HTML
              </h2>
              <h2 className={lanClasses}>
                <FaCss3Alt className="text-9xl" />
                CSS
              </h2>
              <h2 className={lanClasses}>
                <SiTailwindcss className="text-9xl" />
                Tailwind
              </h2>
              <h2 className={lanClasses}>
                <SiJavascript className="text-9xl rounded" />
                JavaScript
              </h2>
              <h2 className={lanClasses}>
                <FaReact className="text-9xl" />
                React JS
              </h2>
            </p>
          </div>

          <div className="flex flex-col items-start justify-center gap-2">
            <h1 className="text-3xl font-bold">Intrests</h1>
            <p>
              I am enthusiastic about exploring new technologies and frameworks
              to enhance my skills and stay updated with the latest trends in
              web development. In my free time, I enjoy contributing to
              open-source projects, experimenting with new coding techniques,
              and sharing my knowledge with the community.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
