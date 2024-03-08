//import { Link } from "react-router-dom";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="flex flex-col items-center justify-center gap-4 bg-[#16181d] border-t">
      <div className="w-full text-[141e28] flex items-center justify-center">
        <button
          className="bg-white rounded-b py-1.5 px-4 font-semibold active:bg-white/85 transition duration-200"
          onClick={scrollToTop}
        >
          Back to Top
        </button>
      </div>
      <section className="flex flex-wrap items-center justify-center gap-3 text-white">
        <div className="flex flex-col items-start justify-center bg-gradient-to-br from-[#141e28] from-85% to-[#646674] text-white w-fit p-2 rounded-md">
          <h3 className="font-semibold text-base">Project Category</h3>
          <span className="text-[#646674]">Project Name 1</span>
          <span>Project Name 2</span>
          <span>Project Name 3</span>
          <span>Project Name 4</span>
          <span>Project Name 5</span>
          <span>Project Name 6</span>
        </div>
        <div className="flex flex-col items-start justify-center bg-gradient-to-br from-[#141e28] from-85% to-[#646674] text-white w-fit p-2 rounded-md">
          <h3 className="font-semibold text-base">Project Category</h3>
          <span className="text-[#646674]">Project Name 1</span>
          <span>Project Name 2</span>
          <span>Project Name 3</span>
          <span>Project Name 4</span>
          <span>Project Name 5</span>
          <span>Project Name 6</span>
        </div>
        <div className="flex flex-col items-start justify-center bg-gradient-to-br from-[#141e28] from-85% to-[#646674] text-white w-fit p-2 rounded-md">
          <h3 className="font-semibold text-base">Project Category</h3>
          <span className="text-[#646674]">Project Name 1</span>
          <span>Project Name 2</span>
          <span>Project Name 3</span>
          <span>Project Name 4</span>
          <span>Project Name 5</span>
          <span>Project Name 6</span>
        </div>
        <div className="flex flex-col items-start justify-center bg-gradient-to-br from-[#141e28] from-85% to-[#646674] text-white w-fit p-2 rounded-md">
          <h3 className="font-semibold text-base">Project Category</h3>
          <span className="text-[#646674]">Project Name 1</span>
          <span>Project Name 2</span>
          <span>Project Name 3</span>
          <span>Project Name 4</span>
          <span>Project Name 5</span>
          <span>Project Name 6</span>
        </div>
        <div className="flex flex-col items-start justify-center bg-gradient-to-br from-[#141e28] from-85% to-[#646674] text-white w-fit p-2 rounded-md">
          <h3 className="font-semibold text-base">Project Category</h3>
          <span className="text-[#646674]">Project Name 1</span>
          <span>Project Name 2</span>
          <span>Project Name 3</span>
          <span>Project Name 4</span>
          <span>Project Name 5</span>
          <span>Project Name 6</span>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
