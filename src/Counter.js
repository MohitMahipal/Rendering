import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div className="holder">
            <p className="valueHolder"> {count}</p>
            <button type="button"  onClick={()=>setCount(prevCount =>prevCount+1)}> Increment</button>
        </div>
    );
}

export default Counter;