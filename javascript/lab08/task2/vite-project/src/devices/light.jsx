import { Device } from './device.jsx';
export class Light extends Device {
    constructor(name, mediator) {
        super(name, mediator);
        this.state.brightness = 0;
    }
    toggle(power) {
        this.state.isOn = power;
        this.state.brightness = power ? 100 : 0;
        console.log(`[Device] ${this.name} is now ${power ? 'ON' : 'OFF'}`);
        this.mediator.notify(this, power ? 'turnedOn' : 'turnedOff');
    }
}