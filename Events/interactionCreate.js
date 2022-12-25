const { Events } = require('discord.js');

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {

		if (interaction.isCommand()) {
			const command = interaction.client.commands.get(interaction.commandName);

			if (!command) {
				console.error(`No command matching ${interaction.commandName} was found.`);
				return;
			}

			try {
				await command.execute(interaction);
			} catch (error) {
				console.error(`Error executing ${interaction.commandName} ${error}`);
			}
		}

		if (interaction.isModalSubmit()) {
			if (['intromodal', 'personalmodal'].includes(interaction.customId)) {
				const welcome = require("../Slash Commands/welcome")

				welcome.execute(interaction)
			}
		}

		if (interaction.isButton()) {
			if (['rolessetup','introsetup'].includes(interaction.customId)) {
				const welcome = require("../Slash Commands/welcome")

				welcome.execute(interaction)
			}
		}

	}
};