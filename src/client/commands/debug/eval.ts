import { SlashCommandBuilder } from "discord.js";
import * as ts from "typescript";
import { inspect } from "util";

import { Category, Command, CommandEmbed } from "@/client/Command";

const ping: Command = new Command({
    data: new SlashCommandBuilder()
    .setName("eval")
    .setDescription("Evaluate typescript code at runtime.")
    .addStringOption(option => 
        option.setName('code')
          .setDescription('The code to run.')
          .setRequired(true)
    ).toJSON(),

    category: [Category.Debug],
    permissions: [],

    run: async ({ interaction, member }) => {
        let input = interaction.options.get("code")?.value as string;

        const embed = new CommandEmbed();
        embed.setTitle("Evaluation");
        embed.setMember(member);
        embed.addFields(
            { name: "Input", value: `\`\`\`js\n${input}\`\`\`` }
        );
        
        let transpiled = ts.transpile(input);

        try {
            let result = eval(transpiled);

            if(typeof result != "string")
                result = inspect(result);

            embed.setColor(0x00ff00);
            embed.addFields(
                { name: "Result", value: `\`\`\`js\n${result}\`\`\``}
            );

            await interaction.reply({ embeds: [embed] });
        } catch(err) {
            embed.setColor(0xff0000);
            embed.addFields(
                { name: "Result", value: `\`\`\`js\n${err}\`\`\`` }
            );

            await interaction.reply({ embeds: [embed] });
        };
    }
});

export default ping;