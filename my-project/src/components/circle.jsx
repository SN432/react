import { useState } from "react";

  const MyCircle= () =>{
    const [Counts, setCount] = useState(0);
    return (
        <>
        <button className="btn" onClick={() => {
            setCount(Counts-1);
          }}>Decement</button>
        <h2 className="num">{Counts}</h2>
        <button className="btn" onClick={() => {
            setCount(Counts+1);
          }}>Increment</button>
        </>
    );
}

export default MyCircle

 
