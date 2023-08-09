import { log } from "@/modules/console";
import { Command } from "@/console/Console";

const exit: Command = new Command({
    name: "exit",

    run: async () => {
        log("exiting...");
        process.exit();
    }
});

export default exit;