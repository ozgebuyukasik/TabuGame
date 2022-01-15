import { useState, useEffect } from "react";
import words from "../../assets/files/words.json";

function Words() {
  const wordArray = Object.keys(words);
  const [randomNumber, setRandomNumber] = useState();
  const [selectedWord, setSelectedWord] = useState();

  //TODO: implement random word pick mechanism
  return <div className="words-container">Words</div>;
}
export default Words;
