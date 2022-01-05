import React, {useState} from 'react';

function Counter() {

    const [count, setCount] = useState(0)

    function handleClick(){ 
        setCount(prevCount => prevCount + 1)
    }

    return (
        <div>
            <h1>Counter</h1>
            <button onClick={handleClick}>{count}</button>
        </div>
    )
}

export default Counter