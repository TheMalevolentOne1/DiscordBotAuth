const { SlashCommandBuilder } = require("discord.js");

const name = __filename.split('\\').pop().replace('.js', '');

module.exports = {
    data: new SlashCommandBuilder()
    .setName(name)
    .setDescription("Hello World Messager"),
    
    async execute(interaction) {
        await interaction.reply({content: "Hello World", ephemeral: true});
    }
}