import React, { useState } from 'react'
import UserContext from './UserContext'

const userProvider = ({children}) => {
    const [user] = useState({
        name:"Valeria",
        email:"sdfghjk.com",
        role:"Admin"
    }) // состояние пользователя

    const [permissions] = useState({
        canEdit:true,
        canDelete:true,
        canView:true
    }) // состояние для прав доступа

    const [theme, setTheme] = useState({
        darkMode: false,
        fontSize:'15px'
    })// сосояние для темы и шрифтов

    const toggleTheme = () => {
        setTheme(prev => ({...prev, darkMode:!prev.darkMode}))
    }//функция переключения темы

    const value = {
        user,
        permissions,
        theme,
        toggleTheme
    } // объект значения формируется, он будет с компонентами

    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider> // children оборачивается в провайдер
    )
}

export default userProvider