import React from 'react'
import { useUser } from "./UserContext";

const UserMenu = () =>{
    const {user, permissions} = useUser()

    return(
        <div>
            <p>email: {user.email}</p>
            <p>permissions: {permissions.canEdit ? 'редактировать' : ''}, {permissions.canDelete ? 'удалтиь' : ''}</p>
        </div>
    )
}

export default UserMenu

//выводится имейл юзера и разрешения. поверяется, если разрешения есть то редактируется если нет то нет, ткаже с удалением