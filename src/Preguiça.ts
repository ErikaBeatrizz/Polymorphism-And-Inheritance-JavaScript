import { Animal } from "./Animal";
import { NaoAnda } from "./NaoAnda";
import { EmiteSom } from "./EmiteSom";
import { SobeArvore } from "./SobeArvore";

class preguica extends Animal implements NaoAnda, EmiteSom{
    private sobeArvore: boolean;

    constructor(nome: string, idade: number, sobeArvore : boolean){
        super(nome, idade);
        this.sobeArvore = sobeArvore;
    }
    public climb(): void{
        if(this.sobeArvore == true){
            console.log(`${this.nome} sobe na árvore!`);
        }
    }

    public walk(): void {
        console.log(`${this.nome} consegue andar!`);
    }
    public sound(): void {
        console.log(`${this.nome} produz som!`);
    }
}
export{ Preguica }