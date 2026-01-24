function Card({title, children, className}){
    return(
        <div className={`card ${className || ""}`}>
            <h3>{title}</h3>
            <div>{children}</div>
        </div>
    )
}

export default Card