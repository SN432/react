import { useState } from "react";

export function increment(){
    const [Counts , setCount] = useState(0);
    return (setCount(Counts+1));
}
export default Counts;