function cal_add(a, b){
    return a + b;
}

function cal_sub(a, b){
    return a - b;
}

function cal_mul(a, b){
    return a * b;
}

function cal_div(a, b){
    return a / b;
}


let board = [];

document.getElementById("test1").addEventListener("click", ()=>{
    board.push("1");
    document.getElementById("show").innerHTML = board[0];
});
