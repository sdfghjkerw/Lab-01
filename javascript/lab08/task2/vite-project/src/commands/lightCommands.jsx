import { Command } from './command.jsx';
export class LightOnCommand extends Command {
    constructor(light) {
        super();
        this.light = light;
    }
    execute() { this.light.toggle(true); }
    undo() { this.light.toggle(false); }
}