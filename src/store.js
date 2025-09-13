import { createStore } from "redux";

const initialState = {
  words: [],
  showHeader: true,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "setWords":
      return {
        ...state,
        words: [...state.words, payload],
      };
    case "setShowHeader":
      return {
        ...state,
        showHeader: payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
