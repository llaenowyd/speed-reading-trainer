import React, { useCallback, useMemo } from "react";
import { useRecoilState } from "recoil";
import state from "state";
import WpmSlider from "./WpmSlider";

const WpmControl = () => {
  const [wpm, setWpm] = useRecoilState(state.wpm);

  const onChange = useCallback(
    (ev) => {
      const evTargetValue = ev.target.value;
      console.log("etv", evTargetValue, typeof evTargetValue);
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
