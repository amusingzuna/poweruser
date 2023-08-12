import { Client } from "discord.js";

class AudioPlayer {
    private client: Client;
    
    constructor(client: Client) {
        this.client = client;
    }
};

export { AudioPlayer }