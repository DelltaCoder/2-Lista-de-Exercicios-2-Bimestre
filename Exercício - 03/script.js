let num1 = document.querySelector('#num1')
let num2 = document.querySelector('#num2')
let send = document.querySelector('#send')
let resp1 = document.querySelector('#soma')
let resp2 = document.querySelector('#sub')
let resp3 = document.querySelector('#multi')
let resp4 = document.querySelector('#div')

function soma(){
    let nr1 = Number(num1.value);
    let nr2 = Number(num2.value);
    let um = (nr1 + nr2);
    resp1.textContent = um.toFixed(2);
}
function subtracao(){
    let nr1 = Number(num1.value);
    let nr2 = Number(num2.value);
    let um = (nr1 - nr2);
    resp2.textContent = um.toFixed(2);
}
function multi(){
    let nr1 = Number(num1.value);
    let nr2 = Number(num2.value);
    let um = (nr1 * nr2);
    resp3.textContent = um.toFixed(2);
}
function divisao(){
    let nr1 = Number(num1.value);
    let nr2 = Number(num2.value);
    let um = (nr1 / nr2);
    resp4.textContent = um.toFixed(2);
}

send.onclick = function(){
    soma();
    subtracao();
    multi();
    divisao();
}