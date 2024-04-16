class Storage {
    constructor(display, calculate) {
        this.display = display;
        this.calculate = calculate;
        this.save = [];
        this.mark = "";
        this.str = "";
    }

    setStorage(value) {

        //사칙연산을 눌렀을때
        if (value == '+' || value == '-' || value == '*' || value == '/') {
            // 지금까지 문자가 없고 기존 마크도 없고 받은값이 -일때
            if(!this.str && !this.mark && value == '-'){
                this.str += value;
                this.display.show(this.str);
                return;
            }

            // 지금까지 문자가 없고 기존 마크가 있을때
            if(!this.str && this.mark){
                this.display.show("ERROR");
                return;
            }

            // 기존 마크가 있을때
            if(this.mark){
                this.save.push(this.str);
                this.str = "";
                this.save[0] = this.calculate.resulting(this.save[0], this.save[1], this.mark);
                this.mark = value;
                this.save.pop(1);
                this.display.show(this.save[0]);
                return;
                
            }
            
            // 기존 마크가 없을때
            this.save.push(this.str);
            this.str = "";
            this.mark = value;
            this.display.show(value);
        }


        // =을 눌렀을때
        else if (value == '=') {
            
            this.save.push(this.str);
            this.save[0] = this.calculate.resulting(this.save[0], this.save[1], this.mark);
            this.save.pop(1);
            this.mark = "";
            this.str = "";
            this.display.show(this.save[0]);
        }

        // AC를 눌렀을때
        else if (value == 'AC') {
            this.save = [];
            this.mark = "";
            this.str = "";
            this.display.clear();
        }

        // 지우기를 눌렀을때
        else if (value == '⌫') {
            this.str = this.str.slice(0,-1);
            this.display.show(this.str);
        }

        // 그외 숫자들을 눌렀을때
        else {
            this.str += value;
            this.display.show(this.str);
        }
    }
}

export default Storage;