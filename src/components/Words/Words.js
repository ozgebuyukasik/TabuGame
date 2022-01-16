import { useState, useEffect } from "react";
import words from "../../assets/files/words.json";
import "./Words.css";

function Words({ setUniqueWordCount, selectedWord }) {
  const [wordArray, setWordArray] = useState({ array: [] });
  const [currentWord, setCurrentWord] = useState();

  useEffect(() => {
    const keys = Object.keys(words);
    setWordArray({ ...wordArray, array: keys });
  }, []);

  useEffect(() => {
    setUniqueWordCount(wordArray.array.length);
  }, [wordArray.array]);

  useEffect(() => {
    setCurrentWord(words[wordArray.array[selectedWord]])
    wordArray.array.splice(selectedWord, 1);
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
