// Receiver
class TextEditor {
    constructor() {
        this.clipboard = '';
        this.text = 'Some text';
    }

    copy() {
        this.clipboard = this.text;
        console.log(`Text copied to clipboard: "${this.clipboard}"`);
    }

    paste() {
        this.text += ` ${this.clipboard}`;
        console.log(`Text after paste: "${this.text}"`);
    }
}

// Interface
class Command {
    execute() {};
}

// Commands
class CopyCommand extends Command {
    constructor(receiver) {
        super();
        this.receiver = receiver;
    }

    execute() {
        this.receiver.copy();
    }
}

class PasteCommand extends Command {
    constructor(receiver) {
      super();
      this.receiver = receiver;
    }
  
    execute() {
      this.receiver.paste();
    }
}

// Invoker
class Button {
    constructor(command) {
        this.command = command;
    }

    press() {
        this.command.execute();
    }
}

const editor = new TextEditor();
const copyCommand = new CopyCommand(editor);
const pasteCommand = new PasteCommand(editor);

const copyButton = new Button(copyCommand);
const pasteButton = new Button(pasteCommand);

copyButton.press();
pasteButton.press();