const { Client, GatewayIntentBits, EmbedBuilder, ChannelType } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const TOKEN = 'TOKEN';
const PREFIX = '!';

client.once('ready', () => {
    console.log(`Connecté en tant que ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
    if (!message.content.startsWith(PREFIX) || message.author.bot) return;

    const command = message.content.slice(PREFIX.length).trim();

    if (command === 'channels') {
        const textChannels = message.guild.channels.cache
            .filter(channel => channel.type === ChannelType.GuildText)
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(channel => `${channel.name}`)
            .join('\n');

        const embed = new EmbedBuilder()
            .setTitle('Salons texte (ordonnés)')
            .setDescription(textChannels.slice(0, 4000))
            .setColor(0x00bfff)
            .setFooter({ text: `Total : ${message.guild.channels.cache.filter(c => c.type === ChannelType.GuildText).size} salons texte` });

        message.channel.send({ embeds: [embed] });
    }
});

client.login(TOKEN);
