const { SlashCommandBuilder } = require("discord.js");

const command = new SlashCommandBuilder()
    .setName("server")
    .setDescription("Provides information about the server.");

module.exports = {
    data: command,
    async execute(interaction) {
        await interaction.reply(`This server is ${interaction.guild.name} and has ${interaction.guild.memberCount} members.`);
    }
};