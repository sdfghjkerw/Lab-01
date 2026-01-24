function CombinedComponent(){
    const items = [
        {id: 1, name: "javascript"},
        {id: 2, name: "python"},
        {id: 3, name: "php"}
    ]

    return(
        <>
            <h2>список продуктов: </h2>
            <ul>
                {items.map(items => (
                    <li key={items.id}>{items.name}</li>
                ))}
            </ul>
            <p>общее количество - {items.length}</p>
        </>
    )
}

export default CombinedComponent