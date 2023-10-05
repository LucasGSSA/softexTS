//Crie uma classe Produto com os atributos nome, preco e quantidade e métodos para calcular o valor total (preço * quantidade).

class Produto{
    nome:string;
    preco:number;
    quantidade:number;
    constructor(nome:string, preco:number, quantidade:number){
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    valorTotal(quantidade:number){
        let total:number = 0;
        total = this.preco * quantidade;
        console.log(`O valor total de ${quantidade} de ${this.nome} é R$${total}`);
        
    }
};

const laranja = new Produto("Laranja cravo",0.38,20);
laranja.valorTotal(10)