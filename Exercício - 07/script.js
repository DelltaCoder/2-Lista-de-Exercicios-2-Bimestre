let numero1 = document.querySelector("#numero1");
let numero2 = document.querySelector("#numero2");
let btsoma = document.querySelector("#btSoma");
let resposta = document.querySelector("#resp");


btVerificar.onclick = function(){
    let nr1 = Number(numero1.value);
    let nr2 = Number(numero2.value);

    if(nr1 > nr2){
        resposta.textContent = + nr1;
    }else{
        resposta.textContent = + nr2;
    }
}