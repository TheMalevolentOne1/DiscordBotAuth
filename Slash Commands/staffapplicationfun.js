const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const name = __filename.split(/\/|\\/).pop().replace('.js', '');

module.exports = {
    data: new SlashCommandBuilder()
    .setName(name)
    .setDescription("fun application thingy"),

    async execute(interaction) {
        if (interaction.bot) return;

        // Q1
        let message = await interaction.channel.send(`Discord Tag: ${interaction.user.tag}`);

        //Q2
        message = await interaction.channel.send(`Discord User ID: ${interaction.user.id}`)


        const questions = ["How old are you?", "What gender are you?", "Time zone?", "Position Applying For?", "Devices used for Discord?"];
        const userAns = []*questions.length;

        for (let i = 4; i < questions.length - 1; i++) {
            console.log("hgpsdjfksoap");
            const questionEmbed = new EmbedBuilder()
            .setTitle(`Question ${i + 1}: ${questions[i]}`)
            .setColor("Gold");

            //Test for question 4
            

            if (i+1 == 4) {
                const optionsRow = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                    .setLabel("Phone")
                    .setEmoji("❌")
                    .setCustomId("phone")
                    .setStyle(ButtonStyle.Primary),

                    new ButtonBuilder()
                    .setLabel("Laptop")
                    .setEmoji("❌")
                    .setCustomId("laptop")
                    .setStyle(ButtonStyle.Primary),
                    
                    new ButtonBuilder()
                    .setLabel("PC")
                    .setEmoji("❌")
                    .setCustomId("pc")
                    .setStyle(ButtonStyle.Primary),
                    
                    new ButtonBuilder()
                    .setLabel("Tablet")
                    .setEmoji("❌")
                    .setCustomId("tablet")
                    .setStyle(ButtonStyle.Primary),

                    new ButtonBuilder()
                    .setLabel("Confirm")
                    .setCustomId("confirm")
                    .setStyle(ButtonStyle.Success)
                );

                await interaction.channel.send({embeds: [questionEmbed], components: [optionsRow]});

                const filter = msgCom => interaction.user.id === msgCom.user.id;

                const comCollector = interaction.channel.createMessageComponentCollector(filter, 2 * 60000);

                await interaction.channel.send({content: "You will have 2 minutes to answer; failure to do so will result in "});

                comCollector.on("collect", msgCom => {
                    console.log(msgCom.message.id)
                });
            
            } else {

                await interaction.channel.send({embeds: [questionEmbed]});

                const filter = msg => interaction.user.id === msg.author.id && !msg.author.bot;

                const collector = interaction.channel.createMessageCollector({filter, time: 5 * 60000});
                
                await interaction.channel.send({content: "You have **2 minutes** to answer; failure to do so will result in application termination"});

                await new Promise(resolve => {
                    collector.on("collect", async msg => {
                        console.log(msg);
                        console.log(i)
                        if (i == 0) {
                            if (isNaN(msg.content)) {
                                await msg.reply({content: "Age must be a number!"});
                                return;
                            } else {
                                userAns[i] = await msg.content;
                                resolve();
                            }
                        }
                    });
                });


                /*
                interaction.user.createDM().then((dmChannel) => {
                    dmChannel.send({components:{questionEmbed}});
                });
                */
            }
        }
    }
} 