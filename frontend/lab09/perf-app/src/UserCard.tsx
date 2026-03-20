import { memo } from "react";
import type { User } from "./components/Dashboard";

interface UserCardProps{
    user: User
}

export const UserCard = memo(function UserCard({ user }: UserCardProps){
    console.log("UserCrd render")
    return(
        <div className="card">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
        </div>
    )
}, (prev, next) => prev.user.id === next.user.id)