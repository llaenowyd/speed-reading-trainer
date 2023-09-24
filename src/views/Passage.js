import React from "react";
import tw from 'twin.macro';
import PassageText from '../components/PassageText'
import StartReadingButton from '../components/StartReadingButton'
import 'styled-components/macro';

const Container = tw.div`flex flex-col flex-1 p-2 gap-2 bg-yellow-200`
const ControlRow = tw.div`flex gap-2 items-center`
const ControlRowText = tw.span`italic text-gray-600 select-none`

const Passage = () => {
  return (
    <Container>
      <ControlRow>
        <ControlRowText>Enter passage to read below, and then,</ControlRowText>
        <StartReadingButton />
      </ControlRow>
      <PassageText />
    </Container>
  );
};

export default Passage;
