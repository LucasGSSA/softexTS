//Crie uma classe ContaBancaria com os atributos saldo e numeroConta e métodos para depositar, sacar e verificar o saldo

class ContaBancaria{
    saldo: number;
    numeroConta: number;

    constructor(numeroConta:number){
        this.numeroConta = numeroConta;
        this.saldo = 0;
    };

    depositar(valor:number){
        this.saldo += valor;
    };

    sacar(valor:number){
        this.saldo -= valor;
    };
    verificarSaldo(){
        console.log(this.saldo);
    }
}

const minhaConta = new ContaBancaria(1);
minhaConta.verificarSaldo();
minhaConta.depositar(1000);
minhaConta.sacar(10);
minhaConta.verificarSaldo();