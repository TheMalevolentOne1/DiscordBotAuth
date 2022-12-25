const { ModalBuilder, ActionRowBuilder, TextInputBuilder } = require("@discordjs/builders");
const { TextInputStyle } = require('discord.js');

exports.modOne = function() {
    const model = new ModalBuilder()
        .setCustomId('intro1')
        .setTitle('Welcome To The Server!')
        .setComponents(
            new ActionRowBuilder()
            .addComponents(
                new TextInputBuilder()
                .setCustomId('name')
                .setLabel("What is your name?")
                .setStyle(TextInputStyle.Short)
                .setRequired(true) 
            ),
            
            new ActionRowBuilder()
            .addComponents(
                new TextInputBuilder()
                .setCustomId('age')
                .setLabel("How old are you?")
                .setStyle(TextInputStyle.Short)
                .setRequired(true)
            ),

            new ActionRowBuilder()
            .addComponents(
                new TextInputBuilder()
                .setCustomId('likes')
                .setLabel("What are your likes?")
                .setStyle(TextInputStyle.Paragraph)
                .setRequired(false)
            ),

            new ActionRowBuilder()
            .addComponents(
                new TextInputBuilder()
                .setCustomId('dislikes')
                .setLabel('What are your dislikes?')
                .setStyle(TextInputStyle.Paragraph)
                .setRequired(false)
            ),

            new ActionRowBuilder()
            .addComponents(
                new TextInputBuilder()
                .setCustomId('additional')
                .setLabel('Any Additional Information?')
                .setStyle(TextInputStyle.Paragraph)
                .setRequired(false)
            )
        )

    return model;
}