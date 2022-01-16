import { useEffect, useState } from "react";
import GamePage from "../GamePage/GamePage";
import WelcomePage from "../WelcomePage/WelcomePage";

function Homepage() {
  const [gameStatus, setGameStatus] = useState(false);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    console.log(winner);
    if (winner !== null) {
      setGameStatus(false);
    }
  }, [winner]);

  const [groups, setGroups] = useState();
  return gameStatus ? (
    <GamePage groupInfo={groups} winner={setWinner} />
  ) : (
    <WelcomePage setGameStatus={setGameStatus} setGroups={setGroups} />
  );
}
export default Homepage;
