const { Events } = require("discord.js");

module.exports = {
    name: Events.ClientReady,
    once: true,
    async execute(client) {
        client.user.setStatus('invisible');
        console.log(`${client.user.tag} Online!`);
    }
}