function calcula(){

//calculo da media 

let nota1 = Number((document.getElementById('nota01').value));
let nota2 = Number((document.getElementById('nota02').value));
let nota3 = Number((document.getElementById('nota03').value));
let nota4 = Number((document.getElementById('nota04').value));

let media = (nota1 + nota2 + nota3 +nota4)/4;
document.getElementById('media').innerText = media;

if(media>= 6){
    document.getElementById('situacao').innerHTML = 'Aprovado';
}else{
    document.getElementById('situacao').innerHTML = 'Reprovado';
}

    
let nota11 = Number((document.getElementById('nota11').value));
let nota12 = Number((document.getElementById('nota12').value));
let nota13 = Number((document.getElementById('nota13').value));
let nota14 = Number((document.getElementById('nota14').value));

let media1 = (nota11 + nota12 + nota13 +nota14)/4;
document.getElementById('media1').innerText = media1;


if(media1>= 6){
    document.getElementById('situacao1').innerHTML = 'Aprovado';
}else{
    document.getElementById('situacao1').innerHTML = 'Reprovado';
}

let nota21 = Number((document.getElementById('nota21').value));
let nota22 = Number((document.getElementById('nota22').value));
let nota23 = Number((document.getElementById('nota23').value));
let nota24 = Number((document.getElementById('nota24').value));

let media2 = (nota21 + nota22 + nota23 +nota24)/4;
document.getElementById('media2').innerText = media2;


if(media1>= 6){
    document.getElementById('situacao2').innerHTML = 'Aprovado';
}else{
    document.getElementById('situacao2').innerHTML = 'Reprovado';
}

let nota31 = Number((document.getElementById('nota31').value));
let nota32 = Number((document.getElementById('nota32').value));
let nota33 = Number((document.getElementById('nota33').value));
let nota34 = Number((document.getElementById('nota34').value));

let media3 = (nota31 + nota32 + nota33 +nota34)/4;
document.getElementById('media3').innerText = media3;


if(media3>= 6){
    document.getElementById('situacao3').innerHTML = 'Aprovado';
}else{
    document.getElementById('situacao3').innerHTML = 'Reprovado';
}

let nota41 = Number((document.getElementById('nota41').value));
let nota42 = Number((document.getElementById('nota42').value));
let nota43 = Number((document.getElementById('nota43').value));
let nota44 = Number((document.getElementById('nota44').value));

let media4 = (nota41 + nota42 + nota43 +nota44)/4;
document.getElementById('media4').innerText = media4;


if(media4>= 6){
    document.getElementById('situacao4').innerHTML = 'Aprovado';
}else{
    document.getElementById('situacao4').innerHTML = 'Reprovado';
}

let nota51 = Number((document.getElementById('nota51').value));
let nota52 = Number((document.getElementById('nota52').value));
let nota53 = Number((document.getElementById('nota53').value));
let nota54 = Number((document.getElementById('nota54').value));

let media5 = (nota51 + nota52 + nota53 +nota54)/4;
document.getElementById('media5').innerText = media5;


if(media5>= 6){
    document.getElementById('situacao5').innerHTML = 'Aprovado';
}else{
    document.getElementById('situacao5').innerHTML = 'Reprovado';
}


mediaSala = (media + media1 + media2 + media3 + media4 + media5)/6;

document.getElementById('mediaSala').innerHTML = mediaSala;

    console.log('vou valcular');

    //Medias de forma crescente 

    let aluno0 = document.getElementById('aluno0').value;
    let aluno1 = document.getElementById('aluno1').value;
    let aluno2 = document.getElementById('aluno2').value;
    let aluno3 = document.getElementById('aluno3').value;
    let aluno4 = document.getElementById('aluno4').value;
    let aluno5 = document.getElementById('aluno5').value;

    document.getElementById('primeiroNome').innerText = aluno0;
    document.getElementById('segundoNome').innerText = aluno1;
    document.getElementById('terceiroNome').innerText = aluno2;
    document.getElementById('quartoNome').innerText = aluno3;
    document.getElementById('quintoNome').innerText = aluno4;
    document.getElementById('sextoNome').innerText = aluno5;

   



}




