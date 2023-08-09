import { Command } from "@/client/Command";

import ping from "./miscellaneous/ping";
import eval from "./debug/eval";
import coinflip from "./fun/coinflip";

const index: Array<Command> = [
    ping,
    eval,
    coinflip
];

export default index;