const { Events } = require("discord.js");

module.exports = {
    name: Events.GuildMemberAdd,
    async execute(memberJoin) {
        if (memberJoin.user.bot) { return }

        memberJoin.roles.add()
    }
}