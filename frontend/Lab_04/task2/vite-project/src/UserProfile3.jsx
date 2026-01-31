import React, {useState, useEffect } from "react";

function UserProfile3(){
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [userId, setUserId] = useState(1)

    useEffect(() => {
        const controller = new AbortController()
        const signal = controller.signal
        setLoading(true)
        setError(null)

        fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((response) => {
            if (!response.ok){
                throw new Error("ошибка загрузки данных!!!!!")
            }
            return response.json()
        }) //ели ответ не 200, он выдает сообщение об ошибке, а ели все в порядке то данные из джсона
        .then((data) => {
            setUser(data)
            setLoading(false)
        })//записывает данные в setUser инфу о пользователе, и прекращает загрузку 
        .catch((err) => {
            if (err.name === "AbortError"){
                console.log("запрос прерван")
            }else{
                setError(err.message)
                setLoading(false)
            }
        })//если имя ошибки Aborterror отправляет сообщение что запрос прерван, в остальных случаях показывает название ошибки и прерывает загрузку
        return () => {
            controller.abort()
        }
    }, [userId]) //userId в массиве зависимостей чтобы при изменении этого значения запускался новыйй запрос

    const handleRefresh = () => {
        const RandomId = Math.floor(Math.random()*10)+1
        setUserId(RandomId)
    }

    if (loading) return <p>loading.....</p>

    if (error) <p style={{color: "red"}}>Error {error}</p>

    if(!user) return <p> нет данных о пользователе</p>

    return(
        <>
            <h1>профль пользователя {userId}</h1>
            <p>имя: {user.name}</p>
            <p>почта: {user.email}</p>
            <p>телефон: {user.phone}</p>
            <p>вебсайт: {user.website}</p>
            <button onClick={handleRefresh}>обновить</button>
        </>
    )
}
export default UserProfile3