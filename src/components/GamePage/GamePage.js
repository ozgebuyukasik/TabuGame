import Words from "../Words/Words";
import GroupCard from "../GroupCard/GroupCard";
import Counter from "../Counter/Counter";
import "./GamePage.css";

function GamePage({ groupInfo }) {
  return (
    <div className="game-container">
      <div className="group-card">
        <GroupCard groupName={groupInfo.groupOne} />
      </div>
      <div className="playground">
        <Counter />
        <Words />
        <div className="button-area">
            
        </div>
      </div>
      <div className="group-card">
        <GroupCard groupName={groupInfo.groupTwo} />
      </div>
    </div>
  );
}
export default GamePage;
