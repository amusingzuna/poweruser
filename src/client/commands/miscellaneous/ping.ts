import { SlashCommandBuilder } from "discord.js";

import { Category, Command } from "@/client/Command";

const ping: Command = new Command({
    data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Pong?"),

    category: [Category.Miscellaneous],
    permissions: [],

    run: async ({ interaction }) => {
        await interaction.reply({ content: "Test" });
    }
})

export default ping;