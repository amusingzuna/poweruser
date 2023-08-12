import { ChatInputCommandInteraction, Events, GuildMember } from "discord.js";

import { Category } from "@/client/Command";
import { ClientEvent } from "@/client/Event";
import { log } from "@/modules/console";

const ready: ClientEvent = new ClientEvent({
    type: Events.InteractionCreate,

    async run({ server }, interaction: ChatInputCommandInteraction) {
        if(!interaction?.isChatInputCommand()) return;

        if(interaction.guild) {
            try {
                let member: GuildMember = interaction.member as GuildMember;
    
                let command = server.commands.get(interaction.commandName);
    
                if(!command)
                    return log(`VERIFY -> this interaction does not have a matching command: ${interaction.commandName}`);
    
                if(!member?.permissions.has(command.permissions))
                    return interaction.reply({ content: "You do not have the permissions required to execute this command!", ephemeral: true });
    
                if(command.category.includes(Category.Debug) && member.id !== process.env.OWNER_ID)
                    return interaction.reply({ content: "This is a developer-only command!", ephemeral: true });
    
                if(command.category.includes(Category.Music) && !member.voice.channel)
                    return interaction.reply({ content: "You need to be in a voice channel to use music commands!", ephemeral: true });
    
                await command.run({ server, interaction, member, });
            } catch (err) {
                console.trace(err);
                await interaction.reply({ content: "There was an error while executing this command. Report this to <@205656342789226496>", ephemeral: true });
            };
        } else {
            await interaction.reply({ content: "Commands in DMs are not supported yet." });
        };
    }
});

export default ready;