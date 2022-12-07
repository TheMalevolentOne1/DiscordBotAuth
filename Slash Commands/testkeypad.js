const { ButtonBuilder, ActionRowBuilder, SlashCommandBuilder } = require("@discordjs/builders");
const { ComponentType, ButtonStyle, ActionRow } = require("discord.js");

const name = __filename.split(/\/|\\/).pop().replace('.js', '');

module.exports = {
    data: new SlashCommandBuilder()
    .setName(name)
    .setDescription("Hi"),
    
    async execute(interaction) {
        const buttons = [];
        const actionrows = [];

        for (let i = 0; i < 9; i++) {
            const button = new ButtonBuilder()
            .setCustomId("keypad"+i)
            .setLabel(`${i}`)
            .setStyle(ButtonStyle.Primary);

            buttons.push(button);

            if (i instanceof [3,6,9]) {
                const actionrow = new ActionRowBuilder().addComponents(buttons[i-2], buttons[i-1], buttons[i]);
                actionrows.push(actionrow);
            }
        }

        console.log(actionrows)

        
    }
}