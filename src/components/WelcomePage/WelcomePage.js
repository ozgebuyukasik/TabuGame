import { useState } from "react";
import GroupNameInputItem from "../GroupNameInputItem/GroupNameInputItem";
import "./WelcomePage.css";

function WelcomePage({setGameStatus, setGroups}) {
  const [nameOfFirstGroup, setNameOfFirstGroup] = useState("Group 1");
  const [nameOfSecondGroup, setNameOfSecondGroup] = useState("Group 2");
  function startTheGame(){
      setGameStatus(true)
      setGroups({
          "groupOne": nameOfFirstGroup,
          "groupTwo": nameOfSecondGroup
      })
  }
  return (
    <div className="welcome-page">
      <div className="container">
        <h2 className="welcome-title">Are you ready to be a word master?</h2>
        <h4 className="welcome-message">
          First you need to enter a name for your group!
        </h4>
        <GroupNameInputItem
          groupName={nameOfFirstGroup}
          setGroupName={setNameOfFirstGroup}
        />
        <GroupNameInputItem
          groupName={nameOfSecondGroup}
          setGroupName={setNameOfSecondGroup}
        />
        <p className="group-names">
          {nameOfFirstGroup} vs. {nameOfSecondGroup}
        </p>
        <h4 className="start-message">
          Now let's get started!
        </h4>
        <button className="start-button" onClick={startTheGame}>Start!</button>
      </div>
    </div>
  );
}
export default WelcomePage;
