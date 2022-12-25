const { ActionRowBuilder, ButtonBuilder } = require("@discordjs/builders");
const { Events } = require("discord.js");

module.exports = {
    name: Events.GuildMemberAdd,
    async execute(memberJoin) {
        if (memberJoin.user.bot) { return }

        const welcomeActionRow = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setCustomId('introsetup')
            .setLabel("Introduction ")
        )
    }
}