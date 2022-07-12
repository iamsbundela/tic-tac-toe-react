import React, {useState} from 'react'
import "./App.css" 
import Cell from './components/Cell';
const boardArray = new Array(9).fill('empty');

const App = () => {

  const [winner, setWinner] = useState('');
  const [isGameRunning, setGameRunning] = useState(true);
  const [isCrossTurn, setisCrossTurn] = useState(false);

  const checkIsWinner = () => {
    // Horizontal Winning Cases
    if(boardArray[0] === boardArray[1] && boardArray[0] === boardArray[2] && boardArray[0] !== 'empty'){
      setWinner(`${boardArray[0]} wins`);
      console.log(`${boardArray[0]} wins`);
    } else if(boardArray[3] === boardArray[4] && boardArray[3] === boardArray[5] && boardArray[3] !== 'empty'){
      setWinner(`${boardArray[3]} wins`);
      console.log(`${boardArray[3]} wins`);
    } else if(boardArray[6] === boardArray[7] && boardArray[6] === boardArray[8] && boardArray[6] !== 'empty'){
      setWinner(`${boardArray[6]} wins`);
      console.log(`${boardArray[6]} wins`);
    }
    // Vertical Winning Cases
    else if(boardArray[0] === boardArray[3] && boardArray[0] === boardArray[6] && boardArray[0] !== 'empty'){
      setWinner(`${boardArray[0]} wins`);
      console.log(`${boardArray[0]} wins`);
    } else if(boardArray[1] === boardArray[4] && boardArray[1] === boardArray[7] && boardArray[1] !== 'empty'){
      setWinner(`${boardArray[1]} wins`);
      console.log(`${boardArray[1]} wins`);
    } else if(boardArray[2] === boardArray[5] && boardArray[2] === boardArray[8] && boardArray[2] !== 'empty'){
      setWinner(`${boardArray[2]} wins`);
      console.log(`${boardArray[2]} wins`);
    }
    // Diagonal Winning Cases
    else if(boardArray[0] === boardArray[4] && boardArray[0] === boardArray[8] && boardArray[0] !== 'empty'){
      setWinner(`${boardArray[0]} wins`);
      console.log(`${boardArray[0]} wins`);
    } else if(boardArray[2] === boardArray[4] && boardArray[2] === boardArray[6] && boardArray[2] !== 'empty'){
      setWinner(`${boardArray[2]} wins`);
      console.log(`${boardArray[2]} wins`);
    }else{
      if(!boardArray.includes('empty')){
        setWinner('Match Draw');
        return alert('Match draw, Please Restart');
      }
    }
  }

  const restartMatch = () => {
    setisCrossTurn(false);
    setGameRunning(!isGameRunning);
    setWinner('');
    boardArray.fill('empty', 0, 9);
  }

  const cellClick = (index) => {
    // Checking if selected cell is empty or not
    if(winner){
      return alert('Game is finished please Restart');
    }
    if(boardArray[index] === 'empty'){
      // Checking the turn of player
      boardArray[index] = isCrossTurn ? 'X': 'O';
      setisCrossTurn(!isCrossTurn);
    } else {
      return alert('Move not allowed');
    }

    checkIsWinner();
  };

  return (
    <div className='body'>
      <div className='announceContainer'>
        <h1 className='announceText'>{winner ? winner : isCrossTurn ? 'Cross Turn': 'Circle Turn'}</h1>
        <button onClick={() => restartMatch()} className='restartButton'>Restart</button>

      </div>
      <div className='board'>
        {boardArray.map((e, i) => <div key={i.toString()} onClick={() => cellClick(i)} className='cell'> <Cell value={e} /></div>)}
      </div>
      
    </div>
  )
}

export default App;