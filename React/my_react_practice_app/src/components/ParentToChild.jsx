import { useState } from "react"

const Child = ({count}) => {
    return (
        <p>{count}</p>
    )
}

export const Parent = () => {
    const[count, setCount] = useState(0);

    const handleClick = () => {
        setCount (prev => prev + 1);
    }

    return (
        <>
            <h1>Parent Component</h1>
            <Child count = {count}/>
            <button onClick = {handleClick}>Click</button>
        </>
    
    )
}