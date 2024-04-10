let show = "";
let board = [];





/* =============================================================================== */
// 빈버튼 만들기
function my_btn_create(text){
    let btn = document.createElement("button");
    let node = document.createTextNode(text);
    btn.id = text;
    btn.appendChild(node);
    document.body.appendChild(btn);
}


// 버튼에 기능붙이기
function my_btn_append_func(text, callback){
    document.getElementById(text).addEventListener("click",()=>{
        callback(text);
    })   
};







/* =============================================================================== */
// 버튼 기능모음집
function my_bf_show_add(text){
    show += text;
    document.getElementById("show").innerHTML = show;
}

function my_bf_result(){
    try{
        let result = eval(show);
        if(result==undefined){
            return;
        }
        board.push(show);
        show = "";
        document.getElementById("show").innerHTML = result;
        document.getElementById("history").innerHTML += board[board.length-1] + " = " + result + "<br>";
    }
    catch(e){
        show = "";
        document.getElementById("show").innerHTML = "ERROR";
        return;
    }
}

function my_bf_clear(){
    show = "";
    document.getElementById("show").innerHTML = show;
}

function my_bf_remove(){
    let arr = Array.from(show); 
    arr.splice(-1);
    show = arr.join('');
    document.getElementById("show").innerHTML = show;
}









/* =============================================================================== */
// 디폴트 버튼
let i_wanna_default = ["0","1","2","3","4","5","6","7","8","9","+","-","*","/","(",")"];

for(let item of i_wanna_default){
    my_btn_create(item);
    my_btn_append_func(item, my_bf_show_add);
}










/* =============================================================================== */
my_btn_create("=");
my_btn_append_func("=", my_bf_result);

my_btn_create("<");
my_btn_append_func("<", my_bf_remove);

my_btn_create("C");
my_btn_append_func("C", my_bf_clear);

