/* /registerserver *Required Owner*  */
const sql = require("sqlite3").verbose();

const { SlashCommandBuilder } = require("discord.js");

const name = __filename.split('\\').pop().replace('.js', '');

module.exports = {
    data: new SlashCommandBuilder()
    .setName(name)
    .setDescription("Hello World Messager")
    .addStringOption(string => string.setName("servername") .setDescription("Confirm Server Name | Capital Sensitive!") .setRequired(true)),
    
    async execute(interaction) {
        if (interaction.user.id !== interaction.guild.ownerId) { 
            await interaction.reply({content: "Only the owner can authorise this!", ephemeral: true}); 
            return; 
        }

        if (interaction.options.getString("servername") !== interaction.guild.name) {
            await interaction.reply({content: "---**Server Linking Failed!**---\nError: Server Name Invalid! | Server Name is Capital Letter Sensitive"});
            return;
        }

        const db = new sql.Database('./guildLinkingDatabase.db');

        db.serialize(() => {
            db.run("SELECT * FROM sqlite_master", (err, rows) => {
                console.log(rows);
            });
            db.close();
        });

    }
}