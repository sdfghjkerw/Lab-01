export class Product {
    #id
    constructor(id, name, price){
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

export class Cart{
    #items = [] // приватный мссив товаров
    addItem(product, quantity){
        this.#items.push({ product, quantity }) //деструктуризация 
    }

    getSubTotal(){
        return this.#items.reduce((total, item) => {
            return total + (item.product.price * item.quantity)
        }, 0) //методы массива вместо цикла for
    }
}