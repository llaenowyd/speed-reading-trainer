import React from "react";
import tw from 'twin.macro';
import PlayPauseButton from "./PlayPauseButton";
import ResetButton from "./ResetButton";
import RestartButton from "./RestartButton";
import WpmControl from "./WpmControl";

const Buttons = tw.div`flex justify-between gap-2`
const Stack = tw.div`flex flex-col gap-2 bg-yellow-100 max-w-sm`

const Controls = () => {
  return (
    <Stack>
      <WpmControl />
      <Buttons>
        <RestartButton />
        <PlayPauseButton />
        <ResetButton />
      </Buttons>
    </Stack>
  );
};

export default Controls;
