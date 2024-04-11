// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <a class="btn2" href="/">
        Go Back
      </a>
      <br />
      <p>&copy; {new Date().getFullYear()} "Website Name"</p>
    </footer>
  );
};

export default Footer;
