//модуль конфигурации: хранит константы и настройки

MyApp.Config = (function() {
    //привтаные данные
    var_config = {
        taxRate: 0.15,
        currency: "USD"
    }

    //публичный API
    return{
        getTaxRate: function(){
            return _config.taxRate
        },
        getCurrency: function(){
            return _config.currency
        }
    }
})()