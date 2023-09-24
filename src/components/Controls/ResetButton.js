import React, { useCallback } from "react";
import { useSetRecoilState } from "recoil";
import { VIEW_NAME_PASSAGE } from "../../constants";
import state from "../../state";
import Button from '../Button'

const ResetButton = () => {
  const setIsPlaying = useSetRecoilState(state.isPlaying);
  const setOffset = useSetRecoilState(state.offset);
  const setViewName = useSetRecoilState(state.viewName);

  const onClick = useCallback(() => {
    setIsPlaying(false);
    setOffset(0);
    setViewName(VIEW_NAME_PASSAGE)
  }, [setIsPlaying, setOffset, setViewName]);

  return <Button value="Reset" onClick={onClick} />;
};

export default ResetButton;
