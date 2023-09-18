import React, { useCallback } from "react";
import { useSetRecoilState } from "recoil";
import state from "state";

const PastePassage = () => {
  const setPassage = useSetRecoilState(state.passage);

  const onInput = useCallback(
    (ev) => {
      const eventTargetValue = ev.target?.value;

      if (eventTargetValue) setPassage(eventTargetValue);
    },
    [setPassage],
  );

  return (
    <div>
      <div>paste passage:</div>
      <div>
        <textarea rows="4" cols="50" onInput={onInput} />
      </div>
    </div>
  );
};

export default PastePassage;
