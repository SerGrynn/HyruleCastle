import launchDuel from "./duel";
import { randomPlayer } from "./efunc";
import boss from "./finalBoss"
const floor : number[] = [1,2,3,4,5,6,7,8,9,10];
export default function Floors() {
    for(let index = 0; index < floor[index]; index = index +1) {
        if (index < 9) {
            console.log(`======== Welcome in floor ${floor[index]} ========`);
            launchDuel()
            if (randomPlayer.hp <= 0) {
                return
            }
        }        
        else if(index = 9) {
            boss()
        }
    }   
}