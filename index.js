// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();


client.on('message', function(msg){
    if (msg.content === '!elon') {
      msg.channel.send('Mars', {
  	tts: true
      });
  }
  console.log(msg.author.username);
})

client.on('ready', function(){
  console.log("Bot is now connected");

  client.channels.find(x => x.name === 'coders').send("testing");
});


client.login(process.env.BOT_TOKEN);
