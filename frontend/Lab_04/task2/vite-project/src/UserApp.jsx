import React from "react";
import UserProfile3 from "./UserProfile3";

function UserApp(){
    const [userId, setUserId] = useState(1)
    return(
        <>
            <h2>user app task 3</h2>
            <div>
                <button onClick={() => setUserId(1)}>User 1</button>
                <button onClick={() => setUserId(2)}>User 2</button>
                <button onClick={() => setUserId(3)}>User 3</button>
            </div>
            <UserProfile3 userId={userId}/>
        </>
    )
}

export default UserApp