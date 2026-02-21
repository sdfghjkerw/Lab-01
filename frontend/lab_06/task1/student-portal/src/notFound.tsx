import { Link } from "react-router-dom";

function NotFound(){
    return(
        <div>
            <h1>404 - Page Not Found</h1>
            <p>the page you are looking for does not exist</p>
            <Link to="/">go back to home</Link>
        </div>
    )
}

export default NotFound