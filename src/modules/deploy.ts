import { REST, RESTPostAPIApplicationCommandsJSONBody, Routes } from "discord.js";
import { config } from "dotenv";

import { log } from "./console";
import commands from "@/client/commands";

config();

const token: string | null = process.env.DISCORD_TOKEN || null;
const clientId: string | null = process.env.CLIENT_ID || null;

if(token == null)
    throw new Error(".env file is missing or has no DISCORD_TOKEN id");

if(clientId == null)
    throw new Error(".env file is missing or has no CLIENT_ID id");

log("sending REST API update");

const deploy = async (rest: REST, requestData: RESTPostAPIApplicationCommandsJSONBody[]) => {
    await rest.put(
        Routes.applicationCommands(clientId),
        { body: requestData }
    );

    log(`successfully updated REST API`);
};

const rest: REST = new REST().setToken(token);
const restRequest: RESTPostAPIApplicationCommandsJSONBody[] = [];

log(`deploying ${commands.length} commands`);
for (const command of commands) {
    log(`deploying command: ${command.data.name}`);
    restRequest.push(command.data);
};

deploy(rest, restRequest);