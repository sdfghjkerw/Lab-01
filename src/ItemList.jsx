function ItemList(){
    const items = [
        {id: 1, name: "javascript"},
        {id: 2, name: "python"},
        {id: 3, name: "php"}
    ]
//создается массив объектов чтобы потом просто вставляет их по значению и не повторять код 
    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    )
}
//map проходиться по всему массиву и всавляет каждый item куда он указан как item.ключ

export default ItemList