// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity('Zhidao code me', {type: 'WATCHING'});
});
client.on('message', msg =>  {
if (message.content.startsWith(`${prefix}ping`)) {
	message.channel.send('Pong.');
} else if (message.content.startsWith(`${prefix}beep`)) {
	message.channel.send('Boop.');
}
});
client.on('message', msg => {
    if (!msg.content.startsWith(process.env.PREFIX) || !msg.guild) return;
    const command = msg.content.split(' ')[0].substr(process.env.PREFIX.length);
    const args = msg.content.split(' ').slice(1).join(' ');
    if (command === 'guide') return msg.channel.send('https://github.com');
    else if (command === 'invite') return msg.channel.send(process.env.INVITE);
    else if (command === 'info') return msg.channel.send('***work in progress***');
});

client.login(process.env.BOT_TOKEN);
