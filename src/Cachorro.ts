import { Animal } from "./Animal";
import { NaoAnda } from "./NaoAnda";
import { EmiteSom } from "./EmiteSom";

class Cachorro extends Animal implements NaoAnda, EmiteSom {
    
    constructor(nome: string, idade: number){
        super(nome, idade);
    }
    public anda(): void {
        console.log (`${this.nome} não pode andar!`);
    }
    public som(): void {
        console.log (`${this.nome} não emite som`);
    }
}

export { Cachorro }