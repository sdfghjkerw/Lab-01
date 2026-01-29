function Greeting(){
    const now = new Date()
    const hour = now.getHours()

    let message = ""
    let color = ""
    if (hour >= 6 && hour < 12){
        message = "Good morning!"
        color = "yellow"
    } else if (hour >= 12 && hour < 18){
        message = "Good afternoon!"
        color = "orange"
    } else {message = "Good evening!", color = "lightblue"}

    return(
        <div>
            <h2 style={{color: color}}>{message}</h2>
        </div>
    )
}

export default Greeting