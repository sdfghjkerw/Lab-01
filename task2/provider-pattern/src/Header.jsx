import React from 'react'
import { useUser } from "./UserContext";
import UserMenu from "./UserMenu"

const Header = () => {
    const {user, theme, setTheme} = useUser()
    const toggleTheme = () => setTheme(prev => ({...prev, darkMode:!prev.darkMode}))

    return(
        <header>

            <p>role - {user.role}</p>
            <button onClick={toggleTheme}>{theme.darkMode ? 'светлая тема' : 'темная тема'}</button>
            <UserMenu/>
        </header>
    )
}

export default Header

// берется инофрмация о юзере, теме и функция для смены темы. в хэдере выводится роль юзера, при нажатии на кнопку меняется тема тернарным оператором