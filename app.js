
function calc() {


let number01;
let number02;

number01 =new Number (document.getElementById("number01"));
number02 =new Number (document.getElementById("number03"));

let op=document.getElementById("op");
let lblOutput = document.getElementById("output");

console.log(number01+number02);

switch(op){
    case "+": lblOutput.innerHTML=number01+number02;break;

}

console.log(typeof number01);
console.log(typeof number01);

}