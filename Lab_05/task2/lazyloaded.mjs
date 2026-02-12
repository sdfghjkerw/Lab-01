export const initFeature = (container) => {
    const forecastDetails = [
        {day:"mon", temp: "25+"},
        {day:"tue", temp: "25+"},
        {day:"wed", temp: "25+"},
    ]

    const html = forecastDetails.map(item => `
        <div><strong>${item.day}</strong>${item.temp}</div>
        `).join('')

        container.innerHTML = `
        <div>
            <h4>детальный прогноз на 3 дня</h4>
            ${html}
            <p>заружено через intersection observer</p>
        </div>
        `
        console.log("initialized!")
}