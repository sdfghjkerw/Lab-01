function ProfileCard(){
    const name = "Valeria"
    const bio = "student"
    const imageurl = "https://i.pinimg.com/736x/ce/74/29/ce7429ace24ad9e8c83e2b9efcbd60f4.jpg"
    const cardStyle = {
        border:"1px solid",
        padding:"16px",
        width:"500px",
        backgroundColor:"lightblue",
        color:"black",
        borderRadius:"15px"
    }
    const imgStyle = {
        width:"200px",
        height:"200px",
        borderRadius:"50%",
        border:"1px solid white"
    }

    const btnStyle = {
        width:"150px",
        height:"50px"
    }

    return(
        <div style={cardStyle}>
            <img style={imgStyle} src={imageurl}/>
            <h2>{name}</h2>
            <p>{bio}</p>
            <button style={btnStyle}>Follow</button>
        </div>
    )
}

export default ProfileCard