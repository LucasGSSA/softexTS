import { Pessoa } from "./01";

class Aluno extends Pessoa{
    matricula:number;
    constructor(nome:string, idade:number, email:string, numMatricula:number){
        super(nome, idade, email)
        this.matricula = numMatricula;
    }
}

let euAluno = new Aluno("Lucas",18,"lucas@gmaailll",123);

console.log(euAluno.matricula);