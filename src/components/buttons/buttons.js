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
      <h3>Increasae the number 1 by 1 till user input.</h3>
      <button onClick={startCounting}>Start</button>
      <button onClick={resetCount}>Reset</button>
      <span> {count} times</span>
    </>
  );
};

//==============================================================
