import { useState } from 'react';
import './App.css';

const App = () => {
    const [gameBoard, setGameBoard] = useState([
        '','','',
        '','','',
        '','','',
    ]);

    const [player, setPlayer] = useState('1');
    const [winner, setWinner] = useState(null);

    const handleCellClick = (index:number) => {
        if(!winner){
            const tempGameBoard = gameBoard;
            tempGameBoard[index] = player === '1' ? 'X' : 'O';
            setPlayer(player === '1' ? '2' : '1');
            setWinner(verifyWinner(tempGameBoard))
            setGameBoard([...tempGameBoard]);
        }
    }

    const handleResetGame = () => {
        setGameBoard([
            '','','',
            '','','',
            '','','',
        ]);
        setPlayer('1');
        setWinner(null);
    };

    const verifyWinner = (tempGB : Array<string>): any => {
        if(
            (tempGB[0] === 'X' && tempGB[1] === 'X' && tempGB[2] === 'X' ) ||
            (tempGB[3] === 'X' && tempGB[4] === 'X' && tempGB[5] === 'X' ) ||
            (tempGB[6] === 'X' && tempGB[7] === 'X' && tempGB[8] === 'X' ) ||
            (tempGB[0] === 'X' && tempGB[3] === 'X' && tempGB[6] === 'X' ) ||
            (tempGB[1] === 'X' && tempGB[4] === 'X' && tempGB[7] === 'X' ) ||
            (tempGB[2] === 'X' && tempGB[5] === 'X' && tempGB[8] === 'X' ) ||
            (tempGB[0] === 'X' && tempGB[4] === 'X' && tempGB[8] === 'X' ) ||
            (tempGB[2] === 'X' && tempGB[4] === 'X' && tempGB[6] === 'X' )
        ) 
        {
            return 'X';
        }
        if(
            (tempGB[0] === 'O' && tempGB[1] === 'O' && tempGB[2] === 'O' ) ||
            (tempGB[3] === 'O' && tempGB[4] === 'O' && tempGB[5] === 'O' ) ||
            (tempGB[6] === 'O' && tempGB[7] === 'O' && tempGB[8] === 'O' ) ||
            (tempGB[0] === 'O' && tempGB[3] === 'O' && tempGB[6] === 'O' ) ||
            (tempGB[1] === 'O' && tempGB[4] === 'O' && tempGB[7] === 'O' ) ||
            (tempGB[2] === 'O' && tempGB[5] === 'O' && tempGB[8] === 'O' ) ||
            (tempGB[0] === 'O' && tempGB[4] === 'O' && tempGB[8] === 'O' ) ||
            (tempGB[2] === 'O' && tempGB[4] === 'O' && tempGB[6] === 'O' )
        ) 
        {
            return 'O';
        }
        return null;
    }

    return (
        <div className="mainContainer">
            <h1>TIC TAC TOE</h1>
            <div className='gameBoard'>
                {gameBoard.map((item, index) => (
                    <button 
                        className='gameCell'
                        onClick={() => handleCellClick(index)}
                    >
                        {item}
                    </button>
                ))}
            </div>
            <div className='gameControl'>
            {winner && (
                <>
                    <div>Winner is {winner}!!!</div>
                    <button onClick={() => handleResetGame()}>
                        PLAY AGAIN
                    </button>
                </>
                    )}
            </div>
        </div>
    );

};
export default App;
