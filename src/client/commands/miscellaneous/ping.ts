import { SlashCommandBuilder } from "discord.js";

import { Category, Command, CommandEmbed } from "@/client/Command";

const ping: Command = new Command({
    data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Pong?")
    .toJSON(),

    category: [Category.Miscellaneous],
    permissions: [],

    run: async ({ interaction, member }) => {
        const embed: CommandEmbed = new CommandEmbed();
        embed.setMember(member);
        embed.setTitle(`pong! \`${interaction.createdTimestamp - Date.now()}ms\``);

        await interaction.reply({ embeds: [embed] });
    }
});

export default ping;