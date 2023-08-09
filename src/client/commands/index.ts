import { Command } from "@/client/Command";

import ping from "./miscellaneous/ping";
import eval from "./debug/eval";

const index: Array<Command> = [
    ping,
    eval
];

export default index;