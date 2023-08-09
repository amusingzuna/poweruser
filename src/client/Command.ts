import { CommandInteraction, GuildMember, SlashCommandBuilder, PermissionResolvable, EmbedBuilder, EmbedData, APIEmbed, RESTPostAPIApplicationCommandsJSONBody } from "discord.js";
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

type CommandRun = ({ server, interaction, member }: RunArguments) => Promise<void>;

type CommandArguments = {
    data: RESTPostAPIApplicationCommandsJSONBody,
    permissions: PermissionResolvable,
    category: [Category],
    run: CommandRun
};

class Command {
    public data: RESTPostAPIApplicationCommandsJSONBody;
    public permissions: PermissionResolvable;
    public category: [Category];
    public run: CommandRun;

    constructor({ data, permissions, category, run }: CommandArguments) {
        this.data = data;
        this.permissions = permissions;
        this.category = category;
        this.run = run;
    }
};

class CommandEmbed extends EmbedBuilder {
    constructor(embedData?: EmbedData | APIEmbed | undefined) {
        super(embedData)

        this.setColor(0x2fb553);
        this.setTimestamp(Date.now());
    }

    setMember(member: GuildMember) {
        this.setFooter({ text: `Requested by ${member.user.tag}`, iconURL: `https://cdn.discordapp.com/avatars/${member.id}/${member.user.avatar}.png?size=256` });
        return this;
    }
}

export { Command, Category, CommandEmbed };