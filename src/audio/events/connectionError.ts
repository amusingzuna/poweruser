import { error } from '@/modules/console';
import { PlayerEvent } from '../Event';

const connectionError = new PlayerEvent({
    type: "connectionError", // Not sure how to deal with this but it is an accepted type
    
    run: async (queue, err) => {
        error(`${queue.guild.id} | error emitted from the connection: \n${err}`);
    }
});

export default connectionError;