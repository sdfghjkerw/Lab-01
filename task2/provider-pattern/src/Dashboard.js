import React from 'react'
import { useUser } from "./UserContext";
import Header from "./Header"

const Dashboard = () => {
    const {user} = useUser()
    return(
        <div>
            <h1>hi, {user.name}</h1>
            <Header />
        </div>
    )
}

export default Dashboard

// через useUser берется юзер и выводится имя в шапке над header