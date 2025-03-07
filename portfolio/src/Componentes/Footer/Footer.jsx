import "./Footer.css"; // Import the CSS file
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a
          href="https://github.com/Yash-Ghatge"
          target="_blank"
          rel="noopener noreferrer"
          className="icon github"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/yash-ghatge-4a44252a9/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon linkedin"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://wa.me/9321308892"
          target="_blank"
          rel="noopener noreferrer"
          className="icon whatsapp"
        >
          <FaWhatsapp />
        </a>
        <a
          href="mailto:yashghatge012@gmail.com"
          className="icon gmail"
        >
          <MdEmail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
