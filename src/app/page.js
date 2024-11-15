"use client"
import Image from "next/image";

//import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {
   
  const myset = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6] ]
  const [turn , setTurn] = useState("Player1");
  const [winner, setWinner] = useState(false)
  
  
  
  const fillbox = (a)=>{

    if(document.getElementById(a).innerHTML != "O" && document.getElementById(a).innerHTML!="X"){

      if(turn == "Player1"){
        document.getElementById(a).innerHTML="O";
        check_winner();
        setTurn("Player2")
      }
      else{
        document.getElementById(a).innerHTML="X";
        var a=check_winner();
        console.log(a)
      setTurn("Player1")
      }

    }
    
  }

  const check_winner=()=>{
    
   var boxes = document.querySelectorAll(".box")
    for (var i in myset) {
      var subArray = myset[i];

      var position1=boxes[subArray[0]].innerHTML
      var position2=boxes[subArray[1]].innerHTML
      var position3=boxes[subArray[2]].innerHTML

      console.log(position1,position2,position3)
      if(position1===position2 && position2===position3 && position1!=" "){
        setWinner(true);
        console.log("winner")
        return(position1)
      }
        // console.log(i[0],i[1],i[2])   not working
    }
  }

  return (<>
  
   <h1>Tic tac toe</h1>
  <div id="con">
   {winner && <div id="winner"> winner is {turn} </div>}
  <div className="box" id="box0" onClick={()=>fillbox("box0")}> </div>
  <div className="box" id="box1" onClick={()=>fillbox("box1")}> </div>
  <div className="box" id="box2" onClick={()=>fillbox("box2")}> </div>
  <div className="box" id="box3" onClick={()=>fillbox("box3")}> </div>
  <div className="box" id="box4" onClick={()=>fillbox("box4")}> </div>
  <div className="box" id="box5" onClick={()=>fillbox("box5")}> </div>
  <div className="box" id="box6" onClick={()=>fillbox("box6")}> </div>
  <div className="box" id="box7" onClick={()=>fillbox("box7")}> </div>
  <div className="box" id="box8" onClick={()=>fillbox("box8")}> </div>
  </div>

  
  </>
  
  );
}
