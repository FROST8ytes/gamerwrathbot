const { SlashCommandBuilder } = require("discord.js");

const command = new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replied with Pong!");

module.exports = {
    data: command,
    async execute(interaction) {
        await interaction.reply('Pong!');
    },
};