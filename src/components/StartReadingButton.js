import React, { useCallback } from "react";
import { useSetRecoilState } from "recoil";
import state from "../state";
import Button from "./Button";

const StartReadingButton = () => {
  const setViewName = useSetRecoilState(state.viewName);

  const onClick = useCallback(() => {
    setViewName("");
  }, [setViewName]);

  return <Button onClick={onClick} value="Click Here to Start Reading" />;
};

export default StartReadingButton;
