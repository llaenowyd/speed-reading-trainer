import React, { useCallback } from "react";
import { useSetRecoilState } from "recoil";
import { VIEW_NAME_WORDS_RUNNER } from "../constants";
import state from "../state";
import Button from "./Button";

const StartReadingButton = () => {
  const setViewName = useSetRecoilState(state.viewName);

  const onClick = useCallback(() => {
    setViewName(VIEW_NAME_WORDS_RUNNER);
  }, [setViewName]);

  return <Button onClick={onClick} value="Click Here to Start Reading" />;
};

export default StartReadingButton;
