export class HomeMediator {
    constructor() {
        this.devices = {};
    }

    registerDevice(name, device) {
        this.devices[name] = device;
    }

    notify(sender, event) {
        if (event === 'alarm') {
            console.log("Mediator: ALARM! Turning on all lights.");
            Object.values(this.devices).forEach(device => {
                if (device.constructor.name === 'Light') device.toggle(true);
            });
        }
    }
}