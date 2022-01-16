import { useState, useEffect } from "react";
import words from "../../assets/files/words.json";
import "./Words.css";

function Words({ setUniqueWordCount, selectedWord }) {
  const [wordArray, setWordArray] = useState({ array: [] });
  const [currentWord, setCurrentWord] = useState();

  useEffect(() => {
    const keys = Object.keys(words);
    setWordArray({ ...wordArray, array: keys });
    console.log(wordArray);
  }, []);

  useEffect(() => {
    setUniqueWordCount(wordArray.array.length);
  }, [wordArray.array]);

  useEffect(() => {
    console.log(
      wordArray.array[selectedWord],
      words[wordArray.array[selectedWord]]
    );
    wordArray.array.splice(selectedWord, 1);
    console.log(wordArray);
    setCurrentWord(words[wordArray.array[selectedWord]])
  }, [selectedWord]);

  return (
    <div className="word-container">
      <p className="word-value">{wordArray.array[selectedWord]}</p>
      {currentWord !== undefined &&
        currentWord.map((forbidden) => (
          <p key={`${currentWord} ${forbidden}`} className="forbidden-word">
            {forbidden}
          </p>
        ))}
    </div>
  );
}
export default Words;
