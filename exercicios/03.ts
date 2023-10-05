//Crie uma classe Retangulo com os atributos largura e altura e métodos para calcular a área e o perímetro.
class Retangulo {
    largura: number;
    altura:number;
    area:number
    constructor(largura: number, altura:number){
        this.largura = largura;
        this.altura = altura;
        this.area = largura*altura;
    };   
}

let terrenoCasa01 = new Retangulo(12,13);

console.log(terrenoCasa01.area);
