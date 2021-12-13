var listaDePeca = ["Filtro de Ar","Amortecedor","Motor"];

if (listaDePeca.length <10){
    //é possivel cadastrar 
    console.log ("É Possivel cadastrar mais peças")
} else {
    console.log("Não Tem Mais Espaço na Lista")
}

let peso = 50;
if (peso<100){
    console.log("A Peça Deve Pesar No Minimo 100g")
 } else {
        console.log("A Peça possui peso adequado")
    }

    let nomePeca ="Disco de Freio";
    if (nomePeca.length>3){
        console.log("Nome de Peça Esta Adequado para o Cadastro")
    } else if (nomePeca.lenght ==0) {
        console.log("O Nome da Peça Não Pode Ser vazio")
    } else {
        console.log("o Nome da peça deve ter mais que 3 caracteres")
    }

    switch(nomePeca.length){
        Case 0:
        console.log("O Nome da peça não pode ser vazio")
        break;

        Case 1:
        Case 2:
        Case 3:
        
        console.log("O Nome Da Peça Deve Conter Mais de Três Caracteres")
        break;
    }
