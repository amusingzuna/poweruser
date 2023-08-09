import { SlashCommandBuilder } from "discord.js";

import { Category, Command, CommandEmbed } from "@/client/Command";

import { Random } from "@/modules/random";

const coinflipRandomizer = new Random([
    { name: "heads", chance: 0.495 },
    { name: "the side", chance: 0.01 },
    { name: "tails", chance: 0.495 }
]);

const coinflip: Command = new Command({
    data: new SlashCommandBuilder()
    .setName("coinflip")
    .setDescription("Flip a coin and test your luck.")
    .toJSON(),

    category: [Category.Fun],
    permissions: [],

    run: async ({ interaction, member }) => {
        const embed: CommandEmbed = new CommandEmbed();
        embed.setMember(member);
        embed.setTitle(`Your coin landed on... \`${coinflipRandomizer.pull()?.name}\``);

        await interaction.reply({ embeds: [embed] });
    }
});

export default coinflip;