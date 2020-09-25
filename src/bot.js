require("dotenv").config();

const { Client, Message } = require("discord.js");

const bot_client = new Client();
const PREFIX = "$";

// checking for Ready event
bot_client.on("ready", () => {
  console.log(`${bot_client.user.tag} has logged in.`);
});

bot_client.on("message", (message) => {
  console.log(`[${message.author.tag}]: ${message.content}`);
  if (message.author.bot) return;
  if (message.content.startsWith(PREFIX)) {
    // an intersting effect for the spread op here
    // + for the curly bracketse instead of squares at line 19
    const [CMD_NAME, ...args] = message.content
      .trim()
      .substring(PREFIX.length)
      .split(" ");
    console.log("CMD_NAME", CMD_NAME);
    console.log(args);
  }
});
//connect into discord
bot_client.login(process.env.DISCORDJS_BOT_TOKEN);
