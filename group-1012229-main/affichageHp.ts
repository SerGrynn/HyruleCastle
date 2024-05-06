export default function showHp (hp : number, hp_max : number) {
    let startConcatination : string = "HP: ";
    let endConcatination : string = ` ${hp}/${hp_max}`;
    var diff = hp_max - hp;
    for(let index = 0; index < hp_max; index = index + 1) {
        if (index >= diff) {
            startConcatination += "I";
        } else {
            startConcatination += "_";
        }
    }
    startConcatination += endConcatination;
    return startConcatination;
}