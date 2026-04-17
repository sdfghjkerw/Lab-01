import { useState, useCallback } from "react";
import { UserCard } from "./UserCard";
import { AnalyticsChart } from "./AnalyticsChart";
import { Button } from "./Button";
import { User } from "../types";

export function Dashboard() {
  const [count, setCount] = useState(0);
  const [items] = useState(["Tech", "Finance", "Education"]);
  const [user] = useState<User>({
    id: 1,
    name: "Valeria",
    email: "valeria@example.com",
  });

  // useCallback гарантирует, что ссылка на функцию не изменится при рендере Dashboard [cite: 202]
  const handleLogClick = useCallback(() => {
    console.log("Button clicked!");
  }, []);

  const handleIncrement = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Lab 9.1: Performance (Count: {count})</h1>
      
      {/* Эти кнопки НЕ вызывают ререндер самих себя, т.к. обернуты в useCallback + memo */}
      <Button onClick={handleLogClick} label="Just Log" />
      <Button onClick={handleIncrement} label="Increment Count" />

      <hr />
      
      {/* Не ререндерится при изменении count благодаря React.memo */}
      <UserCard user={user} />
      
      {/* Тяжелое вычисление не перезапускается при изменении count благодаря useMemo */}
      <AnalyticsChart items={items} />
    </div>
  );
}