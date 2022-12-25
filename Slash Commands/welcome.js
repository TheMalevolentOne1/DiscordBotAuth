const { ModalBuilder, ActionRowBuilder, TextInputBuilder } = require("@discordjs/builders");
const { SlashCommandBuilder, TextInputStyle } = require("discord.js");
const name = __filename.split(/\/|\\/).pop().replace('.js', '');
const mod = require("../Modals/welcomeModals")

module.exports = {
    data: new SlashCommandBuilder()
    .setName(name)
    .setDescription("welcome"),

    async execute(interaction) {
        if (interaction.isCommand()) {
            await interaction.showModal(mod.modOne())
        }

        if (interaction.isModalSubmit()) {
            const fields = interaction.fields

            if (!isNaN(fields.getTextInputValue('age'))) {
                
            } else {
                interaction.reply({content: "Age must be a number!"})
            }
        }
    }
}