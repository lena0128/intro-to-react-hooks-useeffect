import React, {useState, useEffect } from 'react';

function Counter() {

    const [count, setCount] = useState(0)

    // in order to make use of componentDidMount, we need to pass in an empty array as a second argument
    useEffect(() => {
        setCount(prevCount => prevCount + 1)
        console.log("yo!")

        // componentWillUnmount
        // we call this cleanup function
        return () => {
           console.log("component unmounted")
        }
    }, [])

    // componentDidUpdate
    // pass a dependency or multiple dependencies as a second argument. The function will look into this argument and decide if it needs update
    useEffect(() => {
        console.log("count updated")
    }, [count])

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