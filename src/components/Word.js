import React from "react";
import { useRecoilValue } from "recoil";
import state from "state";

const Word = () => {
  const word = useRecoilValue(state.word);

  return <div>{word}</div>;
};

export default Word;
