import React from "react";

import {
  TimeoutComponent,
  TimeCount,
  Timer
} from "../components/hooks/TimeoutComp";

import {
  IncrementButton,
  ControllableClick
  // ShowEvenCountButton
} from "../components/buttons/buttons";

const ButtonCompPage = () => {
  return (
    <>
      <h1>Buttons click Test: </h1>
      <hr />
      <ControllableClick />
      <hr />

      <Timer />
      <hr />
      <IncrementButton />
      <hr />
      {/* <ShowEvenCountButton input={100} /> */}

      <br />
      <hr />
      <TimeCount />

      <hr />

      <TimeoutComponent />
    </>
  );
};

export default ButtonCompPage;
