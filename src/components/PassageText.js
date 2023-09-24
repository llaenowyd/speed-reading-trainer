import React from 'react';
import { useRecoilState } from 'recoil';
import TextArea from 'components/TextArea';
import state from 'state'

const PassageText = () => {
    const [passage, setPassage] = useRecoilState(state.passage)

    return <TextArea text={passage} onChange={setPassage} />
}

export default PassageText
