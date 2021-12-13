let numeroDeAlunos = 10;
// exp for
for (let contador = 0; contador <= numeroDeAlunos; contador++) {
    // console.log(contador)
    
if(contador == 0){
    console.log("O número atual é zero")
}else if(contador % 2 == 0){
    console.log("O número " + contador + " é Par")
}else{ 
    console.log(`O numero ${contador} é Impar`)
}
}

// exp while
let contador = 0;

while(contador <= numeroDeAlunos) {
    
if(contador == 0){
    console.log("O número atual é zero")
}else if(contador % 2 == 0){
    console.log("O número " + contador + " é Par")
}else{ 
    console.log(`O numero ${contador} é Impar`)
}
contador++;
}

// exp for of
let nomeDeAluno = ["Maria", "Francisco", "Ronaldo", "Ana"]

for (let nome of nomeDeAluno)
console.log(`Esta pessoa se chama ${nome}`)