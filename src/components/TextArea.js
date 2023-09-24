import React, { useCallback, useEffect, useRef } from "react";
import tw from "twin.macro";
import "styled-components/macro";

const Container = tw.div`p-2 h-full`;
const StyledTextarea = tw.textarea`outline outline-[1px] h-full w-full p-1`;

const TextArea = ({ onChange, text }) => {
  const textAreaRef = useRef();

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  }, [textAreaRef]);

  const onInput = useCallback(
    (ev) => {
      const eventTargetValue = ev.target?.value;

      if (eventTargetValue) onChange(eventTargetValue);
    },
    [onChange],
  );

  return (
    <Container>
      <StyledTextarea ref={textAreaRef} onInput={onInput}>
        {text}
      </StyledTextarea>
    </Container>
  );
};

export default TextArea;
