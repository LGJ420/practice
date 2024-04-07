// function my_cal_add(a, b){
//     return a + b;
// }

// function my_cal_sub(a, b){
//     return a - b;
// }

// function my_cal_mul(a, b){
//     return a * b;
// }

// function my_cal_div(a, b){
//     return a / b;
// }

let show = "";
let board = [];

function My_create_btn(text){
    let btn = document.createElement("button");
    let node = document.createTextNode(text);
    btn.id = text;
    btn.appendChild(node);
    btn.addEventListener("click",()=>{
        board.push(text);
        show += text;
        document.getElementById("show").innerHTML = show;
    });
    document.body.appendChild(btn);
}

for(let i = 0; i<10; i++){
    My_create_btn(i);
}

My_create_btn("+");
My_create_btn("-");
My_create_btn("*");
My_create_btn("/");

My_create_btn("=");
document.getElementById("=").addEventListener("click",()=>{
    let result = parseInt(show);
    show = "";
    document.getElementById("show").innerHTML = result;
});

