import { useState } from "react";

const CircleCom = ()=>{
  const [Counts , setCount] = useState(0);
  function increment(){
    return setCount(Counts+1)
  }
  function decrement(){
    return setCount(Counts-1)
  }
  const MyColor=()=>{
    if(Counts === 0){
      return <Mytext name="white"/>
    }else if(Counts >0){
      return <Mytext name="rgb(102, 187, 102)"/>
    }
    else{
      return <Mytext name="red"/>
    }
  }

  const Mytext=(props)=>{
    const color = props.name;
    return <h2 className="num" style={{color: color}}>{Counts}</h2>
  }
   return (
       
        <>
        <button className="btn"  onClick={() => decrement()}>Decement</button>
        <MyColor/>
        <button className="btn" onClick={() => increment()}>Increment</button>
        </>
    );
} 
export default CircleCom

