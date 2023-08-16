type CommandRun = (...args: any[]) => Promise<any>;

type PlayerEventArguments = {
    type: string,
    run: CommandRun
};

class PlayerEvent {
    public type: string;
    public run: CommandRun;

    constructor({ type, run }: PlayerEventArguments) {
        this.type = type;
        this.run = run;
    }
};

export { PlayerEvent };