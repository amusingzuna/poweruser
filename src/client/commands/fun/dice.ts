import { SlashCommandBuilder } from "discord.js";

import { Category, Command, CommandEmbed } from "@/client/Command";

import { Random } from "@/modules/random";

const diceMachine = new Random([
    { name: "1", chance: 1 / 6 },
    { name: "2", chance: 1 / 6 },
    { name: "3", chance: 1 / 6 },
    { name: "4", chance: 1 / 6 },
    { name: "5", chance: 1 / 6 },
    { name: "6", chance: 1 / 6 },
]);

const dice: Command = new Command({
    data: new SlashCommandBuilder()
    .setName("dice")
    .setDescription("Roll a dice and see what you get.")
    .toJSON(),

    category: [Category.Fun],
    permissions: [],

    run: async ({ interaction, member }) => {
        const embed: CommandEmbed = new CommandEmbed();
        embed.setMember(member);
        embed.setTitle(`The dice landed on a... \`${diceMachine.pull()?.name}\``);

        await interaction.reply({ embeds: [embed] });
    }
});

export default dice;