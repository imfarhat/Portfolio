import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";

function SocialLinks() {
  return (
    <>
      <Link
        to="mailto:imfarhat.dev@gmail.com"
        rel="noopener norefferer"
        className="social-link-item hover:bg-[#3e65cf] text-[#3e65cf] active:bg-opacity-85"
      >
        <MdOutlineMarkEmailUnread />
      </Link>
      <Link
        to="https://www.instagram.com/raan_farhat"
        rel="noopener norefferer"
        target="_blank"
        className="social-link-item social-link-ig-addon"
      >
        <FaInstagram />
      </Link>
      <Link
        to="https://twitter.com/raan_farhat"
        rel="noopener norefferer"
        target="_blank"
        className="social-link-item  hover:bg-[#16181d] text-[#16181d] active:bg-opacity-85"
      >
        <RiTwitterXFill />
      </Link>
      <Link
        to="https://www.github.com/imfarhat"
        rel="noopener norefferer"
        target="_blank"
        className="social-link-item hover:bg-[#16181d] text-[#16181d] active:bg-opacity-85"
      >
        <FaGithub />
      </Link>

      <Link
        to="https://www.linkedin.com/in/imfarhat"
        rel="noopener norefferer"
        target="_blank"
        className="social-link-item hover:bg-[#3273dc] text-[#3273dc] active:bg-opacity-85"
      >
        <FaLinkedin />
      </Link>
    </>
  );
}
export default SocialLinks;
