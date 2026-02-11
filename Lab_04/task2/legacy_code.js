// антипаттерн: загрязнение глобальной области видимости. переменные объявлены через var в глобальном контексте
var products = [];
var cart = [];
var user = {};
var discount = 0;
var config = {
    taxRate: 0.15,
    currency: "USD"
};

// антипаттерн: отсутствие структуры и организации. функции просто перечислены в одном файле без инкапсуляции
function addProduct(id, name, price, category) {
    var product = { id: id, name: name, price: price, category: category };
    // антипаттерн: сильная связанность. функция напрямую меняет глобальный массив products
    products.push(product);
    updateProductDisplay();
}

function setUser(name, email, address) {
    // антипаттерн: сильная связанность. прямое обращение к глобальному объекту user
    user.name = name;
    user.email = email;
    user.address = address;
    updateUserDisplay();
}

function addToCart(productId, quantity) {
    // антипаттерн: дублирование кода. логика поиска товара повторяется в разных частях приложения
    var product = null;
    for (var i = 0; i < products.length; i++) {
        if (products[i].id === productId) {
            product = products[i];
            break;
        }
    }

    if (product) {
        var item = { product: product, quantity: quantity };
        cart.push(item);
        // антипаттерн: сильная связанность. функция вызывает другие глобальные функции для обновления состояния
        updateCartDisplay();
        updateTotal();
    }
}

function calculateSubtotal() {
    var subtotal = 0;
    for (var i = 0; i < cart.length; i++) {
        subtotal += cart[i].product.price * cart[i].quantity;
    }
    return subtotal;
}

// антипаттерн: дублирование кода. функции calculateTax и calculateDiscount имеют почти идентичную структуру
function calculateTax(amount) {
    return amount * config.taxRate;
}

function calculateDiscount(amount) {
    return amount * (discount / 100);
}

function updateTotal() {
    var subtotal = calculateSubtotal();
    var tax = calculateTax(subtotal);
    var discountAmount = calculateDiscount(subtotal);
    var total = subtotal + tax - discountAmount;
    // антипаттерн: сильная связанность. функция напрямую обращается к dom-элементам через глобальную область
    if (document.getElementById("total-amount")) {
        document.getElementById("total-amount").innerText = total.toFixed(2);
    }
}

function processOrder() {
    var total = calculateSubtotal() + calculateTax(calculateSubtotal()) - calculateDiscount(calculateSubtotal());
    var order = {
        user: user,
        items: cart,
        total: total,
        date: new Date()
    };
    // антипаттерн: отсутствие обработки ошибок и плохая организация работы с данными
    console.log("order processed:", order);
    return order;
}

function initializeApp() {
    // антипаттерн: избыточная логика в одной функции. смешивание инициализации и работы с localstorage
    if (typeof localStorage !== "undefined") {
        var storedProducts = localStorage.getItem("products");
        if (storedProducts) {
            products = JSON.parse(storedProducts);
        }
        var storedCart = localStorage.getItem("cart");
        if (storedCart) {
            cart = JSON.parse(storedCart);
        }
        var storedUser = localStorage.getItem("user");
        if (storedUser) {
            user = JSON.parse(storedUser);
        }
    }
    
    updateProductDisplay();
    updateCartDisplay();
    updateUserDisplay();
    updateTotal();
}