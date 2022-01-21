import React from "react";
import {
  IncrementButton,
  ShowEvenCountButton
} from "../components/buttons/buttons";

const ButtonCompPage = () => {
  return (
    <>
      <h1>Buttons Test: </h1>
      <IncrementButton />

      <ShowEvenCountButton input={10} />
    </>
  );
};

export default ButtonCompPage;
