//Crie uma função chamada saudacao que exiba a mensagem "Olá, mundo!" no console quando for chamada.
// Escreva uma função chamada dobro que aceite um parâmetro num e exiba o dobro desse número no console.
// Crie uma função chamada mostrarNumeros que receba dois parâmetros, inicio e fim. Essa função deve exibir todos os números inteiros no intervalo de inicio a fim (inclusive) no console.
// Escreva uma função chamada verificarPar que aceite um número como entrada e exiba no console se o número é par ou não.
// Crie uma função chamada imprimirLista que aceite um array como parâmetro e exiba cada elemento desse array no console, um por um.

function saudacao():void{
    console.log("olá mundo");
}

function dobro(numero: number):void{
    console.log(numero*2);
}

function mostrarNumeros(numInicio: number, numFim: number): void{
    for(numInicio; numInicio <= numFim; numInicio++){
        console.log(numInicio);
    }
}

function verificarPar(num: number):boolean{
    if(num%2 == 0) return true;
    else return false;
}

let arrays: Array<any> = ["lucas",8,true];

function imprimirLista(array: Array<any>): void{
    for(let i=0; i<array.length; i++){
        console.log(array[i]);
    }
}
imprimirLista(arrays);

// Escreva uma função chamada calcularMedia que receba um array de números como parâmetro e calcule a média desses números. Não é necessário exibir o resultado, apenas retorne o valor da média.
// Crie uma função chamada maiorNumero que receba um array de números como parâmetro e exiba o maior número presente no array no console.
// Escreva uma função chamada contarVogais que aceite uma string como parâmetro e conte quantas vogais (a, e, i, o, u) ela contém. Exiba o resultado no console.
// Crie uma função chamada imprimirTabuada que aceite um número como entrada e exiba a tabuada desse número de 1 a 10 no console.
// Escreva uma função chamada verificarPrimo que receba um número como parâmetro e exiba no console se o número é primo ou não.

