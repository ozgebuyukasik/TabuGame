import { useState } from "react";

function GroupCard({ groupName, updateScore }) {
  const [groupScore, setGroupScore] = useState(0);
  return (
    <div className="gorup-container">
      <h5 className="group-name">{groupName}</h5>
      <p className="group-score">{groupScore}</p>
    </div>
  );
}
export default GroupCard;
