import { Cavalo } from "./Cavalo";
import { Cachorro } from "./Cachorro";
import { Preguica } from "./Preguiça";
import { NaoPodeAndar } from "./NaoPodeAndar";
import { EmiteSom } from "./EmiteSom";
import { SobeArvore } from "./SobeArvore";
import { Animal } from "./Animal";
import { NaoAnda } from "./NaoAnda";

function sobe (animal: SobeArvore){
    animal.sobe();
}
function som (animal: EmiteSom){
    animal.som ();
}
function anda (animal: NaoAnda){
    animal.anda ();
}

const cavalo = new Cavalo('Pé de pano', 15);
const cachorro = new Cachorro('Ravena', 2);
const Preguiça = new Preguica('Teteo', 5, true);

console.log(' # Cavalo #')
console.log(`O cavalo ${Cavalo.nome} tem ${horse.idade} anos!`);
som(Cavalo);
anda (Cavalo);


console.log(' # Cachorro #')
console.log(`O cachorro ${cachorro.nome} tem ${cachorro.idade} anos!.`);
som(Cachorro);
anda(Cachorro);

console.log(' # Preguiça # ')
console.log(`A preguiça ${Preguiça.nome} tem ${Preguiça.idade} anos!`);
sobe(Preguica);
som(Preguica);
anda(Preguica);