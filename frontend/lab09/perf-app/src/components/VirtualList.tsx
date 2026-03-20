import { useState, useMemo, useCallback } from "react";
import { FixedSizeList as List } from "react-window";
import { generateItems } from "../utils/generateItems";

export function VirtualList() {
  const [filter, setFilter] = useState("");
  const items = useMemo(() => generateItems(10000), []);

  const filteredItems = useMemo(() => {
    return items.filter(item => 
      item.title.toLowerCase().includes(filter.toLowerCase()) ||
      item.category.toLowerCase().includes(filter.toLowerCase())
    );
  }, [items, filter]);

  const handleFilterChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  }, []);

  const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => {
    const item = filteredItems[index];
    return (
      <div style={style} className="list-item">
        <h4>{item.title}</h4>
        <p>{item.description}</p>
        <small>{item.category}</small>
      </div>
    );
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Filter items..." 
        value={filter} 
        onChange={handleFilterChange} 
      />
      <p>Showing {filteredItems.length} items</p>
      
      <List
        height={500}
        itemCount={filteredItems.length}
        itemSize={80} 
        width="100%"
      >
        {Row}
      </List>
    </div>
  );
}