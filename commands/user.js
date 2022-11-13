const { SlashCommandBuilder } = require("discord.js");

const command = new SlashCommandBuilder()
    .setName("user")
    .setDescription("Provides information about the user.");

module.exports = {
    data: command,
    async execute(interaction) {
        await interaction.reply(`This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`);
    }
};