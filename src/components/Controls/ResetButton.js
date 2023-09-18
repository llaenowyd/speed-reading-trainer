import React, { useCallback } from "react";
import { useSetRecoilState } from "recoil";
import state from "state";

const ResetButton = () => {
  const setIsPlaying = useSetRecoilState(state.isPlaying);
  const setOffset = useSetRecoilState(state.offset);
  const setPassage = useSetRecoilState(state.passage);

  const onClick = useCallback(() => {
    setIsPlaying(false);
    setOffset(0);
    setPassage("");
  }, [setIsPlaying, setOffset, setPassage]);

  return <input type="button" value="Reset" onClick={onClick} />;
};

export default ResetButton;
