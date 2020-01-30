const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor('Pika Pi Pikachu !!!')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
        .setImage(`https://cdn.discordapp.com/attachments/672359221249048578/672457725027942410/3pgLmPuR_400x400.jpg`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pika', 'pikaçu', 'pikaçhu'],
  permLevel: 0
};

exports.help = {
  name: 'pikachu',
  description: 'Şanlı bayrağımızın gifini atar.',
  usage: 'tr'
};
