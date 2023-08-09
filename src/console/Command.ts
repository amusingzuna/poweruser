import { Console } from "./Console";

type RunArguments = {
    console: Console,
    [key: string | number | symbol]: any
};

type CommandRun = ({server}: RunArguments) => Promise<any> | any;

type CommandArguments = {
    name: string,
    run: CommandRun
}

class Command {
    public name: string;
    public run: CommandRun;

    constructor({name, run}: CommandArguments) {
        this.name = name;
        this.run = run;
    }
};

export { Command };