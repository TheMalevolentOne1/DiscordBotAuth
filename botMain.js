const fs = require("fs");
const path = require("path");

const { Client, Events, GatewayIntentBits, Collection, REST, Routes } = require ('discord.js');
const { token } = require("./config.json");

const client = new Client({ intents: [GatewayIntentBits.DirectMessages, GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]});

client.commands = new Collection();
const commands = [];

const commandsPath = path.join(__dirname, 'Slash Commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

commandFiles.forEach((file) => {
    const command = require(`./Slash Commands/${file}`);
    if (command.data !== undefined) {
        client.commands.set(command.data.name, file)
        commands.push(command.data.toJSON());
    } else {
        console.log("WARNING: NO DATA PROPERTY!");
    }
})

const eventsPath = path.join(__dirname, 'Events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

const rest = new REST({version:'10'}).setToken(token);

(async () => {
    try {
        console.log(`Loading Application Commands: ${commands.length}`);

        await rest.put(
            Routes.applicationCommands('1048563250079485993'),
            {body: commands}
        );

    } catch (error) {
        console.error(error);
    }
})();

client.login(token);