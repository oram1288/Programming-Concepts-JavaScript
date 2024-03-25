import { useEffect, useState } from "react";

const Temp4 = () => {
  const [count, setCount] = useState(0);

  // Type 1
  //   useEffect(() => {
  //     setTimeout(() => {
  //       setCount((count) => count + 1);
  //     }, 1000);
  //   });

  // Type 2
  //   useState(0);
  //   const [calcuoation, setCalculation] = useState(0);

  //   useEffect(() => {
  //     setCalculation(() => count * 2);
  //   }, [count]);

  //Type 3
  const [x, setX] = useState(0);
  useEffect(() => setCount(count + 1), [x]);

  return (
    // Type 2
    //   useEffect(() => {
    //     setTimeout(() => {
    //       setCount((count) => count + 1);
    //     }, 1000);
    //   });

    // Type 3
    <>
      <p>Count: {count}</p>
      <button onClick={() => setX(x + 5)}>Change X</button>
    </>
  );
};

export default Temp4;
