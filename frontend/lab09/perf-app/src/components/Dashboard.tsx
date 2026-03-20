import { useState, useCallback } from "react";
import { UserCard } from "../UserCard";
import { AnalyticsChart } from "../AnalyticsChart";
import { Button } from "../Button";

export interface User {
  id: number;
  name: string;
  email: string;
}

export function Dashboard() {
  const [count, setCount] = useState(0);
  const [user] = useState<User>({ id: 1, name: "Valeria", email: "valeria@example.com" });
  const [items] = useState(["React", "TypeScript", "Performance"]);

  const handleIncrement = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <div>
      <h1>Dashboard (count: {count})</h1>
      <Button onClick={handleIncrement} label="Increment Count" />
      
      <UserCard user={user} />
      <AnalyticsChart items={items} />
    </div>
  );
}