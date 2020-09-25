require("dotenv").config();

const { Client, Message } = require("discord.js");

const bot_client = new Client();
const PREFIX = "$";

// checking for Ready event
bot_client.on("ready", () => {
  console.log(`${bot_client.user.tag} has logged in.`);
});

bot_client.on("message", async (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith(PREFIX)) {
    // an intersting effect for the spread op here
    // + for the curly bracketse instead of squares at line 19
    const [CMD_NAME, ...args] = message.content
      .trim()
      .substring(PREFIX.length)
      //match all white spaces
      .split(/\s+/);

    if (CMD_NAME === "kick") {
      if (!message.member.hasPermission("KICK_MEMBERS"))
        return message.reply("You do not have permissions to use that command");
      if (args.length === 0)
        return message.reply(
          "Please, provide an ID to that dude who you want to KICKKK OUT 😈"
        );
      //cashe ~= map
      const member = message.guild.members.cache.get(args[0]);
      if (member) {
        member
          .kick()
          .then((member) => {
            message.channel.send(`${member} was the IMPOSTER 🤫`);
          })
          .catch((err) =>
            message.channel.send(
              `Ooh! it seems that ${member} is a VIP member,I don't have any permission to kick her away. You need to do that on yourown my Queen 😓🤷`
            )
          );
      } else {
        message.channel.send("Pardon!! This user is nooot found SADLY");
      }
    } else if (CMD_NAME === "ban") {
      if (!message.member.hasPermission("BAN_MEMBERS"))
        return message.reply("You do not have permissions to use that command");
      if (args.length === 0)
        return message.reply(
          "Please, provide an ID to that dude who you want to BANNED 😈"
        );
      try {
        const user = await message.guild.members.ban(args[0]);
        message.channel.send("Hoorayy,User has been banned successfully");
      } catch (err) {
        message.channel.send(
          "Sorryyy, An error occured. Either I do not have permissions or the user was not found."
        );
      }
    }
  }
});
//connect into discord
bot_client.login(process.env.DISCORDJS_BOT_TOKEN);
