import { useEffect, useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Words from "../Words/Words";
import GroupCard from "../GroupCard/GroupCard";
import StyledButton from "../StyledComponents/StyledComponents";
import Counter from "../Counter/Counter";
import "./GamePage.css";

function GamePage({ groupInfo, winner }) {
  const [uniqueWordCount, setUniqueWordCount] = useState(1);
  const [scoreOfGroupOne, setScoreOfGroupOne] = useState(0);
  const [scoreOfGroupTwo, setScoreOfGroupTwo] = useState(0);
  const [selectedWordIndex, setSelectedWordIndex] = useState(
    Math.floor(Math.random() * uniqueWordCount)
  );
  const [isFirstGroupCurrent, setIsFirstGroupCurrent] = useState(true);
  const [countDown, setCountDown] = useState(10);

  function showAlertMessage(){
    confirmAlert({
      title: "Confirm",
      message: `${groupInfo.groupOne}: ${scoreOfGroupOne} vs. ${groupInfo.groupTwo} ${scoreOfGroupTwo}`
    })
  };
  function generateRandomNumber() {
    console.log(uniqueWordCount);
    const randomNumber = Math.floor(Math.random() * uniqueWordCount);
    console.log(randomNumber);
    return randomNumber;
  }
  useEffect(() => {
    setSelectedWordIndex(generateRandomNumber());
  }, [uniqueWordCount]);

  useEffect(() => {
    if (countDown === 0) {
      setIsFirstGroupCurrent(!isFirstGroupCurrent);
      setCountDown(10);
    }
  }, [countDown]);

  useEffect(() => {
    let unmounted = true;
    if (unmounted && scoreOfGroupOne === 20) {
      winner(groupInfo.groupOne);
    }
    if (unmounted && scoreOfGroupTwo === 20) {
      winner(groupInfo.groupTwo);
    }
    return () => {
      unmounted = false;
      winner(null);
    };
  }, [scoreOfGroupOne, scoreOfGroupTwo]);

  function handleClick(e) {
    setSelectedWordIndex(generateRandomNumber());
    if (isFirstGroupCurrent) {
      setScoreOfGroupOne((prevScore) => prevScore + parseInt(e.target.value));
    } else {
      setScoreOfGroupTwo((prevScore) => prevScore + parseInt(e.target.value));
    }
  }
  return (
    <div className="game-container">
      <div className="group-card">
        <GroupCard groupName={groupInfo.groupOne} score={scoreOfGroupOne} />
      </div>
      <div className="playground">
        <Counter seconds={countDown} setSeconds={setCountDown} />
        {selectedWordIndex !== NaN && (
          <Words
            setUniqueWordCount={setUniqueWordCount}
            selectedWord={selectedWordIndex}
          />
        )}
        <div className="button-area">
          <StyledButton bgColor="#ae2012" value={-1} onClick={handleClick}>
            Tabu
          </StyledButton>
          <StyledButton bgColor="#dee2e6" value={0} onClick={handleClick}>
            Pas
          </StyledButton>
          <StyledButton bgColor="#38b000" value={1} onClick={handleClick}>
            Correct
          </StyledButton>
        </div>
      </div>
      <div className="group-card">
        <GroupCard groupName={groupInfo.groupTwo} score={scoreOfGroupTwo} />
      </div>
    </div>
  );
}
export default GamePage;
