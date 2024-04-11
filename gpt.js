class CalculatorButton {
    constructor(value, onClick) {
        this.value = value;
        this.onClick = onClick;
    }

    render() {
        const button = document.createElement('button');
        button.textContent = this.value;
        button.onclick = () => this.onClick(this.value);
        return button;
    }
}

class CalculatorDisplay {
    constructor() {
        this.element = document.createElement('div');
        this.element.className = 'calculator-display';
        this.clear();
    }

    set text(value) {
        this.element.textContent = value.toString();
    }

    get text() {
        return this.element.textContent;
    }

    clear() {
        this.text = '0';
    }

    render() {
        return this.element;
    }
}

class CalculatorHistory {
    constructor() {
        this.records = [];
    }

    addRecord(expression, result) {
        const record = { expression, result };
        this.records.push(record);
    }

    getRecords() {
        return this.records;
    }

    clearRecords() {
        this.records = [];
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const display = new CalculatorDisplay();
    const history = new CalculatorHistory();
    const container = document.getElementById('calculator');
    container.appendChild(display.render());

    const buttons = [
        '7', '8', '9', '/', 'C',
        '4', '5', '6', '*', 'CE',
        '1', '2', '3', '-', '<-',
        '0', '.', '=', '+'
    ];
    buttons.forEach(value => {
        const button = new CalculatorButton(value, function(input) {
            if (input === 'C') {
                display.clear();
                history.clearRecords();
            } else if (input === 'CE') {
                display.text = '0';
            } else if (input === '<-') {
                display.text = display.text.slice(0, -1) || '0';
            } else if (input === '=') {
                try {
                    const result = eval(display.text);
                    history.addRecord(display.text, result);
                    display.text = result;
                } catch (e) {
                    display.text = 'Error';
                }
            } else {
                if (display.text === '0' || display.text === 'Error') {
                    display.text = input;
                } else {
                    display.text += input;
                }
            }
        });
        container.appendChild(button.render());
    });
});