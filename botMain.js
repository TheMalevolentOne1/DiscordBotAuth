const fs = require("fs");
const path = require("path");

const { Client, Events, GatewayIntentBits, Collection } = require ('discord.js');
const { token } = require("./config.json");

const client = new Client({ intents: [GatewayIntentBits.DirectMessages, GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]});

client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    if ('data' in command && 'execute' in command) {
        client.commands.set(command.data.name, command);
    } else {
        console.log(`Command; ${filePath} missing essential data or execute!`)
    }
}

client.once(Events.ClientReady, () => {
    console.log("Bot Online!")
})

client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return;
    
    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) {
        console.log("no command"); return;
    }

    try {
        await command.execute(interaction);
    } catch (err) {
        console.log(err);
    }
})

client.login(token);