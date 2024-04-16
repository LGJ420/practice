class Button {
    constructor(storage){
        this.storage = storage;
        this.buttons = [
            {name: '(', id: 'open'},
            {name: ')', id: 'close'},
            {name: 'AC', id: 'allClear'},
            {name: '⌫', id: 'backSpace'},
            {name: '7', id: 'bt7'},
            {name: '8', id: 'bt8'},
            {name: '9', id: 'bt9'},
            {name: '/', id: 'divide'},
            {name: '4', id: 'bt4'},
            {name: '5', id: 'bt5'},
            {name: '6', id: 'bt6'},
            {name: '*', id: 'multify'},
            {name: '1', id: 'bt1'},
            {name: '2', id: 'bt2'},
            {name: '3', id: 'bt3'},
            {name: '-', id: 'minus'},
            {name: '.', id: 'dot'},
            {name: '0', id: 'bt0'},
            {name: '=', id: 'equal'},
            {name: '+', id: 'plus'}
        ];
        this.createButtons();
    }

    createButtons(){
        this.buttons.forEach(button => {
            const btn = document.createElement('button');
            btn.textContent = button.name;
            btn.id = button.id;
            btn.addEventListener('click', ()=>{
                this.storage.setStorage(button.name);
            })
            document.getElementById("calculator").appendChild(btn);
        })
    }
}

export default Button;