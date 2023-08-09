import { ActivityType, Events } from "discord.js";

import { ClientEvent } from "@/client/Event";
import { log } from "@/modules/console";

const ready: ClientEvent = new ClientEvent({
    type: Events.ClientReady,

    async run({ server }) {
        if (process.env.NODE_ENV == "development") {
            log("silent - in development mode");
        }
     
        server.client.user?.setActivity("Romanian Final Boss Theme Song", { type: ActivityType.Listening });

        log("ready!");

        server.console.load();
    }
});

export default ready;