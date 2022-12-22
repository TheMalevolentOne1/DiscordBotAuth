//http://shibe.online/api/shibes?count=[1-100]&urls=[true/false]&httpsUrls=[true/false]

const { SlashCommandBuilder } = require("discord.js");
const fetch = require('node-fetch')
const name = __filename.split(/\/|\\/).pop().replace('.js', '');

module.exports = {
    data: new SlashCommandBuilder()
    .setName(name)
    .setDescription("dog pic"),

    async execute(interaction) {
        await fetch('http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true', {method: "GET"})
        .then(res => res.json())
        .then(json => {
            interaction.reply({content: json[0]})
        })
    }
} 