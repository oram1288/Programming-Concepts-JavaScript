import PropTypes from "prop-types";

const Button = ({ text, color, onClick }) => {
  //   const onClick = (e) => {
  //     console.log(e);
  //   };

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
  color: "green",
  text: "default",
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Button;
