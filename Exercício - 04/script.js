let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let btEnter = document.querySelector("#btEnter");
let resposta1 = document.querySelector("#resp1");
let resposta2 = document.querySelector("#resp2");
let resposta3 = document.querySelector("#resp3");

function pizza(){
    let nr1 = Number(num1.value);
    let nr2 = Number(num2.value);
    
    let resp1 = (nr1 * 12);
    let resp2 = (nr2 * 7);
    let resp3 = ((nr1 * 12) + (nr2 * 7));

    resposta1.textContent = resp1;
    resposta2.textContent = resp2;
    resposta3.textContent = resp3;

}

btEnter.onclick = function(){
    pizza()
}