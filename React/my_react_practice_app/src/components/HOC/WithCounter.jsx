import { useState } from "react"

const WithCounter = (WrappedComponent) => {
    return function WithCounter(props) {
        const [count, setCount] = useState(0);

        const increment =  () =>setCount( prev => prev + 1);

        return (
            <WrappedComponent increment = {increment}
            count ={count}
            {...props} 
            />
        )
    }
}

export default WithCounter