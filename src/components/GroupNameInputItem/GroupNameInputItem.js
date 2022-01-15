import "./GroupNameInputItem.css";

function GroupNameInputItem({ groupName, setGroupName }) {
  return (
    <div className="group-name-input-item-container">
      <input
        onChange={(event) => setGroupName(event.target.value)}
        className="group-name-input-item"
        placeholder={groupName}
      />
    </div>
  );
}
export default GroupNameInputItem;
