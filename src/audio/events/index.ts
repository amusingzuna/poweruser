import { PlayerEvent } from "../Event";

import connectionError from "./connectionError";
import errorEvent from "./error";

const index: Array<PlayerEvent> = [
    connectionError,
    errorEvent
];

export default index;