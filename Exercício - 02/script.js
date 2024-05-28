let qnt = document.querySelector('#qnt')
let send = document.querySelector('#send')
let resp1 = document.querySelector('#Qtdovo')
let resp2 = document.querySelector('#QtdQJ')


function multi1(){
    let quant = Number(qnt.value);
    let Qtdovo = "Ovos:" + " " + (quant * 2);
    resp1.textContent = Qtdovo;
}
function multi2(){
    let quant = Number(qnt.value);
    let QtdQJ = "Gramas:" + " " + (quant * 50);
    resp2.textContent = QtdQJ;
}

send.onclick = function(){
    multi1();
    multi2();
}