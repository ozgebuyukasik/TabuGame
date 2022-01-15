import { useState } from "react";
import Words from "../Words/Words";
import GroupCard from "../GroupCard/GroupCard";
import StyledButton from "../StyledComponents/StyledComponents";
import Counter from "../Counter/Counter";
import "./GamePage.css";

function GamePage({ groupInfo }) {
  const [uniqueWordCount, setUniqueWordCount] = useState();
  const [selectedWordIndex, setSelectedWordIndex] = useState(
    Math.floor(Math.random() * uniqueWordCount)
  );
  console.log(uniqueWordCount);
  function handleClick() {
    const randomNumber = Math.floor(Math.random() * uniqueWordCount);
    console.log(randomNumber);
    setSelectedWordIndex(randomNumber);
  }
  return (
    <div className="game-container">
      <div className="group-card">
        <GroupCard groupName={groupInfo.groupOne} />
      </div>
      <div className="playground">
        <Counter />
        <Words
          setUniqueWordCount={setUniqueWordCount}
          selectedWord={selectedWordIndex}
        />
        <div className="button-area">
          <StyledButton bgColor="#ae2012" onClick={handleClick}>
            Tabu
          </StyledButton>
          <StyledButton bgColor="#dee2e6" onClick={handleClick}>
            Pas
          </StyledButton>
          <StyledButton bgColor="#38b000" onClick={handleClick}>
            Correct
          </StyledButton>
        </div>
      </div>
      <div className="group-card">
        <GroupCard groupName={groupInfo.groupTwo} />
      </div>
    </div>
  );
}
export default GamePage;
