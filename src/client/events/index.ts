import { ClientEvent } from "@/client/Event";

import ready from "./ready";
import interaction from "./interaction";

const index: Array<ClientEvent> = [
    ready,
    interaction
]

export default index;