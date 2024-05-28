let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let btVerificar = document.querySelector("#btVerificar");
let resposta1 = document.querySelector("#resp1");
let resposta2 = document.querySelector("#resp2");

function divisao(){
    let nr1 = Number(num1.value);
    let nr2 = Number(num2.value);
    let resp1 = (nr1 / nr2);
    let resp2 = (nr1 % nr2);

    resposta1.textContent = resp1.toFixed(2);
    resposta2.textContent = resp2.toFixed(2);
    
}

btVerificar.onclick = function(){
    divisao();
}