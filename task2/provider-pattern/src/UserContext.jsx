import { createContext, useContext } from "react";

//хук
const UserContext = createContext(null)
export const useUser =() => {
    const context = useContext(UserContext) // достаются данные из контекста
    if (!context){
        throw new Error('useUser должен использоваться с userProvider') // ошбка елси хук вызывается без вне провайдера
    }
    return context
}

// createContext - коробка с данными, useContext использует данные из коробки
export default UserContext