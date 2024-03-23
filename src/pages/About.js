import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
//import sparkingRays from "../assets/images/backgrounds/black-spakring-color-rays.jpg";

function About() {
  sessionStorage.setItem("previousPage", window.location.pathname);

  return (
    <>
      <Header />
      <main className="py-4 md:pt-8 pb-16 ficjc flex-col gap-8 bg-[#16181d]">
        <section className="w-full flex flex-col ficjc gap-8">
          <article className="max-w-7xl flex flex-col items-center justify-center gap-4 text-[#f5f5f5] md:rounded-md overflow-hidden p-2 md:p-4">
            <h1 className="font-semibold px-2 text-center text-3xl">
              About Me
            </h1>
            <p className="px-2 md:px-4 text-justify text-[#f5f5f5]/75 drop-shadow shadow-black flex flex-wrap gap-x-1">
              Greetings! I'm I. Frahta, a professional with a penchant for
              problem-solving and a passion for continuous learning. My journey
              in the realm of
              <span className="text-[#f5f5f5]">web development,</span>
              <span className="text-[#f5f5f5]">web design</span>
              and
              <span className="text-[#f5f5f5]">graphic-design</span>
              has been driven by curiosity and fueled by a desire to make a
              positive impact through digital innovation.
            </p>
          </article>
        </section>
        <section className="md:rounded-md overflow-hidden p-2 md:p-4 w-full ficjc">
          <article className="max-w-7xl w-full items-center justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="about-details-card">
              <h3>Education</h3>
              <ul>
                <li>Persuing UG Degree under (MAKAUT)</li>
                <li>H. Seconday: SJV Kolkata (WBCHSE)</li>
                <li>Specialised in Computer Science</li>
                <li>Seconday: THS Kolkata (WBBSE)</li>
              </ul>
            </div>

            <div className="about-details-card">
              <h3>Experience</h3>
              <ul>
                <li>Part Time Web Manager at FeSA</li>
                <li>Front End Web Developer</li>
                <li>Freelanced for clients</li>
                <li>More coming soon...</li>
              </ul>
            </div>

            <div className="about-details-card">
              <h3>Interests</h3>
              <ul>
                <li>Front End Web Development</li>
                <li>Coding and Development</li>
                <li>Graphic Design</li>
                <li>Web Design</li>
              </ul>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
export default About;
