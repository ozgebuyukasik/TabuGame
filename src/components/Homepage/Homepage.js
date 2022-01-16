import { useEffect, useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import GamePage from "../GamePage/GamePage";
import WelcomePage from "../WelcomePage/WelcomePage";

function Homepage() {
  const [gameStatus, setGameStatus] = useState(false);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    let unmounted = true;
    if (unmounted && winner !== null) {
      setGameStatus(false);
      confirmAlert({
        title: `Congrats!`,
        message: `${winner} is winner!`,
        buttons: [
          {
            label: "Play a New Game",
            onClick: () => {},
          },
        ],
        closeOnClickOutside: false,
      });
    }
    return () => {
      unmounted = false;
    };
  }, [winner]);

  const [groups, setGroups] = useState();
  return gameStatus ? (
    <GamePage groupInfo={groups} winner={setWinner} />
  ) : (
    <WelcomePage setGameStatus={setGameStatus} setGroups={setGroups} />
  );
}
export default Homepage;
