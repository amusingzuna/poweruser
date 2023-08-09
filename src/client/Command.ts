import { CommandInteraction, GuildMember, SlashCommandBuilder, PermissionResolvable } from "discord.js";
import { Server } from "./Server";

enum Category {
    Miscellaneous,
    Moderation,
    Fun,
    Music,
    Debug
}

type RunArguments = {
    server: Server,
    interaction: CommandInteraction,
    member: GuildMember
}

type CommandRun = ({server, interaction, member}: RunArguments) => Promise<void>;

type CommandArguments = {
    data: SlashCommandBuilder,
    permissions: PermissionResolvable,
    category: [Category],
    run: CommandRun
};

class Command {
    public data: SlashCommandBuilder;
    public permissions: PermissionResolvable;
    public category: [Category];
    public run: CommandRun;

    constructor({data, permissions, category, run}: CommandArguments) {
        this.data = data;
        this.permissions = permissions;
        this.category = category;
        this.run = run;
    }
};

export { Command, Category };