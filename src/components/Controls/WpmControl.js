import React from "react";
import { useRecoilValue } from "recoil";
import tw from "twin.macro";
import state from "../../state";
import WpmSlider from "./WpmSlider";

const Row = tw.div`flex gap-2 items-center w-full bg-gray-100`;
const Label = tw.span`italic font-bold text-blue-800`;

const WpmControl = () => {
  const wpm = useRecoilValue(state.wpm);

  return (
    <Row>
      <WpmSlider />
      <Label>{wpm} wpm</Label>
    </Row>
  );
};

export default WpmControl;
