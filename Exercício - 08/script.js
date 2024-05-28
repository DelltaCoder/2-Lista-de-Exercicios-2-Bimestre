let numero1 = document.querySelector("#numero1");
let btsoma = document.querySelector("#btSoma");
let resposta = document.querySelector("#resp");

btVerificar.onclick = function(){
    let nr1 = Number(numero1.value);
    if(nr1 % 2 !== 0 ){
        alert("IMPAR");
    }else{
        alert("NAO E IMAPAR (PAR)");
    }


}