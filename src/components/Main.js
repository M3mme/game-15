import React, { useState } from "react";
import SlidingTilePuzzle from "react-sliding-tile-puzzle";
import { Button, Segment, Navbar } from "semantic-ui-react";
import styles from "../styles/Main.module.css";
import { Link } from "react-router-dom";
import { firebase } from "./Axios";
import { v4 as uuidv4 } from "uuid";

function Main(props) {
  const [solvePuzzle, setSolvePuzzle] = useState(false);
  const [newPuzzle, setNewPuzzle] = useState(false);
  const [error, setError] = useState(false);
  const gameID = uuidv4();
  

  const handleClickSolvePuzzle = () => {
    setSolvePuzzle(props.solvePuzzle);
  };

  const handleClickNewPuzzle = () => {
    setNewPuzzle(props.newPuzzle);
  };

  const saveGame = async () => {
    try {
      const data = await firebase.post("", {
        ID: gameID
      });
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  return (
    <div className={styles.main}>
      <nav className={styles.navbar}>Complete the puzzle</nav>
      <Segment.Group>
        <Segment.Group horizontal>
          <Segment.Group vertical="true">
            <Segment>
              <Button fluid onClick={handleClickNewPuzzle}>
                New Puzzle
              </Button>
            </Segment>
            <Segment>
              <Button fluid onClick={handleClickSolvePuzzle}>
                Solve Puzzle
              </Button>
              <Link to="/history">
                <Segment>
                  <Button fluid>Score History</Button>
                </Segment>
              </Link>
              <Segment>
                <Button fluid onClick={saveGame}>
                  Save Game
                </Button>
              </Segment>
            </Segment>
          </Segment.Group>

          <Segment>
            <SlidingTilePuzzle
              solvePuzzle={solvePuzzle}
              newPuzzle={newPuzzle}
              maxIterations={300}
              image={
                "https://th.bing.com/th/id/OIP.brxMCckEREC0aly9gLdhzAHaEo?w=299&h=186&c=7&o=5&pid=1.7"
              }
              size={130}
            />
          </Segment>
        </Segment.Group>
      </Segment.Group>
    </div>
  );
}


export default Main;
