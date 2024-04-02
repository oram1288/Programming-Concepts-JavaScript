import PropTypes from "prop-types";
import Button from "./Button";

function Header({ onAdd }) {
  return (
    <header>
      <h1>Welcome to Ikea</h1>
      <Button text="Product List" color="navy" onClick={onAdd} />
      <Button text="Shopping Cart" color="green" onClick={onAdd} />
    </header>
  );
}

Header.defaultProps = {
  title: "Default",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

const headingStyle = {
  color: "red",
  backgroundColor: "black",
};

export default Header;
