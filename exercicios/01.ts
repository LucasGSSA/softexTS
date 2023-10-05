
export class Pessoa {
    nome:string;
    idade: number;
    email:string;
    constructor(nome: string, idade: number, email: string) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }
}

const eu = new Pessoa("Lucas", 18, "lucas@gmail.com")

