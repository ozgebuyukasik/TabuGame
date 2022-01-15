import { useState } from "react";
import GamePage from "../GamePage/GamePage";
import WelcomePage from "../WelcomePage/WelcomePage";

function Homepage() {
  const [gameStatus, setGameStatus] = useState(false);
  const [groups, setGroups] = useState();
  return gameStatus ? <GamePage groupInfo={groups} /> : <WelcomePage setGameStatus={setGameStatus} setGroups={setGroups}/>;
}
export default Homepage;
