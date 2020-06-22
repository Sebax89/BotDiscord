const Discord = require('discord.js');

const config = require("./config/config.js")

const client = new Discord.Client();
 
const log = console.log
client.on('ready', () => {
  console.log(`Zalogowano jako ${client.user.tag}!`);
});
 
client.on('message', msg => {
  console.log(msg.content, msg.author.tag)
  const { author } = msg

  // Check if user is a bot
  if (author.bot) {
    return
  }

  if (msg.content ) {
    msg.react('🇵🇱'), msg.react('🇺🇸'), msg.react('🇫🇷');
  }
});

 
client.login(config.token)