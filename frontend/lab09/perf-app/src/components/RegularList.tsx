import { useMemo } from "react";
import { generateItems } from "../utils/generateItems";

export function RegularList(){
    const items = useMemo(() => generateItems(10000), [])
    return(
        <div className="regular-list">
            {items.map(item => (
                <div key={item.id} className="list-item">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    )
}