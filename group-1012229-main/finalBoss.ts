import launchBossDuel from "./bossDuel";

const readline = require('readline-sync');

export default function boss() {
    const speech = readline.keyInYN('You have successfully completed every floor and are now standing in front of the room where the boss is hiding. Will you enter in or go back now?\n')
    if (speech) {
        console.log("");
        console.log("This world shall know pain.");
        console.log("");
        launchBossDuel();
    }
}