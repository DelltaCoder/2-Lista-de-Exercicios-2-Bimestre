let num1 = document.querySelector("#num1");
let btVisualizar = document.querySelector("#btVisualizar");

function valor(){
    let nr1 = Number(num1.value);
    if(nr1 >= 2000){
        alert("acima de 2000,00! ATINGIU A META :)");
    }else if(nr1 >= 1500){
        alert("acima de 1500,00! ATINGIU A META MINIMA :/");
    }else{
        alert("abaixo de 1500,00! NAO ATINGIU NENHUMA META :(");
    }

}

btVisualizar.onclick = function(){
    valor();
}
