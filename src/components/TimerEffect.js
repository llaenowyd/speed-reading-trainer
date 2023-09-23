import { useCallback, useEffect, useRef } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import state from "state";

const TimerEffect = () => {
  const timeoutRef = useRef();
  const setOffset = useSetRecoilState(state.offset);
  const isPlaying = useRecoilValue(state.isPlaying);
  const wpm = useRecoilValue(state.wpm);

  const onInterval = useCallback(() => {
    setOffset((offset) => 1 + offset);
  }, [setOffset]);

  useEffect(() => {
    if (isPlaying) timeoutRef.current = setInterval(onInterval, 60000 / wpm);
    else timeoutRef.current = null;

    return () => {
      clearInterval(timeoutRef.current);
    };
  }, [isPlaying, onInterval, timeoutRef, wpm]);

  return null;
};

export default TimerEffect;
