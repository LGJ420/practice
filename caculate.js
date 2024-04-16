class Calculator {
    constructor() {
    }
    //곱하기
    mul(a, b) {
        let i = parseInt(a);
        let j = parseInt(b);
        return i * j;
    }
    //나누기
    div(a, b) {
        let i = parseInt(a);
        let j = parseInt(b);
        return i / j;
    }
    //더하기
    add(a, b) {
        let i = parseInt(a);
        let j = parseInt(b);
        return i + j;
    }
    //빼기
    minus(a, b) {
        let i = parseInt(a);
        let j = parseInt(b);
        return i - j;
    }

    resulting(a, b, mark){
        let result = 0;
        switch(mark){
            case '+':
                result = this.add(a,b);
                break;
            case '-':
                result = this.minus(a,b);
                break;
            case '*':
                result = this.mul(a,b);
                break;
            case '/':
                result = this.div(a,b);
                break;
            }
        
        return result;
    }
}

export default Calculator;

