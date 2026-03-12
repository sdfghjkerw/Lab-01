export class CommandManager {
    constructor() {
        this.history = [];
    }
    execute(command) {
        command.execute();
        this.history.push(command);
    }
    undo() {
        const cmd = this.history.pop();
        if (cmd) cmd.undo();
    }
}