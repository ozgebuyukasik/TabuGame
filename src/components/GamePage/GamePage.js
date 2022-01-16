import { useEffect, useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Words from "../Words/Words";
import GroupCard from "../GroupCard/GroupCard";
import StyledButton from "../StyledComponents/StyledComponents";
import Counter from "../Counter/Counter";
import "./GamePage.css";

function GamePage({ groupInfo, winner }) {
  const TIME = 60;
  const [uniqueWordCount, setUniqueWordCount] = useState();
  const [scoreOfGroupOne, setScoreOfGroupOne] = useState(0);
  const [scoreOfGroupTwo, setScoreOfGroupTwo] = useState(0);
  const [selectedWordIndex, setSelectedWordIndex] = useState(
    Math.floor(Math.random() * uniqueWordCount)
  );
  const [isFirstGroup, setIsFirstGroup] = useState(true);
  const [countDown, setCountDown] = useState(TIME);

  function showCountDownMessage() {
    confirmAlert({
      title: `${
        isFirstGroup ? groupInfo.groupTwo : groupInfo.groupOne
      }' s Turn!`,
      message: `${groupInfo.groupOne}: ${scoreOfGroupOne} vs. ${groupInfo.groupTwo}: ${scoreOfGroupTwo}`,
      buttons: [
        {
          label: "Continue",
          onClick: () => setCountDown(TIME),
        },
      ],
      closeOnClickOutside: false,
    });
  }

  function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * uniqueWordCount);
    return randomNumber;
  }
  useEffect(() => {
    let unmounted = true;
    if (unmounted) {
      setSelectedWordIndex(generateRandomNumber());
    }
    return () => {
      unmounted = false;
    };
  }, [uniqueWordCount]);

  useEffect(() => {
    let unmounted = true;
    if (unmounted && countDown === 0) {
      setUniqueWordCount(uniqueWordCount - 1);
      setIsFirstGroup(!isFirstGroup);
      showCountDownMessage();
    }
    return () => {
      unmounted = false;
    };
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
    setUniqueWordCount(uniqueWordCount - 1);
    if (isFirstGroup) {
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
