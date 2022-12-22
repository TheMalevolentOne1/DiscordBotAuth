const { SlashCommandBuilder } = require("discord.js");
const fetch = require('node-fetch')
const name = __filename.split(/\/|\\/).pop().replace('.js', '');

module.exports = {
    data: new SlashCommandBuilder()
    .setName(name)
    .setDescription("dog pic"),

    async execute(interaction) {
        await fetch('https://api.imgflip.com/get_memes', {method: "GET"})
        .then(res => res.json())
        .then(json => {
            const ranNum = Math.floor(Math.random() * 100);

            interaction.reply({content: json.data.memes[ranNum].url})
        })
    }
} 