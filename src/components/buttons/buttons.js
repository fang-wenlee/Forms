import React, { useState } from "react";

export const IncrementButton = () => {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);
  const increase = () => {
    if (!flag && count < 11) {
      setCount(count + 1);
      if (count === 10) setFlag(true);
    } else if (count >= 0 && flag) {
      setCount(count - 1);
      if (count === 0) setFlag(false);
    }
  };

  return (
    <>
      <h3>insrease by 1 till reach 10, and decrease by 1 till reach 0</h3>
      <button onClick={increase}>Click</button>
      <span> {count === -1 ? setCount(0) : count} time</span>
    </>
  );
};

export const ControllableClick = () => {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h3> Button would be disabled after reach to 0 :</h3>
      <button onClick={increase}> + </button>
      <span> {count} </span>
      <button disabled={count === 0} onClick={decrease}>
        -
      </button>
    </>
  );
};

export const ShowEvenCountButton = ({ input }) => {
  //console.log(input);
  const [count, setCount] = useState(0);

  const startCounting = () => {
    for (let i = 0; i <= input; i++) {
      setTimeout(() => {
        console.log(i);
        setCount(count + i);
      }, i * 100);
    }
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <>
      <h3>Increasae the number by 1</h3>
      <button onClick={startCounting}>Start</button>

      <button onClick={resetCount}>Reset</button>
      <span> {count} times</span>
    </>
  );
};

//==============================================================
