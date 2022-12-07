const { EmbedBuilder } = require("@discordjs/builders");
const { SlashCommandBuilder, Embed, Colors } = require("discord.js");

const name = __filename.split(/\/|\\/).pop().replace('.js', '');

module.exports = {
    data: new SlashCommandBuilder()
    .setName(name)
    .setDescription("Info about the bot!"),

    async execute(interaction) {
        const infoEmbed = new EmbedBuilder()
        .setTitle("Server Link Bot Information!")
        .setColor(Colors.Gold)
        .setThumbnail(interaction.client.user.displayAvatarURL({format: 'png', size: 2048}))
        .setFields({name: 'field1', value: "Text1", inline: true});

        await interaction.reply({embeds: [infoEmbed]});
    }
}