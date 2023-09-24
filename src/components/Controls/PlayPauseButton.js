import React, { useCallback } from "react";
import { useRecoilState } from "recoil";
import Button from 'components/Button'
import state from "state";

const PlayPauseButton = () => {
  const [isPlaying, setIsPlaying] = useRecoilState(state.isPlaying);

  const onClick = useCallback(() => {
    setIsPlaying((isPlaying) => !isPlaying);
  }, [setIsPlaying]);

  return (
    <Button
      value={isPlaying ? "Pause" : "Play"}
      onClick={onClick}
    />
  );
};

export default PlayPauseButton;
