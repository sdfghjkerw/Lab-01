import React, { useState } from "react";

function StepCounter({initialValues = 0, step = 1}){
    const [count, SetCount] = useState(initialValues)
    const [history, setHistory] = useState([])
    const [operationCount, setOperationCount] = useState(0)

    const handleIncrement = () => {
        const newCount = count + step
        SetCount(newCount)
        setHistory([...history, newCount])
        setOperationCount(operationCount + 1)
    } // создается newcount которая засчитывает к счетчику + 1 при клике, setCount обновляет состояние newCount, setHistory к старому массиву (...) прибалвляет новое значение и в setOperationCount сохраняет изменение дейсвтия (прибавление убавление от счетчика)

    const handleDecrement = () => {
        const newCount = count - step
        SetCount(newCount)
        setHistory([...history, newCount])
        setOperationCount(operationCount + 1)
    }

    const handleReset = () => {
        SetCount(initialValues)
        setHistory([])
        setOperationCount(0)
    }

    return(
        <div>
            <h1>счетчик операций</h1>
            <h3>счетчик - {count}</h3>
            <h3>количество проведенных операций - {operationCount}</h3>
            <p>
                Последние операции: {" "}
                {history.slice(-5).length > 0 ? history.slice(-5).join(", "): "None"}
            </p>
            <button onClick={handleIncrement}>увеличить на 1</button>
            <button onClick={handleDecrement}>уменьшить на 1</button>
            <button onClick={handleReset}>сбросить счетчик</button>
        </div>
    )
}

export default StepCounter