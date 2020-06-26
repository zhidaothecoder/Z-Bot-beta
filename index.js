// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity('Zhidao code me | zb!info | zb!prefix', {type: 'WATCHING'});
    
});

client.on('message', msg => {
    if (!msg.content.startsWith(process.env.PREFIX) || !msg.guild) return;
    const command = msg.content.split(' ')[0].substr(process.env.PREFIX.length);
    const args = msg.content.split(' ').slice(1).join(' ');
    if (command === 'guide') return msg.channel.send('https://github.com');
    else if (command === 'invite') return msg.channel.send(process.env.INVITE);
    else if (command === 'info') return msg.channel.send("***geez. you're nosy tryna find out more about me.*** I am a multi-purpose discord bot made by Zhidao. I guess if you want a bot he ***might*** help. I wouldn't ask him now, he's coding.");
    else if (command === 'prefix') return msg.channel.send("My prefix is: `zb!`");
});

client.on('message', function(msg){
    if (msg.content === 'zb!code') {
     client.channels.find(x => x.name === 'coders').send('Hello <@&705053625113903104>s, time to code! Dm Zhidao or <#722169162658611220>.', {
  	tts: true
      });
  }
  console.log(msg.author.username);
})

client.on('ready', function(){
  console.log("Bot is now connected");
  client.user.setActivity('Zhidao code me | zb!info | zb!prefix', {type: 'WATCHING'});
  client.channels.find(x => x.name === 'coders').send("Ready and online!");
  
});

client.login(process.env.BOT_TOKEN);
