import React from "react";
import { useRecoilValue } from "recoil";
import Frame from "components/Frame";
import Header from "components/Header";
import state from "state";
import PastePassage from "views/PastePassage";
import WordsRunner from "views/WordsRunner";

function App() {
  const passage = useRecoilValue(state.passage);

  return (
    <Frame>
      <Header />
      {"" === passage ? <PastePassage /> : <WordsRunner />}
    </Frame>
  );
}

export default App;
