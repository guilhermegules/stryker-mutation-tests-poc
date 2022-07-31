import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          if (counter > 10) {
            setCounter(0);
            return;
          }

          setCounter((previousCounter) => previousCounter + 1);
        }}
      >
        +
      </button>
      <p>{counter}</p>
      <button
        onClick={() => setCounter((previousCounter) => previousCounter - 1)}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
