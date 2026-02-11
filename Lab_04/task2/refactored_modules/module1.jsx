//основной модуль - логика товаров и корзины

MyApp.Modules.Cart = (function(){
    //приватные данные
    var _products =[]
    var _cart =[]
    var _user ={}
    var _discount = 0

    //привтаные функции
    function _updateProductDisplay() {console.log("продукты")}
    function _updateCartDisplay() {console.log("корзина")}
    function _updateUserDisplay() {console.log("пользователи")}

    function _calculateSubtotal(){
        return _cart.reduce(function(sum, item){
            return sum + (item.product.price * item.quantity)
        }, 0)
    }

    function _updateTotal(){
        var subtotal = _calculateSubtotal()
        var tax = subtotal + MyApp.Config.getTaxRate()
        var discountAmount = subtotal * (_discount / 100)
        var total = subtotal + tax - discountAmount

        var tutalEl = document.getElementById("total-amount")
        if(totalEl){
            totalEl.innerText = MyApp.Utils.formatCurrency(total)
        }
    }

    // публичный api
    return{
        init: function(){
            _updateProductDisplay()
            _updateCartDisplay()
            _updateUserDisplay()
            _updateTotal()
        },
        addProduct: function(id, name, price, category){
            _products.push({id: id, name: name, price: price, category: category})
            _updateProductDisplay()
        },
        addToCart: function(productId, quantity){
            var product = _products.find(p => p.id === productId)
            if(product){
                _cart.push({product:product, quantity: quantity})
                _updateCartDisplay()
                _updateTotal()
            }
        },
        setUser: function(name, email, address){
            _user = {name: name, email: email, address: address}
            _updateUserDisplay()
        },
        setDiscount: function(percent){
            _discount = percent
            _updateTotal()
        }
    }
})()