let dol = document.querySelector('#dol')
let send = document.querySelector('#send')
let resp1 = document.querySelector('#um')
let resp2 = document.querySelector('#dois')
let resp3 = document.querySelector('#cinco')
let resp4 = document.querySelector('#dez')

function multi1(){
    let dolar = Number(dol.value);
    let um = ((dolar * (1/100)) + (dolar));
    resp1.textContent = um.toFixed(2);
}
function multi2(){
    let dolar = Number(dol.value);
    let um = ((dolar * (2/100)) + (dolar));
    resp2.textContent = um.toFixed(2);
}
function multi3(){
    let dolar = Number(dol.value);
    let um = ((dolar * (5/100)) + (dolar));
    resp3.textContent = um.toFixed(2);
}
function multi4(){
    let dolar = Number(dol.value);
    let um = ((dolar * (10/100)) + (dolar));
    resp4.textContent = um.toFixed(2);
}

send.onclick = function(){
    multi1();
    multi2();
    multi3();
    multi4();
}