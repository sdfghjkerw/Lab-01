//scenario 01, pattern - singleton creational object. цель - гарантировать только одну конфигурацию

class AppConfig{
    constructor(){
        if(AppConfig._instance){
            return AppConfig._instance
        }

        this.settings = {
            apiBaseUrl: 'https://api.example.com',
            locale: 'kk-kz',
            featureFlags: {darkMode: true, betaCheckOut: false}
        }

        AppConfig._instance = this
    }

    get(key){
        return this.settings[key]
    }

    set(key, value){
        this.settings[key] = value
    }

    static getInstance(){
        if(!AppConfig._instance){
            new AppConfig()
        }
        return AppConfig._instance
    }
}

///////beta

const cfg1 = AppConfig.getInstance()
const cfg2 = AppConfig.getInstance()

console.log("same instance?", cfg1 === cfg2) // true
console.log("locale:", cfg1.get("locale"))
cfg1.set("locale", "en-US")
console.log("updated locale from cfg2:", cfg2.get("locale"))// en-US