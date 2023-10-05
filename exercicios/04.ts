//Crie uma classe Círculo com o atributo raio e métodos para calcular a área e a circunferência.

class Circulo{
    raio: number;
    area: number;
    circunferencia: number;
    PI:number = 3.1415;
    constructor(raio: number){
        this.raio = raio;
        this.area = this.PI * (this.raio * this.raio)
        this.circunferencia = 2*this.PI*this.raio;
    }
}

let piscina = new Circulo(3);
console.log(piscina.area);
console.log(piscina.circunferencia);

