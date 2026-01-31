import React from "react";
import StepCounter from "./StepCounter";

function CounterApp(){
    return(
        <div>
            <h2>обработчик счетчика</h2>
            <StepCounter initialValues={0} step={1}/>
            <StepCounter initialValues={10} step={5}/>
        </div>
    )
}

export default CounterApp