let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let num3 = document.querySelector("#num3");
let btValidar = document.querySelector("#btValidar");
let resposta1 = document.querySelector("#resp1");

function comparacao(){
    let nr1 = Number(num1.value);
    let nr2 = Number(num2.value);
    let nr3 = Number(num3.value);
    
    let menor = nr1;

    if(nr2 < menor){
        menor = nr2;
    }

    if(nr3 < menor){
        menor = nr3;
    }
    
    resposta1.textContent = + menor;
}

btValidar.onclick = function(){
    comparacao();
}