import React from "react";
import { useState } from "react";
import  './App.css';


function Square({value,onSquareClick}){
 return(
       <button className="square" onClick={onSquareClick}>{value}</button>
       );
}

 export default function Board(){
   const[sttsX,setSttsX]=useState(false);//Check for the status of the squares of the board for deciding what comes next :"X" or "O". 
   const[squares,setSquares]=useState(Array(9).fill(null));


   function handleclick(i){
     if(CalWinner(squares)||squares[i]){//Check if the game is over or any value is already given to the board's square
      return null; 
    }
    const nextsquare=squares.slice();//Copying the board state to "nextsquares" for updating "squares" 
    
    if(!sttsX){
      nextsquare[i]="X";
    }
    else
    {
      nextsquare[i]="O";
    }

    setSquares(nextsquare);//Updating the board values in squares
    setSttsX(!sttsX);//Updating the board status of X i.e. which square element contains X  
  }

  
      
  const winner = CalWinner(squares);
  var status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (!sttsX ? 'X' : 'O');
  }
  return(
    <div>
        <div className="status">{status}</div>
        <div className="board-row">
          <Square value = {squares[0]} onSquareClick={()=>handleclick(0)}/>
          <Square value = {squares[1]} onSquareClick={()=>handleclick(1)}/>
          <Square value = {squares[2]} onSquareClick={()=>handleclick(2)}/>
        </div>
        <div className="board-row">
          <Square value = {squares[3]} onSquareClick={()=>handleclick(3)}/>
          <Square value = {squares[4]} onSquareClick={()=>handleclick(4)}/>
          <Square value = {squares[5]} onSquareClick={()=>handleclick(5)}/>
        </div>
        <div className="board-row">
          <Square value = {squares[6]} onSquareClick={()=>handleclick(6)}/>
          <Square value = {squares[7]} onSquareClick={()=>handleclick(7)}/>
          <Square value = {squares[8]} onSquareClick={()=>handleclick(8)}/>
        </div>
    </div>
  );
}

function CalWinner(squares){
  //remember the parameter passed should be the array itself which should not be destructured.
  const match = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for(var i = 0;i<match.length;i++){
      const [a,b,c] = match[i];
      if(squares[a]&&squares[a]===squares[b]&&squares[a]===squares[c]){
        return squares[a];
      }
    }
  return null;
}


