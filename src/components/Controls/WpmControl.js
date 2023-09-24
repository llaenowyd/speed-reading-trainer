import React  from "react";
import { useRecoilState } from "recoil";
import tw from 'twin.macro';
import state from "state";
import WpmSlider from "./WpmSlider";

const Row = tw.div`flex gap-2 items-center w-full bg-gray-100`
const Label = tw.span`italic font-bold text-blue-800`

const WpmControl = () => {
  const [wpm, setWpm] = useRecoilState(state.wpm);

  // const onChange = useCallback(
  //   (ev) => {
  //     const evTargetValue = ev.target.value;
  //     const nextValue = parseInt(evTargetValue, 10);
  //     if (isNaN(nextValue)) return;
  //     setWpm(ev.target.value);
  //   },
  //   [setWpm],
  // );

  return (
    <Row>
      <WpmSlider />
      <Label>{wpm} wpm</Label>
    </Row>
  );
};

export default WpmControl;
