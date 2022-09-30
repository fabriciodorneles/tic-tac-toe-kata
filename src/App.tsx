import { useState } from 'react';
import './App.css';

function App() {
  const [gameState, setGameState] = useState([
    ' ',' ',' ',
    ' ',' ',' ',
    ' ',' ',' '
  ])

  const [player, setPlayer] = useState('1');
  const [winner, setWinner] = useState(null);

  const getWinner = (currSt: Array<string>):any => {
    if(
      (currSt[0] === 'X' && currSt[3] === 'X' && currSt[6] === 'X') ||
      (currSt[1] === 'X' && currSt[4] === 'X' && currSt[7] === 'X') ||
      (currSt[2] === 'X' && currSt[5] === 'X' && currSt[8] === 'X') ||
      (currSt[0] === 'X' && currSt[1] === 'X' && currSt[2] === 'X') ||
      (currSt[3] === 'X' && currSt[4] === 'X' && currSt[5] === 'X') ||
      (currSt[6] === 'X' && currSt[7] === 'X' && currSt[8] === 'X') ||
      (currSt[2] === 'X' && currSt[4] === 'X' && currSt[6] === 'X') ||
      (currSt[0] === 'X' && currSt[4] === 'X' && currSt[8] === 'X')) 
      {
        return 'X'
      }
    if(
      (currSt[0] === 'O' && currSt[3] === 'O' && currSt[6] === 'O') ||
      (currSt[1] === 'O' && currSt[4] === 'O' && currSt[7] === 'O') ||
      (currSt[2] === 'O' && currSt[5] === 'O' && currSt[8] === 'O') ||
      (currSt[0] === 'O' && currSt[1] === 'O' && currSt[2] === 'O') ||
      (currSt[3] === 'O' && currSt[4] === 'O' && currSt[5] === 'O') ||
      (currSt[6] === 'O' && currSt[7] === 'O' && currSt[8] === 'O') ||
      (currSt[2] === 'O' && currSt[4] === 'O' && currSt[6] === 'O') ||
      (currSt[0] === 'O' && currSt[4] === 'O' && currSt[8] === 'O')) 
      {
        return 'O'
      }

      return null
  };

  const handleClick = (index: number) => {
    if(!winner){
      const tempState = gameState;
      tempState[index] = player === '2'?  'O' : 'X';
      setWinner(getWinner(tempState))
      setPlayer(player === '1' ? '2' : '1');
      setGameState([...tempState]);
    }
  }

  const handlePlayAgain = () => {
    setGameState([
      ' ',' ',' ',
      ' ',' ',' ',
      ' ',' ',' '
    ]);
    setWinner(null);
    setPlayer('1');
  };

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <h3>Please go player: {player}</h3>
      <div className="gameBoard">
        {
          gameState.map((item,index) => (
            <button className="gameCell" onClick={() => handleClick(index)}>
              {item}
            </button>
          ))
        }
      </div>
      <div className='controlRow'>
        {winner && (
          <>
          <span> Winner is {winner} !!!</span>
          <button className='playAgain' onClick={() => handlePlayAgain()}>
            PLAY AGAIN
          </button>
          </>
        )}
      </div>
    </div>
  )
}

export default App
