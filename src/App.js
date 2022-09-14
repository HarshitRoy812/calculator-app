import React from 'react';
import {Data} from './Data';

export default function App()
{

  const [num,setNum] = React.useState("0");

  function calculate(val)
  {
    if (num === "0")
    {
      setNum("");
    }
    setNum((prevNum) => prevNum + val);
  }

  function clear()
  {
    setNum("0");
  }

  function evaluate()
  {
    setNum((prevNum) => {
      try{
        setNum(eval(prevNum))
      }
      catch(e)
      {
        setNum("Wrong Input")
      }
    });
  }

  

  return (
    <div className = 'main--div'>

        <div className = 'display'>
          <h1 className = 'display--h1'> {num} </h1>
        </div>

        <div className = 'keypad'>
        
        {Data.map((ele) => {
          if (ele.class === 'key ac')
          {
            return <div className = {ele.class} onClick = {()=>clear()}> <h2> {ele.name} </h2> </div>
          }
          else if (ele.class === 'key equal')
          {
            return <div className = {ele.class} onClick = {()=>evaluate()}> <h2> {ele.name} </h2> </div>
          }
          else 
          {
            return <div className = {ele.class} onClick = {() => calculate(ele.name)}> <h2> {ele.name} </h2> </div>
          }
        })}

     
        </div>

    </div>
  )
}