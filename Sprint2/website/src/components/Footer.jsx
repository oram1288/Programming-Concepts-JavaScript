import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Link class="btn2" to="/">
        Home
      </Link>
      <br />
      <p>&copy; {new Date().getFullYear()} Sparks Electronics</p>
    </footer>
  );
};

export default Footer;
