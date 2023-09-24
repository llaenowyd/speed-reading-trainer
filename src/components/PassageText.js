import React from "react";
import { useRecoilState } from "recoil";
import state from "../state";
import TextArea from "./TextArea";

const PassageText = () => {
  const [passage, setPassage] = useRecoilState(state.passage);

  return <TextArea text={passage} onChange={setPassage} />;
};

export default PassageText;
