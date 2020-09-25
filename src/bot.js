require("dotenv").config();

const { Client, Message } = require("discord.js");

const bot_client = new Client();

// checking for Ready event
bot_client.on("ready", () => {
  console.log(`${bot_client.user.tag} has logged in.`);
});

bot_client.on("message", (message) => {
  console.log(`[${message.author.tag}]: ${message.content}`);
  // That's would prevent an infinite replay for hello case below
  if (message.author.bot) return;
  if (message.content === "hello") {
    //send a message back to the channel
    message.channel.send("hello");
  }
});
//connect into discord
bot_client.login(process.env.DISCORDJS_BOT_TOKEN);
