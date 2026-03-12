import { Device } from './device.jsx';
export class Thermostat extends Device {
    constructor(name, mediator) {
        super(name, mediator);
        this.state.temperature = 20;
    }
    setTemperature(temp) {
        this.state.temperature = temp;
        console.log(`[Device] ${this.name} set to ${temp}°C`);
        this.mediator.notify(this, 'tempChanged');
    }
}