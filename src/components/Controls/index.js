import React from "react";
import PlayPauseButton from "./PlayPauseButton";
import ResetButton from "./ResetButton";
import RestartButton from "./RestartButton";
import WpmControl from "./WpmControl";

const Controls = () => {
  return (
    <div>
      <div>
        <RestartButton />
        <PlayPauseButton />
        <ResetButton />
      </div>
      <WpmControl />
    </div>
  );
};

export default Controls;
