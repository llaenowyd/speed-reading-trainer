import React from "react";
import tw from 'twin.macro';
import Controls from "../components/Controls";
import Word from "../components/Word";

const Stack = tw.div`flex flex-col gap-2 flex-1 bg-blue-100`

const WordsRunner = () => {
  return (
    <Stack>
      <Controls />
      <Word />
    </Stack>
  );
};

export default WordsRunner;
