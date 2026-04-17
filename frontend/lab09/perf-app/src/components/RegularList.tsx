import { useMemo } from "react";
import { generateItems } from "../utils/generateItems";

export function RegularList({ itemCount = 10000 }: { itemCount?: number }) {
  const items = useMemo(() => generateItems(itemCount), [itemCount]);

  return (
    <div className="regular-list">
      <h3>Regular List (No Virtualization)</h3>
      {items.map(item => (
        <div key={item.id} className="list-item">
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
} 