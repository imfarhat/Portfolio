import wave from "../assets/images/backgrounds/wave.png";

function Home() {
  const programmingLanguages = [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "JavaScript",
    "React",
    "C++",
    "C",
  ];

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
              {programmingLanguages.map((lang, i) => {
                return (
                  <span
                    key={i}
                    className="px-4 py-2 rounded bg-gradient-to-r hover:bg-gradient-to-l transition-all ease-in duration-300 from-indigo-500 via-purple-500 to-pink-500 font-semibold text-white"
                  >
                    {lang}
                  </span>
                );
              })}
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
