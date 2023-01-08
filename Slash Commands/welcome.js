const { ActionRowBuilder } = require("@discordjs/builders");
const { SlashCommandBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const name = __filename.split(/\/|\\/).pop().replace('.js', '');
const mod = require("../Modals/welcomeModals")

module.exports = {
    data: new SlashCommandBuilder()
    .setName(name)
    .setDescription("welcome"),

    async execute(interaction) {

        if (interaction.isCommand()) {
            const welcomeRow = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                .setCustomId('rolessetup')
                .setLabel("Roles Setup ❌")
                .setStyle(ButtonStyle.Danger),

                new ButtonBuilder()
                .setCustomId('introsetup')
                .setLabel("Introduction Setup ❌")
                .setStyle(ButtonStyle.Danger)
            );
            

            interaction.user.createDM().then(dmchannel => {
                dmchannel.messages.fetch({limit: 100}).then(async msgs => { msgs.forEach(async msg => { if (msg.content.includes("Welcome")) { await interaction.reply({content: "Server Setup has already been sent.", ephemeral: true}); return; } else { 
                    await interaction.user.send({content: "**Welcome to the server!**\nPlease click the buttons below to begin\n", components: [welcomeRow]});
                    await interaction.reply({content: 'Setup Sent!'});
                }})})
            })
                
        }

        if (interaction.isButton()) {
            if (interaction.customId === "introsetup") {
                await interaction.showModal(mod.modOne());
            } else if (interaction.customId == "rolessetup") {
                await interaction.showModal(mod.modTwo());
            }
        }

        if (interaction.isModalSubmit()) {
            if (interaction.customId === "rolessetup") {

            }

            if (interaction.customId === "intromodal") {
                const fields = interaction.fields;
                interaction.user.createDM().then(async (dm) => {
                    let c = 0;
                    fields.getTextInputValue('name').split('').forEach((letter) => { if (!isNaN(letter) && c === 0) { dm.send({content: "names can not have numbers in them!" }); c++; }}); //sends dms matching the number of numbers in the name *error*

                    if (isNaN(fields.getTextInputValue('age'))) {
                        dm.send({content: "Age must be a **number**", ephemeral: true});
                        return;
                    }

                    
                })

                
            }
        }
    }
}