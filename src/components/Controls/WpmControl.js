import React, { useCallback } from "react";
import { useRecoilState } from "recoil";
import state from "state";
import WpmSlider from "./WpmSlider";

const WpmControl = () => {
  const [wpm, setWpm] = useRecoilState(state.wpm);

  const onChange = useCallback(
    (ev) => {
      const evTargetValue = ev.target.value;
      const nextValue = parseInt(evTargetValue, 10);
      if (isNaN(nextValue)) return;
      setWpm(ev.target.value);
    },
    [setWpm],
  );

  return (
    <div>
      <input type="text" value={wpm} onChange={onChange} />
      <WpmSlider />
    </div>
  );
};

export default WpmControl;
