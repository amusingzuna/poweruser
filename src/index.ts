import { Client, Collection, GatewayIntentBits } from "discord.js";
import { config } from "dotenv";

import { Console } from "@/console/Console";
import { Server } from "@/client/Server";
import { AudioPlayer } from "@/audio/AudioPlayer";
import { Command } from "@/client/Command";

config();

const commands: Collection<string, Command> = new Collection();
const console: Console = new Console();
const client: Client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.DirectMessages
]});
const audioPlayer: AudioPlayer = new AudioPlayer(client);

const server: Server = new Server({ client, console, commands, audioPlayer });
server.login(process.env.DISCORD_TOKEN);