const { Events } = require("discord.js");

module.exports = {
    name: Events.GuildMemberAdd,
    async execute(memberJoin) {
        console.log(memberJoin.guild.id)
    }
}