import showHp from "./affichageHp";
import { bossTurn } from "./bossTurn";
import { randomBosses } from "./efunc";
import { randomPlayer } from "./efunc";
const readline = require('readline-sync');



export default function launchBossDuel () {
    console.log(`Your enemy is ${randomBosses.name}. He currently has ${randomBosses.str} strength and ${randomBosses.hp} HP.`);
    while(randomPlayer.hp > 0 || randomBosses.hp > 0) {
        console.log(`${randomBosses.name}:`);
        console.log(showHp(randomBosses.hp, randomBosses.hp_max));
        console.log(' ');
        console.log(`${randomPlayer.name}:`);
        console.log(showHp(randomPlayer.hp, randomPlayer.hp_max));
        console.log("");
        console.log("---Options----------");
        bossTurn()
        if (randomPlayer.hp <= 0) {
            randomBosses.hp = 0;
            console.log("----------------------------------------------\n");
            console.log("YOU DIED\n");
            console.log("You disappoint me,Hero\n");
            
        } else if (randomBosses.hp <= 0) {
            readline.question("======Press enter to continue======\n");
            console.log('----------CONGRATULATION----------\n');
            console.log('Thank you so much Hero, you saved the Hyrule Castle!\n');
            return
        }
    }
}