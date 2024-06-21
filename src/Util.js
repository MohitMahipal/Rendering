import { useEffect, useState } from "react";

const Util = () => {
    console.log("default");
    const [val, setVal] = useState("mohit");
    useEffect(() => {
        console.log("effect",val);
    }, [val])
    
    const update = () => {
        console.log("updating ",val)
        setVal("moh");
    }

    return (<>
        
        <p>{val}</p>
        <button type="button" onClick={()=>{update()}}>click me</button>
    
    </>);
}


export default Util;