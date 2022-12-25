const { ModalBuilder, ActionRowBuilder, TextInputBuilder } = require("@discordjs/builders");
const { TextInputStyle } = require('discord.js');

exports.modOne = () => {
    const modalIntro = new ModalBuilder()
        .setCustomId('intromodal')
        .setTitle('Introductionary Questions')
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

    return modalIntro;
}

exports.modTwo =() => {
    const modalRoles = new ModalBuilder()
        .setCustomId('personalmodal')
        .setTitle('Personal Questions')
        .setComponents(
            new ActionRowBuilder()
            .addComponents(
                new TextInputBuilder()
                .setCustomId('gender')
                .setLabel("What is your gender?")
                .setStyle(TextInputStyle.Short)
                .setRequired(true) 
            ),
            
            new ActionRowBuilder()
            .addComponents(
                new TextInputBuilder()
                .setCustomId('pronouns')
                .setLabel("How are your pronouns?")
                .setStyle(TextInputStyle.Short)
                .setRequired(true)
            ),

            new ActionRowBuilder()
            .addComponents(
                new TextInputBuilder()
                .setCustomId('sexuality')
                .setLabel("What is your sexuality?")
                .setStyle(TextInputStyle.Short)
                .setRequired(true)
            )
        )

    return modalRoles;
}