import Button from "./Button";

const About = ({ onAdd }) => {
  return (
    <div>
      <h2 class="left">About</h2>
      <p>this is where the info will go</p>
      <Button text="Product List" color="navy" onClick={onAdd} />
    </div>
  );
};

export default About;
