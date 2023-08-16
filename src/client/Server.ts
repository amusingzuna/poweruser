import { Collection, Client } from "discord.js";
import { Console } from "@/console/Console";
import { log } from "@/modules/console";
import { AudioPlayer } from "@/audio/AudioPlayer";

import { Command } from "./Command";

import commandFiles from "./commands";
import eventFiles from "./events";

type ServerArguments = {
    client: Client,
    console: Console,
    commands: Collection<string, Command>,
    audioPlayer: AudioPlayer
};

class Server {
    public client: Client;
    public console: Console;
    public commands: Collection<string, Command>;
    public audioPlayer: AudioPlayer;
    
    constructor({ client, console, commands, audioPlayer }: ServerArguments) {
        log("loading commands");
        
        for (const command of commandFiles) {
            commands.set(command.data.name, command);
            log(`loaded command: ${command.data.name}`);
        };
        
        log("finished loading commands");
        
        log("loading client events");
        
        for (const clientEvent of eventFiles) {
            client.on(clientEvent.type, (...args) => {
                clientEvent.run({ server: this }, ...args);
            });
            log(`loaded client event: ${clientEvent.type}`);
        }
        
        log("finished loading client events");
        
        this.client = client;
        this.console = console;
        this.commands = commands;
        this.audioPlayer = audioPlayer;
    }
    
    login = async (token: string | undefined) => {
        log("logging into client");
        this.client.login(token);
    }
};

export { Server };