class Display {
    constructor() {
        this.element = document.createElement('div');
        this.element.id = "display";
        document.getElementById("calculator").appendChild(this.element);
    }

    show(text) {
        this.element.innerHTML = text;
    }

    clear() {
        this.element.innerHTML = '';
    }
}

export default Display;