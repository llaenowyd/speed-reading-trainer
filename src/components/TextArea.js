import React, { useEffect, useRef } from 'react'
import tw from 'twin.macro';
import 'styled-components/macro';

const Container = tw.div`p-2 h-full`
const StyledTextarea = tw.textarea`outline h-full w-full`

const TextArea = ({onInput}) => {
    const textAreaRef = useRef()

    useEffect(() => {
      if (textAreaRef.current) {
        textAreaRef.current.focus()
      }
    }, [textAreaRef])

    return (
      <Container>
        <StyledTextarea ref={textAreaRef} onInput={onInput} />
      </Container>
    )
}

export default TextArea
