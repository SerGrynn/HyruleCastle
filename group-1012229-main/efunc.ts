import players from "./pinter";
import enemies from "./einter";
import bosses from "./binter";
const fs = require("fs");

export default function efunct(path: string)
{
    const efs = fs.readFileSync(path, "utf-8");
    const eJson: enemies[] = JSON.parse(efs);

    let random = (Math.floor(Math.random()* eJson.length));

    return (eJson[random]);
}
export let randomPlayer: players = efunct("./players.json");
export let randomEnemy: enemies = efunct("./enemies.json");
export let randomBosses: bosses = efunct("./bosses.json");

