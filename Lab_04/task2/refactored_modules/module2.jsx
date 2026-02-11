//модуль утилит - общие функции форматирования

MyApp.Utils = (function(){
    //публичный api
    return {
        formatCurrency: function(amount){
            return amount.toFixed(2) + " " + MyApp.Config.getCurrency()
        }
    }
})()