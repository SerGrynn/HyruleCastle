import Floors from './floor';
const readline = require('readline-sync');
const intro = readline.keyInYN('It should be satisfying to overcome a worthy foe... Are you ready to challenge me and my army, hero?\n')
if (intro) {
    console.log("");
    console.log("Do not dissapoint me Hero...");
    console.log("");
    Floors();
} else {
    console.log("Then the Hyrule Castle is mine forever");
}