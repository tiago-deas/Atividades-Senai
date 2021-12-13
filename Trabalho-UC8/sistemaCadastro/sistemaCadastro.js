/*
A empresa Savinis, focada no desenvolvimento de software de alta performance, contratou você para realizar o desenvolvimento de um sistema
 de cadastro para eventos que será disponibilizado para o público, o que, até então, era realizado manualmente.

Esse sistema terá como função principal a divulgação dos eventos para a comunidade de desenvolvimento, para que sejam consultados de forma
 eficiente.


1 - Se a data do evento for posterior à data atual, permitir o evento; senão, alertar que o cadastro não será permitido por data inválida.

2 - Se o participante for maior de 18 anos, permitir o cadastro; senão, alertar que o cadastro não é permitido pela idade.

3 - Listar participantes e palestrantes por evento.

4 - Enquanto a quantidade de participantes for inferior a 100, permitir cadastro; senão, alertar que o cadastro não será permitido
por ter excedido o limite.

*/

// aviso 

console.log("ATENÇÃO")

// regras para cadastro
let regras = ["O Cadastro só Poderá ser Feito Até o dia 15/12/2021(Quarta Feira)", "Você Deve ter Idade Miníma de 18 Anos."
]

console.log(regras)




// participantes já cadastrados

let participantes = ["Maria", " João", " Marcos", " Paula."]
console.log("Já Inscritos:", "" + participantes);

// palestrantes 

let palestrantes = ["Jéssica", " Luana", " Josué", " Ana."]
console.log("Palestrantes Presentes No Evento:", "" + palestrantes)


// colocando limite de participantes

if (participantes.length >100) {
    console.log("as Inscrições chegaram ao fim, limite de inscritos atingido.")
} else {
    console.log("Inscrições ainda disponiveis, faça já a sua!")
}

// data de hoje

let hoje = new Date()
console.log ("Hoje é Dia " + hoje.getDate() + "/" + (hoje.getMonth () + 1 ) + "/" + hoje.getFullYear())

// dia do evento - condição data 

let dataDoEvento = new Date(2021,12,15)

if (hoje.getTime() > dataDoEvento.getTime()) {
	console.log("Não foi Possível Prosseguir Com a sua Inscrição, Data Limite Atingida.");
} else {
    console.log("Prossiga Com a Inscrição.")
}


// participante

let pessoa = {
    nome: "Mateus,",
    idade: 18
}

// condição idade

if (pessoa.idade <18) {
    console.log("Não Foi Possível Concluir a sua Inscrição, Você não está dentro das condições estabelecidas.")
} else {
    console.log("Parabéns " + pessoa.nome, "Sua Inscrição foi Realizada.")
}








