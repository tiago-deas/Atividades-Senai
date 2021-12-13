// variavel, seu valor pode ser alterado no decorrer do programa
//let nomeEstudante = "Helena";
//console.log(nomeEstudante);

// constante, seu valor não pode ser alterado
//const nomeDoEstudante = "Helena";
//console.log(nomeDoEstudante);

//Em outras linguagens, portanto, você encontrará algo semelhante a:
//String: nomeEstudante = "Helena";




//let listaDeEstudantes = ["Helena", "Chico", "Mário"];
//let quantidadeDeEstudantes = listaDeEstudantes.length;
//console.log(quantidadeDeEstudantes);




//let listaDeEstudantes = ["Helena", "Chico", "Mário"];
//let quantidadeDeEstudantes =  listaDeEstudantes.length
//for (let indice = 0; indice < quantidadeDeEstudantes;  indice++) {
//const alunoCorrente = listaDeEstudantes[indice];
//console.log(alunoCorrente);
//}




//for (let numero = 1; numero <= 10; numero++) {
//    console.log(numero);
//}




//let listaDeEstudantes = ["Helena", "Chico", "Mário"];
//let    quantidadeDeEstudantes =  listaDeEstudantes.length;
//listaDeEstudantes.push("José");
//console.log(listaDeEstudantes);



/*
let listaDeEstudantes =  ["Helena", "Chico", "Mário", "José", "Maria"];
let    quantidadeDeEstudantes =  listaDeEstudantes.length;
if (quantidadeDeEstudantes < 5) {
    listaDeEstudantes.push("João");
    console.log(listaDeEstudantes);
} else {
    console.log("Não é  possível inserir mais alunos nessa turma");    
}
*/

/*
let hoje  = new Date()
console.log("Hoje é dia" + hoje)

let dataDoEvento = new Date(2021,11,15)

if (hoje.getTime() === dataDoEvento.getTime()) {
    console.log("As Datas São Iguais");
}
else if (hoje.getTime() > dataDoEvento.getTime()) {
	console.log(hoje.toString() + ' maior que ' + dataDoEvento.toString());
}
else {
	console.log(hoje.toString() + ' menor que ' + dataDoEvento.toString());
}
let participantes = ["João", "José", "Marta", "Maria"] 

/*mais para frente podemos trocar por:
while (participantes.length <= 100) {
    function (cadastro)
}
*/
let confirmacao = 1
let participantes = ["Maria", " João"]

if (participantes.length>100) {


    console.log ("Inscrições encerradas. Número de participantes atingiu o limite")
    confirmacao = 0

} else {

    console.log ("Inscrições abertas. Garanta já a sua vaga")
}

//verificando a data do evento

let hoje = new Date()
console.log ("hoje é dia " + hoje.getDate() + "/" + (hoje.getMonth () + 1 ) + "/" + hoje.getFullYear())

// indicação da data do evento (regra 1)
console.log ("insira a data do seu evento:")
//leia a data do evento
let dataDoEvento = new Date(2021,11,5)
console.log ("Seu evento será " + dataDoEvento.getDate() + "/" + (dataDoEvento.getMonth () + 1 ) + "/" + dataDoEvento.getFullYear())

if (hoje.getTime() > dataDoEvento.getTime()) {
	console.log("Acho que não vai rolar... esse dia já passou, amigo!");
    confirmacao = 0
}
else {
	console.log("Pode prosseguir com o cadastro do seu evento :) ");
}

if (confirmacao != 0) {
//  indicação da idade (Regra 2) - somente se a data estiver ok...
    console.log ("Qual a sua idade?")
// leia idade
    let idade = 18
    console.log ("você tem " + idade + " anos")
    if (idade < 18) {
    
    console.log ("Sorry... muito novo para continuar o cadastro.")
    confirmacao = 0
    }
}
// Lista de participantes e palestrantes (Regra 3)
let palestrantes = ["Jessica", "Claudia", "Ana", "Rodrigo"]

// caso tenha algum motivo para não proceder a inscrição, a mensagem irá mudar

if (confirmacao != 0) {
    console.log ("sua inscrição foi realizada com sucesso!!")


    console.log ("Lista de inscritos:")
    console.log (participantes)

    console.log ("lista de palestrantes:")
    console.log (palestrantes)
} else {

    console.log ("Infelizmente não pudemos contar com você desta vez... nos vemos na próxima!")
}

//fim :)
