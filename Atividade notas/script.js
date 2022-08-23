var alunoQtd = 5;
var notaQtd = 4;
let notaBim;
let somaNotaBim = 0;
let media = 0;

function calcula(){

    //calculo da media 

    for(aluno=0; aluno<= alunoQtd; aluno++){

        document.getElementById(`situacao${aluno}`).innerHTML = 'Reprovado';
        
        somaNotaBim = 0;
        for(nota=1; nota<= notaQtd; nota++){
            notaBim =  Number((document.getElementById(`nota${aluno}${nota}`).value));
            somaNotaBim = somaNotaBim + notaBim;
          }
          console.log(somaNotaBim);
          media = somaNotaBim/notaQtd;
          console.log(media);
          document.getElementById(`media${aluno}`).innerText = media;//usa-se esse "` `" assento não aspas 
          if(media>= 6){
            document.getElementById(`situacao${aluno}`).innerHTML = 'Aprovado';
        }

    }
    /*if(media>= 6){
        document.getElementById(`situacao ${aluno}`).innerHTML = 'Aprovado';
    }else{
        document.getElementById(`situacao ${aluno}`).innerHTML = 'Reprovado';
    }

    if(media>= 6){
    document.getElementById('situacao').innerHTML = 'Aprovado';
}else{
    document.getElementById('situacao').innerHTML = 'Reprovado';
}*/

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




