import React, { useState } from "react";
function ToggleComponent(){
    const [isHighlighted, setIsHihglighted] = useState(false)

    return(
        <div style={{padding:'20px'}}>
            <button onClick={() => setIsHihglighted(!isHighlighted)}>переключить</button>
            <p className={isHighlighted ? 'highlight' : ''}></p>
            //при клике просто меняется тру на фолз и наоборот. класс зависит от состояния isHighlighted
        </div>
    )
}

export default ToggleComponent