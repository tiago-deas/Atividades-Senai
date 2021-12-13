let numeroAlunos = 10;

for (let contador = 0; contador <= numeroAlunos; contador++) {
    //console.log(contador)

 if(contador == 0){
     console.log("O número atual é zero")
 }   else if(contador % 2 == 0){
     console.log("O Número" + contador + " é Par")
 } else{
     console.log(`O número ${contador} é Impar`)
 }
}