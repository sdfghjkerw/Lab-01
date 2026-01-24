import Card from "./Card"

function ProductList(){
    const products = [
        {id: 1, name: "apple", price: 15},
        {id: 2, name: "water", price: 34},
        {id: 3, name: "juice", price: 76}
    ]
//создается массив объектов чтобы потом просто вставляет их по значению и не повторять код 
    return (
        <div>
            {products.map(product => (
                <Card key={product.id} title={product.name}>
                    <p>цена = ${product.price}</p>
                </Card>
            ))}
        </div>
    )
}
//map проходиться по всему массиву и всавляет каждый item куда он указан как item.ключ

export default ProductList