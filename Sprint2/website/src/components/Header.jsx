import PropTypes from "prop-types";
import Button from "./Button";

function Header({ title, onAdd }) {
  return (
    <header>
      <h1 style={{ color: "green" }}>{title}</h1>
      {/* <h2 style={headingStyle}>this is testing</h2> */}
      <Button text="Product List" color="navy" onClick={onAdd} />
      <Button text="Shopping Cart" color="green" onClick={onAdd} />
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
