//scenario 05, pattern - command behavioral object. цель - инкапсулировать дейсвтия чтоб они могли выполнятся и переделываться

class TaskBoard{
    constructor(){
        this.cards = [
            {id:1, title: "design login page", column:"TODO"},
            {id:2, title: "fix auth bug", column:"TODO"}
        ]
    }

    moveCard(id, toColumn){
        const card = this.cards.find(c => c.id === id)
        if(card){
            card.column = toColumn
        }
    }

    renameCard(id, newTitle){
        const card = this.cards.find(c => c.id === id)
        if(card){
            card.column = newTitle
        }
    }

    printBoard(){
        console.log("current board:")
        this.cards.forEach(c =>
            console.log(` [${c.column}] ${c.id}: ${c.title}`)
        )
        console.log("-------")
    } 
}


//COMMANDS
//move card 

class MoveCardCommand{
    constructor(board, id, fromColumn, toColumn){
        this.board = board
        this.id = id
        this.fromColumn = fromColumn
        this.toColumn = toColumn
    }

    execute(){
        this.board.moveCard(this.id, this.toColumn)
    }

    undo(){
        this.board.moveCard(this.id, this.fromColumn)
    }
}

///rename card

class RenameCardCommand{
    constructor(board, id, oldTitle, newTitle){
        this.board = board
        this.id = id
        this.fromColumn = oldTitle
        this.toColumn = newTitle
    }

    execute(){
        this.board.renameCard(this.id, this.newTitle)
    }

    undo(){
        this.board.renameCard(this.id, this.oldTitle)
    }
}

///invoker history manager


class ActionHistory{
    constructor(){
        this._history = []
        this._redoStack = []
    }

    execute(command){
        command.execute()
        this._history.push(command)
        this._redoStack = [] // очистить redo после нового дейсвтия
    }

    undo(){
        const command = this._history.pop()
        if (command){
            command.undo()
            this._redoStack.push(command)
        }
    }

    redo(){
        const command = this._redoStack.pop()
        if (command){
            command.execute()
            this._history.push(command)
        }
    }
}

////////demo

const board = new TaskBoard()
const history = new ActionHistory()

board.printBoard()

history.execute(new MoveCardCommand(board, 1, "TODO", "in progress"))
history.execute(new RenameCardCommand(board, 2, "fix auth bug", "fix 0auth2 bug"))

board.printBoard()

history.undo()
board.printBoard()

history.redo()
board.printBoard()