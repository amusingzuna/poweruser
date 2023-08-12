import { Client } from 'discord.js';
import { Player as MusicDaemon, PlayerEvent } from 'discord-player';

import { log } from '@/modules/console';

import events from './events';

class AudioPlayer {
    private daemon: MusicDaemon;

    constructor(client: Client) {
        this.daemon = new MusicDaemon(client);

        log("loading client events");
        
        for (const playerEvent of events) {
            this.daemon.on(playerEvent.type as PlayerEvent, (...args: any[]): any => {
                playerEvent.run(...args);
            });
            log(`loaded player event: ${playerEvent.type}`);
        }
        
        log("finished loading client events");
    }
};

export { AudioPlayer }