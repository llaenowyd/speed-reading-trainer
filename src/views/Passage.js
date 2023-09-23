import React, { useCallback } from "react";
import { useSetRecoilState } from "recoil";
import tw from 'twin.macro';
import StartReadingButton from 'components/StartReadingButton'
import TextArea from 'components/TextArea'
import state from "state";
import 'styled-components/macro';

const Container = tw.div`flex flex-col flex-1 p-2 gap-2 bg-yellow-200`
const ControlRow = tw.div`flex gap-2 items-center`
const ControlRowText = tw.span`italic text-gray-600 select-none`

const Passage = () => {
  const setPassage = useSetRecoilState(state.passage);

  const onInput = useCallback(
    (ev) => {
      const eventTargetValue = ev.target?.value;

      if (eventTargetValue) setPassage(eventTargetValue);
    },
    [setPassage],
  );

  return (
    <Container>
      <ControlRow>
        <ControlRowText>Enter passage to read below, and then,</ControlRowText>
        <StartReadingButton />
      </ControlRow>
      <TextArea onInput={onInput} />
    </Container>
  );
};

export default Passage;
