import { getWeatherData } from "./core.mjs";
import {renderCurrentWeather, formatTemp, capitalize} from "./utils.mjs"
import DomUtils from './utils.mjs'

const data = getWeatherData()
renderCurrentWeather(data)

const forecastContainer = document .querySelector('#forecast-container')
const observer = new IntersectionObserver(async (entries) => {
    if (entries[0].isIntersecting){
        try {
            const {loadForecast} = await import('./forecast_feauture.mjs')
            loadForecast(forecastContainer) 
            observer.unobserve(forecastContainer)// отключается слежение
        } catch(err){
            console.error("ошибка при загрузке погоды", err)
        }
    }
})

const rawTemp = 22
const description = "cloudy"

const displayTemp = formatTemp(rawTemp)
const displayDesc = DomUtils.capitalize(description)
DomUtils.updateElement('app', `<h3>${displayDesc}: ${displayTemp}</h3>`)
observer.observe(forecastContainer)