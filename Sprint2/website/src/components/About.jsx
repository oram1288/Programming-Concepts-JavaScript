import picture from "../images/Spark.png";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <img src={picture} alt="" class="pic"></img>
      <br />
      <br />
      <h2>About</h2>
      <p>
        Spark is an online shop where you can find a wide variety of
        electronics. We carry products from Apple, Samsung, Google and many
        more. <br />
        <br />
        Click the Button below to view all of our products!{" "}
      </p>
      <br />
      <Link class="btn" to="/productlist">
        Product List
      </Link>
    </div>
  );
};

export default About;
