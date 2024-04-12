import PropTypes from "prop-types";

function Header({ title }) {
  return (
    <header>
      <h1>{title}!</h1>
      <p>Electronic Superstore</p>
    </header>
  );
}

Header.defaultProps = {
  title: "Welcome to Ikea",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

export default Header;
