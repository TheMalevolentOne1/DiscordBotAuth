const { SlashCommandBuilder } = require("discord.js");
const fetch = require('node-fetch')
const wait = require('node:timers/promises').setTimeout;
const name = __filename.split(/\/|\\/).pop().replace('.js', '');

module.exports = {
    data: new SlashCommandBuilder()
    .setName(name)
    .setDescription("dog pic"),

    async execute(interaction) {
        await fetch('https://v2.jokeapi.dev/joke/Any', {method: "GET"})
        .then(res => res.json())
        .then(json => {
            if (json.setup != "") {
                interaction.reply({content: json.setup});
                interaction.channel.send({content: json.delivery});
            } else {
                console.log(json)
            }
        })
    }
} 