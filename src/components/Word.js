import React from "react";
import { useRecoilValue } from "recoil";
import tw from 'twin.macro'
import state from "../state";

const Div = tw.div`text-6xl h-full bg-green-100 flex items-center justify-center`

const Word = () => {
  const word = useRecoilValue(state.word);

  return <Div>{word}</Div>;
};

export default Word;
