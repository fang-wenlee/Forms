import React from "react";

import {
  TimeoutComponent,
  TimeCount,
  Timer
} from "../components/hooks/TimeoutComp";

import {
  IncrementButton,
  ShowEvenCountButton
} from "../components/buttons/buttons";

const ButtonCompPage = () => {
  return (
    <>
      <h1>Buttons Test: </h1>
      <Timer />
      <hr />
      <IncrementButton />
      <hr />
      <ShowEvenCountButton input={100} />

      <br />
      <hr />
      <TimeCount />

      <hr />

      <TimeoutComponent />
    </>
  );
};

export default ButtonCompPage;
