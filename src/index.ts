import { Client, Collection, GatewayIntentBits } from "discord.js";
import { config } from "dotenv";

import { Console } from "@/console/Console";
import { Server } from "@/client/Server";
import { Command } from "@/client/Command";
import { AudioPlayer } from "@/audio/AudioPlayer";

config();

const commands: Collection<string, Command> = new Collection();
const console: Console = new Console();
const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.DirectMessages
]});
const audioPlayer = new AudioPlayer(client);

const server: Server = new Server({ client, console, commands, audioPlayer });
server.login(process.env.DISCORD_TOKEN);