export class Device {
    constructor(name, mediator) {
        this.name = name;
        this.mediator = mediator;
        this.state = { isOn: false };
    }
}