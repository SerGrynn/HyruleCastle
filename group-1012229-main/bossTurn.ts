const readlin = require('readline-sync');
const choice = ['Attack','Heal'];
import { randomPlayer } from "./efunc";
import { randomBosses } from "./efunc";

export function bossTurn () {
    const displayChoice = readlin.keyInSelect(choice, 'Which action do you want to do?');
    if (displayChoice === 0) {
        console.log();
        console.log("----------------------------------------------\n");
        console.log(`You attacked the enemy, removing him ${randomPlayer.str}HP\n`);
        randomBosses.hp = randomBosses.hp - randomPlayer.str;
    } else if (displayChoice === 1) {
        randomPlayer.hp = Heal(randomPlayer.hp, randomPlayer.hp_max);
    }
    console.log(`${randomBosses.name} attacked you and made you lose ${randomBosses.str} HP\n`)
    randomPlayer.hp = randomPlayer.hp - randomBosses.str;
}

export function Heal (hp : number, hp_max : number) : number {
    const heal = hp_max / 2;
    console.log();
    console.log("----------------------------------------------\n");
    console.log('You healed yourself')
    console.log();
    if (heal + hp > hp_max) {
        return hp_max;
    } else {
        return heal + hp
    }
}