import { atom, selector } from "recoil";

const passage = atom({
  key: "passage",
  default: "",
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
  passage,
  words,
  offset,
  isPlaying,
  word,
  wpm,
};

export default state;
