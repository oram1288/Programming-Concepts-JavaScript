import { useState } from "react";

const CheckOut = () => {
  let [num, setNum] = useState(0);

  let [name, setName] = useState("Cody Oram");

  function handleClick() {
    setNum(num + 1);
    setName("Bob Smith");
  }

  return (
    <div>
      <h1>Check Out</h1>
      <p>
        {num} - {name}
      </p>
      <button onClick={handleClick}>Change Number</button>
    </div>
  );
};

export default CheckOut;
