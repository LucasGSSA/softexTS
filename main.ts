let arraizinha = ["lucas","joao","pedro"]


let numero: number = 19;
let nulo: null = null;
let texto: string = "Lucas";
let boleano: boolean = true;
let tipoArray: Array<any> = ["joao","maria"];
let objeto: object = {nome:"joao"};

enum users{
    top,
    mid,
    bot,
};



function verificarPermissao(usuarios:users): void {
    if(usuarios === users.top){
        console.log("Voce é top");
    } else if(usuarios === users.mid){
        console.log("voce é mid");
    } else if(usuarios === users.bot){
        console.log("voce é bot");
    }else{
        console.log("voce ne nada");
    };
}

verificarPermissao(users.bot);