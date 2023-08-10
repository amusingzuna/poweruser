import { Command } from "@/client/Command";

import ping from "./miscellaneous/ping";
import eval from "./debug/eval";
import coinflip from "./fun/coinflip";
import dice from "./fun/dice";

const index: Array<Command> = [
    ping,
    eval,
    coinflip,
    dice
];

export default index;