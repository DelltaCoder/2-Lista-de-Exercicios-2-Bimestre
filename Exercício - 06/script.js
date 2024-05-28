let ipMedia = document.querySelector ("#ipMedia");
let btVerificar = document.querySelector ("#btVerificar");

function verificarMedia (){
    let media = Number(ipMedia.value);

    //desvio condicional simples
    if(media >= 6.0){
        alert("ALUNO APROVADO :)");
    }else if(media >= 4.0){
        alert("PRECISA FAZER PROVA SUBSTITUTIVA :/");
    }else{
        alert("ALUNO REPROVADO :(");
    }
}

btVerificar.onclick = function(){
    verificarMedia();
}