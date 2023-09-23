import { atom, selector } from "recoil";

const viewName = atom({
  key: "viewName",
  default: "passage"
})

const passage = atom({
  key: "passage",
  default: "https://en.wikipedia.org/wiki/Speed_reading",
});

const words = selector({
  key: "words",
  get: ({ get }) => {
    const passageState = get(passage);
    if (!passageState) return [];
    else return passageState.split(/\s+/);
  },
});

const offset = atom({
  key: "offset",
  default: 0,
});

const word = selector({
  key: "word",
  get: ({ get }) => {
    const wordsState = get(words);
    const offsetState = get(offset);

    if (wordsState.length === 0) return "";

    if (offsetState >= wordsState.length)
      return wordsState[wordsState.length - 1];

    return wordsState[offsetState];
  },
});

const isPlaying = atom({
  key: "isPlaying",
  default: false,
});

const wpm = atom({
  key: "wpm",
  default: 300,
});

const state = {
  viewName,
  passage,
  words,
  offset,
  isPlaying,
  word,
  wpm,
};

export default state;
