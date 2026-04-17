import { useState, useMemo, useCallback } from "react";
import { FixedSizeList as List } from "react-window";
import { generateItems, Item } from "../utils/generateItems";

interface VirtualListProps {
  itemCount?: number;
  height?: number;
}

export function VirtualList({ itemCount = 10000, height = 500 }: VirtualListProps) {
  const [filter, setFilter] = useState("");
  
  const items = useMemo(() => generateItems(itemCount), [itemCount]);

  const filteredItems = useMemo(() => {
    if (!filter) return items;
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
      <div style={style} className="list-item" style={{ ...style, borderBottom: '1px solid #eee' }}>
        <h4>{item.title}</h4>
        <p>{item.description}</p>
        <span className="category" style={{ color: 'blue' }}>{item.category}</span>
      </div>
    );
  };

  return (
    <div className="virtual-list-container">
      <input
        type="text"
        placeholder="Filter items..."
        value={filter}
        onChange={handleFilterChange}
        className="filter-input"
      />
      <div className="list-info">
        Showing {filteredItems.length} of {items.length} items
      </div>
      
      <List
        height={height}
        itemCount={filteredItems.length}
        itemSize={80} 
        width="100%"
      >
        {Row}
      </List>
    </div>
  );
}