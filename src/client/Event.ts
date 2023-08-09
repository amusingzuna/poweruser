import { Server } from "./Server";

type RunArguments = {
    server: Server
};

type CommandRun = ({server}: RunArguments, ...args: any[]) => Promise<any>;

type ClientEventArguments = {
    type: string,
    run: CommandRun
};

class ClientEvent {
    public type: string;
    public run: CommandRun;

    constructor({type, run}: ClientEventArguments) {
        this.type = type;
        this.run = run;
    }
};

export { ClientEvent };