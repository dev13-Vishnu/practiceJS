import { useState } from "react"
import Child from "./Child";

 const ChildToParent = () => {
    const [message, setMessage] = useState("");
    const handleMessage = (message) =>{
        setMessage(message)
    }
    
    return (
        <>
            <h1>Parent Component</h1>
            <p>Message from Child : {message}</p>
            <Child onMessage = {handleMessage}/>
            
        </>
    )
}
export default ChildToParent

 