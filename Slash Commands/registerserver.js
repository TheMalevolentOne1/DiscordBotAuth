/* /registerserver *Required Owner*  */
const { SlashCommandBuilder } = require("discord.js");

const name = __filename.split(/\/|\\/).pop().replace('.js', '');

module.exports = {
    data: new SlashCommandBuilder()
    .setName(name)
    .setDescription("Hello World Messager")
    .addStringOption(string => string.setName("servername") .setDescription("Confirm Server Name | Capital Sensitive!") .setRequired(true))
    .addIntegerOption(integer => integer.setName("passcode") .setDescription("Passcode to enter server!") .setRequired(true)),

    async execute(interaction) {
        if (interaction.user.id !== interaction.guild.ownerId) { 
            await interaction.reply({content: "Only the owner can authorise this!", ephemeral: true}); 
            return; 
        }

        const servername = interaction.options.getString("servername");
        if (servername !== interaction.guild.name) {
            await interaction.reply({content: "---**Server Linking Failed!**---\nError: Server Name Invalid! | Server Name is Capital Letter Sensitive", ephemeral: true});
            return;
        }

        const passcode = interaction.options.getInteger("passcode");
        if (passcode.toString().length !== 6) {
            interaction.reply({content: "The passcode must be 6 numbers!", ephemeral: true});
        }
    }
}