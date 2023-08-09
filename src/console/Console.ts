import prompts, { Answers } from "prompts";
import { log } from "@/modules/console";
import { Command } from "./Command";
import commands from "./commands";

class Console {
    private commands: Command[] = commands;

    public verbose: boolean = false;

    constructor() {
        log("created console");
    }

    respond = async (response: Answers<any>): Promise<any> => {
        const command: Command | undefined = this.commands.find((command) => command.name == response.command);

        if(!response.command)
            return;

        if (!command)
            return log("this command does not exist");

        return command.run({ console: this });
    }

    load = async () => {
        while(true) {
            const response = await this.prompt();
            this.respond(response);

            if(this.verbose)
                console.log(response);
        }
    }

    prompt = () => {
        return prompts({
            type: "text",
            name: "command",
            message: "server",
        }, {
            onCancel() {
                log("use the exit command to close the server!");
            }
        });
    }
};

export { Console, Command };