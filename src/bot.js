require("dotenv").config();

const { Client, Message } = require("discord.js");

const bot_client = new Client();
const PREFIX = "$";

// checking for Ready event
bot_client.on("ready", () => {
  console.log(`${bot_client.user.tag} has logged in.`);
});

bot_client.on("message", (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith(PREFIX)) {
    // an intersting effect for the spread op here
    // + for the curly bracketse instead of squares at line 19
    const [CMD_NAME, ...args] = message.content
      .trim()
      .substring(PREFIX.length)
      //match all white spaces
      .split(/\s+/);
  }
});
//connect into discord
bot_client.login(process.env.DISCORDJS_BOT_TOKEN);
