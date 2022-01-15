import { useState, useEffect } from "react";
import words from "../../assets/files/words.json";

function Words({ setUniqueWordCount, selectedWord }) {
  const [wordArray, setWordArray] = useState({ array: [] });

  useEffect(() => {
    const keys = Object.keys(words);
    setWordArray({ ...wordArray, array: keys });
    console.log(wordArray);
  }, []);

  useEffect(() => {
    setUniqueWordCount(wordArray.array.length);
  }, [wordArray]);

  useEffect(() => {
    console.log(
      wordArray.array[selectedWord],
      words[wordArray.array[selectedWord]]
    );
    wordArray.array.splice(selectedWord, 1);
    console.log(wordArray);
  }, [selectedWord]);

  return (
    <div className="word-container">
      <p className="word-value">{wordArray.array[selectedWord]}</p>
      {words[wordArray.array[selectedWord]] && words[wordArray.array[selectedWord]].map((forbidden) => (
        <p key={forbidden} className="forbidden-word">{forbidden}</p>
      ))}
    </div>
  );
}
export default Words;
