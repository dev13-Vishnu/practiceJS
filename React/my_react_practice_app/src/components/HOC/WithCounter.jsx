import React, { useState } from 'react'

const WithCounter = (WrappedComponent, incrementBy = 1) => {
    return function WithCounter(props) {
        const [count, setCount] = useState(0);

        const increment = () => setCount(prev => prev + incrementBy)
        
        return (
            <WrappedComponent
                count = {count}
                increment = {increment}
                {...props} //pass down other props
            />
        );
    };
};

export default WithCounter;
