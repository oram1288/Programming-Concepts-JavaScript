import Button from "./Button";

const About = ({ onAdd }) => {
  return (
    <div>
      <h2>About</h2>
      <p>
        Sprint is an online shop where you can find a wide variety of
        electronics. We carry products from Apple, Samsung, Google and many
        more.{" "}
      </p>
      <Button text="Product List" color="navy" onClick={onAdd} />
    </div>
  );
};

export default About;
