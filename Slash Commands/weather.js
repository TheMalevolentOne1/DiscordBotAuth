/* /registerserver *Required Owner*  */
const { SlashCommandBuilder } = require("discord.js");
const fetch = require("node-fetch");

const name = __filename.split(/\/|\\/).pop().replace('.js', '');

module.exports = {
    data: new SlashCommandBuilder()
    .setName(name)
    .setDescription("Hello World Messager")
    .addStringOption(string => string.setName("servername") .setDescription("Confirm Server Name | Capital Sensitive!") .setRequired(true))
    .addIntegerOption(integer => integer.setName("passcode") .setDescription("Passcode to enter server!") .setRequired(true)),

    async execute(interaction) {
        fetch("https://api.weatherapi.com/v1/current.json?key=95281c9249424686b87123312220712&q=Unknown&aqi=no", {method:"GET"}, (res) => {
            console.log(res);
        })
    }
} 