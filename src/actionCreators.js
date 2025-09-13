const setWords = (word) => ({
  type: "setWords",
  payload: word,
});

const setShowHeader = (show) => ({
  type: "setShowHeader",
  payload: show,
});

export { setWords, setShowHeader };
