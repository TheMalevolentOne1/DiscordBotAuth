const { SlashCommandBuilder } = require("discord.js");
const fetch = require('node-fetch')
const name = __filename.split(/\/|\\/).pop().replace('.js', '');

module.exports = {
    data: new SlashCommandBuilder()
    .setName(name)
    .setDescription("get avatar"),

    async execute(interaction) {
        await interaction.reply({content: interaction.user.displayAvatarURL({size: 4096})})
    }
} 