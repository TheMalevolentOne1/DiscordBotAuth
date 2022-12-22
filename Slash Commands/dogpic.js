/* /registerserver *Required Owner*  */
const { SlashCommandBuilder } = require("discord.js");
const fetch = require('node-fetch')
const name = __filename.split(/\/|\\/).pop().replace('.js', '');

module.exports = {
    data: new SlashCommandBuilder()
    .setName(name)
    .setDescription("dog pic"),

    async execute(interaction) {
        await fetch('https://dog.ceo/api/breeds/image/random', {method: "GET"})
        .then(res => res.json())
        .then(json => interaction.reply(json.message))
    }
} 