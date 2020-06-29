import React, {useState} from 'react';
import './App.css'

function App() {

  const [squares, setSquares] = useState(['','','','','','','','','']);
  const [playerTurn, setPlayerTurn] = useState('X');
  const [xPlayerScore, setXPlayerScore] = useState(0);
  const [oPlayerScore, setOPlayerScore] = useState(0);
  const [catScore, setCatStore] = useState(0);

  const squareClicked = (index) =>{
    let arr = [...squares];

    if(arr[index] === ('X')){
      alert('The other player already placed an X there!');
    }else if(arr[index] === ('O')){
      alert('The other player already placed an O there!');
    }else{
      if(playerTurn === 'X'){
        setPlayerTurn('O');
      }else{
        setPlayerTurn('X')
      }
      arr[index] = playerTurn;
      setSquares(arr);
    }

    checkForWinners(arr);
    checkForDraw(arr);
  }

  const checkForDraw = (arr) => {
    let count = 0;
    arr.forEach(element => {
      if(element === 'X'){
        count++;
      }else if(element === 'O'){
        count++;
      }
    });

    if(count === 9){
      alert("This game is a draw!");
      setSquares(['','','','','','','','','']);
      setPlayerTurn('X');
      setCatStore(catScore => catScore + 1);
    }
  }

  const checkForWinners = (arr) => {
    let winningCombinations = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    
    for(let i=0; i < winningCombinations.length; i++){
      let winningRow = winningCombinations[i];
      let p1 = winningRow[0];
      let p2 = winningRow[1];
      let p3 = winningRow[2];
      if(arr[p1] !== '' && arr[p1] === arr[p2] && arr[p2] === arr[p3] && arr[p3] === arr[p1]){
        if(playerTurn === 'X'){
          setXPlayerScore(xPlayerScore => xPlayerScore + 1);
        }else{
          setOPlayerScore(oPlayerScore => oPlayerScore + 1);
        }
        alert(`You won player ${playerTurn}!`);
        setSquares(['','','','','','','','','']);
        setPlayerTurn('X');
      }
    }
  }

  return (
    <div className="App">
      <div className='title'>
        <h1>&#128073; Tic Tac Toe &#128072;</h1>
      </div>
      <div className="board">
        {squares.map((square, index) => {
          return (<div key = {index} onClick={() => squareClicked(index)} className="squares"><h1>{square}</h1></div>)
        })}
      </div>
      <div className='scorecard'>
        <h3>Player &#x274C; Score: {xPlayerScore}</h3>
        <h3>Player &#11093; Score: {oPlayerScore}</h3>
        <h3>Player &#x1F431; Score (Draw): {catScore}</h3>
      </div>
    </div>
  );
}

export default App;
