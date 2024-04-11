/* ================================================================================ */
// 버튼 객체
class Button {
    constructor(label, callback) {
        this.label = label;
        this.element = this.createButtonElement(label);
        this.appendFunction(callback);
    }

    createButtonElement(label) {
        let button = document.createElement("button");
        button.textContent = label;
        button.id = `id_${label}`;
        document.body.appendChild(button);
        return button;
    }

    appendFunction(callback) {
        this.element.addEventListener("click", () => {
            callback(this.label);
        });
    }
}




/* ================================================================================ */
// 디스플레이 객체
class Display {
    constructor() {
        this.element = this.createDisplayElement();
    }

    createDisplayElement() {
        let display = document.createElement("div");
        display.id = "show";
        document.body.appendChild(display);
        return display;
    }

    update(content) {
        this.element.innerHTML = content;
    }
}




/* ================================================================================ */
// 히스토리 객체
class History {
    constructor() {
        this.entries = [];
        this.element = this.createHistoryElement();
    }

    createHistoryElement() {
        let history = document.createElement("div");
        history.id = "history";
        document.body.appendChild(history);
        return history;
    }

    add(entry) {
        this.entries.push(entry);
        this.update();
    }

    update() {
        this.element.innerHTML = this.entries.map(e => `${e.expression} = ${e.result}`).join("<br>");
    }
}




/* ================================================================================ */
// 계산기 객체
class Calculator {
    constructor() {
        this.display = new Display();
        this.history = new History();
        this.currentInput = "";
        this.defaultButtons = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/", "(", ")"];
        this.initButtons();
    }

    initButtons() {
        this.defaultButtons.forEach(label => {
            new Button(label, this.addToCurrentInput.bind(this));
        });

        new Button("=", this.calculateResult.bind(this));
        new Button("<", this.removeLastCharacter.bind(this));
        new Button("C", this.clearInput.bind(this));
    }

    addToCurrentInput(label) {
        this.currentInput += label;
        this.display.update(this.currentInput);
    }

    calculateResult() {
        try {
            let result = eval(this.currentInput);
            if (result == undefined) {
                return;
            }
            this.history.add({
                expression: this.currentInput,
                result: result
            });
            this.currentInput = "";
            this.display.update(result);
        } catch (e) {
            this.currentInput = "";
            this.display.update("ERROR");
        }
    }

    removeLastCharacter() {
        this.currentInput = this.currentInput.slice(0, -1);
        this.display.update(this.currentInput);
    }

    clearInput() {
        this.currentInput = "";
        this.display.update(this.currentInput);
    }
}

const calculator = new Calculator();