import React, {useState, useEffect } from "react";

function UserProfile(){
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        setError(null)

        fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((response) => {
            if (!response.ok){
                throw new Error("ошибка загрузки данных!!!!!")
            }
            return response.json()
        })
        .then((data) => {
            setUser(data)
            setLoading(false)
        })
        .catch((err) => {
            setError(err.message)
            setLoading(false)
        })
    }, [])

    if (loading){
        return <p>loading.....</p>
    }
    if (error){
        return <p style={{color: "red"}}>Error {error}</p>
    }

    if(!user){
        return <p> нет данных о пользователе</p>
    }

    return(
        <>
            <h1>профль пользователя</h1>
            <p>имя: {user.name}</p>
            <p>почта: {user.email}</p>
            <p>телефон: {user.phone}</p>
            <p>вебсайт: {user.website}</p>
        </>
    )
}
export default UserProfile