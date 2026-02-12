// форматирования температуры
export const formatTemp = (temp) => `${Math.round(temp)}°C`;

export const renderCurrentWeather = (data) => {
    const app = document.querySelector('#app');
    if (app) {
        app.innerHTML = `
            <div class="weather-widget">
                <h2>Погода сейчас</h2>
                <p>Состояние: ${data.description}</p>
                <p>Температура: ${formatTemp(data.temp)}</p>
            </div>
        `;
    }
};

export const logStatus = (message) => {
    console.log(`[Weather App]: ${message}`);
};

export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1) //форматирование описания 

export const updateElement = (id, html) => { //функция вставки html
    const el = document.getElementById(id)
    if(el) el.innerHTML = html
}