import React from "react";
import { useRecoilValue } from "recoil";
import Frame from "./components/Frame";
import Header from "./components/Header";
import { VIEW_NAME_PASSAGE } from './constants'
import state from "./state";
import Passage from "./views/Passage";
import WordsRunner from "./views/WordsRunner";

function App() {
  const viewName = useRecoilValue(state.viewName);

  return (
    <Frame>
      <Header />
      {VIEW_NAME_PASSAGE === viewName ? <Passage /> : <WordsRunner />}
    </Frame>
  );
}

export default App;
