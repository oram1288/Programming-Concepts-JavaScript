import PropTypes from "prop-types";

const Button = ({ text, color, onClick }) => {
  // const onClick = () => {
  //   console.log("Click");
  // };

  return (
    <button
      className="btn"
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "navy",
  text: "default",
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Button;
