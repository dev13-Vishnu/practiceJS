class UndoRedo{
    constructor(){
        this.undoStack = [];
        this.redoStack= [];
    }
    doAction(action){
        this.undoStack.push(action);
        this.redoStack = []; //clear redo history
        console.log(`Action done : ${action}`)
    }
    undo() {
        if (this.undoStack.length === 0){
            console.log("Nothing to undo");
            return;
        }
        let action = this.undoStack.pop();
        this.redoStack.push(action);
        console.log(`Undo:${action}`);
    }
    redo(){
        if(this.redoStack.length === 0){
            console.log("Nothing to redo");
            return;
        }
        let action = this.redoStack.pop();
        this.undoStack.push(action);
        console.log(`Redo: ${action}`)
    }
    showHistory(){
        console.log("Undo stack:", this.undoStack);
        console.log("Redo stack:", this.redoStack);
    }
}

let editor = new UndoRedo();
editor.doAction("Type A");
editor.doAction("Type B");
editor.doAction("Type C");

editor.undo();
editor.undo();
editor.redo();
editor.redo();
editor.redo();

editor.showHistory();