import Link from "next/link";
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <Link href="/cv.pdf" target="_blank" rel="noreferrer">
      <div>
        <FaFilePdf />
      </div>
    </Link>

    <a href="https://github.com/acerohernan" target="_blank" rel="noreferrer">
      <div>
        <FaGithub />
      </div>
    </a>

    <a
      href="https://www.linkedin.com/in/hernan-acero/"
      target="_blank"
      rel="noreferrer"
    >
      <div>
        <FaLinkedin />
      </div>
    </a>
  </div>
);

export default SocialMedia;
