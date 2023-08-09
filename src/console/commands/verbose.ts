import { Command } from "@/console/Console";
import prompts from "prompts";

const verbose: Command = new Command({
    name: "verbose",

    run: async ({ console }) => {
        const response = await prompts({
            type: "toggle",
            name: "verbose",
            message: "Verbose output"
        });

        console.verbose = response.verbose;
    }
});

export default verbose;