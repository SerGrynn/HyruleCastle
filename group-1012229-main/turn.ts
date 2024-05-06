import { randomPlayer } from "./efunc";
import { randomEnemy } from "./efunc";
const readlin = require('readline-sync');
const choice = ['Attack','Heal'];

export function Turn () {
    const displayChoice = readlin.keyInSelect(choice, 'Which action do you want to do?');
    if (displayChoice === 0) {
        console.log();
        console.log("----------------------------------------------\n");
        console.log(`You attacked the enemy, removing him ${randomPlayer.str}HP\n`);
        randomEnemy.hp = randomEnemy.hp - randomPlayer.str;
    } else if (displayChoice === 1) {
        randomPlayer.hp = Heal(randomPlayer.hp, randomPlayer.hp_max);
    }
    console.log(`The ${randomEnemy.name} attacked you and made you lose ${randomEnemy.str} HP\n`)
    randomPlayer.hp = randomPlayer.hp - randomEnemy.str;
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