const { SlashCommandBuilder } = require("discord.js");
const dataJson = require("../curses.json");
const availableLanguages = Object.keys(dataJson);

const command = new SlashCommandBuilder()
    .setName("curse")
    .setDescription("Replies with a list of cursed words/phrases in the specified language.")
    .addStringOption(option =>
        option.setName("language")
            .setDescription("The language of the cursed words/phrases.")
            .setRequired(true))
    .addBooleanOption(option =>
        option.setName("private")
            .setDescription("Show reply to everyone?")
            .setRequired(false));

module.exports = {
    data: command,
    async execute(interaction) {
        const replyScope = interaction.options.getBoolean("private") ?? true;
        await interaction.deferReply({ ephemeral: replyScope });
        const lang = interaction.options.getString("language").toLowerCase();
        const langStr = lang[0].toUpperCase() + lang.substring(1);

        if (!availableLanguages.includes(lang)) {
            await interaction.editReply({ content: `Language **${langStr}** is currently not supported.`, ephemeral: replyScope});
            return;
        }

        const words = "```" + dataJson[lang]["words"].join("\n") + "```";
        const result = `Cursed words/phrases for **${langStr}**: \n${words}`;
        await interaction.editReply({ content: result, ephemeral: replyScope });
    },
};
