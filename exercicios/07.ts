//Crie uma classe Triangulo com os atributos lado1, lado2 e lado3 e um método para verificar se é um triângulo válido.

class Triangulo{
    lado1:number;
    lado2: number;
    lado3: number;
    constructor(lado1:number, lado2:number, lado3: number){
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }
    verificar(): boolean{
        let check:boolean = false;

        let teste1: boolean = ((this.lado2 - this.lado3) < this.lado1 && this.lado1 < (this.lado2 + this.lado3));
        let teste2: boolean = ((this.lado1 - this.lado3) < this.lado2 && this.lado2 < (this.lado1 + this.lado3));
        let teste3: boolean = ((this.lado1 - this.lado2) < this.lado3 && this.lado3 < (this.lado1 + this.lado2));

        if(teste1 && teste2 && teste3) check = true
        return check;
        //| b - c | < a < b + c
        //| a - c | < b < a + c
        //| a - b | < c < a + b
    }
}

const borracha = new Triangulo(1,1,10);

console.log(borracha.verificar());
