import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

function Projects() {
  return (
    <>
      <Header />
      <main className="pt-16 py-24 ficjc flex-col bg-[#16181d]">
        <section className="w-full flex flex-col ficjc gap-8 bg-gradient-to-r from-[#16181d] to-[#646674]/25">
          <article className="max-w-7xl flex flex-col items-center justify-center gap-4 text-white md:rounded-md overflow-hidden p-2 md:p-4">
            <h1 className="font-semibold px-2 text-center text-3xl">
              Projects
            </h1>
            <p className="px-2 md:px-4 text-justify text-white/75 drop-shadow shadow-black flex flex-wrap gap-x-1">
              Welcome to my <span className="text-white">digital gallery</span>
              where pixels meet passion! Below, you'll find a curated selection
              of my proudest creations. From sleek website designs to robust
              <span className="text-white">web design,</span> each project
              represents a unique journey of creativity and craftsmanship.
            </p>
          </article>
        </section>
        <section className="bg-gradient-to-r from-[#16181d] to-[#646674]/25 md:rounded-md overflow-hidden p-2 md:p-4 w-full ficjc">
          <article className="max-w-7xl w-full items-center justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="projects-card">
             
            </div>

            <div className="projects-card">
              <h3>Experience</h3>
              
            </div>

            <div className="projects-card">
              <h3>Interests</h3>
            
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
export default Projects;
