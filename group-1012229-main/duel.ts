import showHp from "./affichageHp";
import { Turn } from "./turn";
import { randomEnemy } from "./efunc";
import { randomPlayer } from "./efunc";
const readline = require('readline-sync');

export default function launchDuel () {
console.log(`Your enemy is a ${randomEnemy.name}. He currently has ${randomEnemy.str} strength and ${randomEnemy.hp} HP.`);
while(randomPlayer.hp > 0 || randomEnemy.hp > 0) {
    console.log(`${randomEnemy.name}:`);
    console.log(showHp(randomEnemy.hp, randomEnemy.hp_max));
    console.log(' ');
    console.log(`${randomPlayer.name}:`);
    console.log(showHp(randomPlayer.hp, randomPlayer.hp_max));
    console.log("");
    console.log("---Options----------");
    Turn()
    if (randomPlayer.hp <= 0) {
        randomEnemy.hp = 0;
        console.log("----------------------------------------------\n")
        console.log("YOU DIED\n")
        console.log("You disappoint me,Hero\n");
        
    } else if (randomEnemy.hp <= 0) {
        randomEnemy.hp = randomEnemy.hp_max;
        console.log("You finished this floor and shall go to the next one");
        readline.question("======Press enter to continue======\n");
        return
    }
}
}