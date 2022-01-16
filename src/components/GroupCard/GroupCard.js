import "./GroupCard.css"

function GroupCard({ groupName, score }) {

  return (
    <div className="group-container">
      <h5 className="group-name">{groupName}</h5>
      <p className="group-score">{score}</p>
    </div>
  );
}
export default GroupCard;
