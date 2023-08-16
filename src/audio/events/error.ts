import { error } from '@/modules/console';
import { PlayerEvent } from '../Event';

const errorEvent = new PlayerEvent({
    type: "error", // Not sure how to deal with this but it is an accepted type
    
    run: async (queue, err) => {
        error(`${queue.guild.id} | error emitted from queue: \n${err}`);
    }
});

export default errorEvent;