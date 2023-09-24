import React, { useCallback } from "react";
import { useSetRecoilState } from "recoil";
import Button from 'components/Button'
import state from "state";

const RestartButton = () => {
  const setIsPlaying = useSetRecoilState(state.isPlaying);
  const setOffset = useSetRecoilState(state.offset);

  const onClick = useCallback(() => {
    setIsPlaying(false);
    setOffset(0);
  }, [setOffset, setIsPlaying]);

  return <Button value="Restart" onClick={onClick} />;
};

export default RestartButton;
