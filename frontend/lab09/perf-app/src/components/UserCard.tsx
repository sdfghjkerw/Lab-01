import { memo } from "react";
import { User } from "../types";

interface UserCardProps {
  user: User;
}

// Обычная мемоизация: компонент обновится только если изменится объект user
export const UserCard = memo(function UserCard({ user }: UserCardProps) {
  console.log("UserCard render");
  return (
    <div className="card" style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
});

// Демонстрация кастомного сравнения (Task 2)
export const UserCardWithCompare = memo(
  function UserCardWithCompare({ user }: UserCardProps) {
    console.log("UserCardWithCompare render");
    return (
      <div className="card">
        <h3>{user.name} (Custom Compare)</h3>
      </div>
    );
  },
  (prevProps, nextProps) => {
    // Возвращаем true, если пропсы равны (ререндер не нужен)
    return prevProps.user.id === nextProps.user.id && 
           prevProps.user.name === nextProps.user.name; [cite: 133, 134]
  }
);