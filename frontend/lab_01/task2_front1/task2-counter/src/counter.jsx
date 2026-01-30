import React from "react";

function Counter(){
    const [count, setCount] = useState(0)
    const increment = () => setCount(count+1)
    const decrement = () => setCount(count-1)

    return(
        <div>
            <h1>счетчик {count}</h1>
            <button onClick={increment}>увеличить</button>
            <button onClick={decrement}>уменьшить</button>
        </div>
    )
}

export default Counter