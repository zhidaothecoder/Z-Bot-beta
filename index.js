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
    else if (command === 'test') return msg.channel.send(exampleEmbed);
});

client.on('message', function(msg){
    if (msg.content === 'zb!code') {
     client.channels.find(x => x.name === 'coders').send('Time to code!');
     return msg.channel.send('Done.');
  }
  console.log(msg.author.username);
})

client.on('ready', function(){
  console.log("Bot is now connected");
  client.user.setActivity('Zhidao code me | zb!info | zb!prefix', {type: 'WATCHING'});
  client.channels.find(x => x.name === 'zhidao').send("Ready and online!");
  
});

const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Some title')
	.setURL('https://discord.js.org/')
	.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
	.setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
    .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
    
client.login("NzI1NDYxOTg5NTIyMDE0MzI5.XvPFIA.e7WfcpCnVS5NkZvRVsylzkwcsnM");
