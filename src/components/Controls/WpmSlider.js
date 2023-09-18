import React, { useCallback, useMemo } from "react";
import { useRecoilState } from "recoil";
import state from "state";

const SCALE = 50;
const MIN = 2;
const MAX = 10;

const WpmSlider = () => {
  const [wpm, setWpm] = useRecoilState(state.wpm);

  const value = useMemo(() => wpm / SCALE, [wpm]);

  const onChange = useCallback(
    (ev) => {
      const evTargetValue = ev.target.value;
      const nextValue = parseInt(evTargetValue, 10);
      if (isNaN(nextValue)) return;
      setWpm(50 * nextValue);
    },
    [setWpm],
  );

  return (
    <input type="range" min={MIN} max={MAX} value={value} onChange={onChange} />
  );
};

export default WpmSlider;
