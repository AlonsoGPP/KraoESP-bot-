const ms = require("ms");
exports.run = (client, message, args, Discord) => {
  var perms = message.member.hasPermission("MANAGE_GUILD") || message.member.id === '349257432247173130';
  var rainbow = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
  const rql = new Discord.RichEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL)
  .setColor(rainbow)
  .setDescription("<:error:499066389626355714> No tienes permisos para usar el comando"+" `lock`\n"+"<:transparente:499217465461440543> Permisos requeridos:"+"`MANAGE_GUILD`")
  if(!perms) return message.channel.send(rql);
  if (!client.lockit) client.lockit = [];
  let time = args.join(' ');
  let validUnlocks = ['release', 'unlock'];
  if (!time) return message.reply('Debes establecer una duración para el bloqueo en horas, minutos o segundos');

  if (validUnlocks.includes(time)) {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: null
    }).then(() => {
      message.channel.sendMessage('Lockdown terminado.');
      clearTimeout(client.lockit[message.channel.id]);
      delete client.lockit[message.channel.id];
    }).catch(error => {
      console.log(error);
    });
  } else {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false
    }).then(() => {
      message.channel.sendMessage(`Canal bloqueado por ${ms(ms(time), { long:true })}`).then(() => {

        client.lockit[message.channel.id] = setTimeout(() => {
          message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
          }).then(message.channel.sendMessage('Lockdown terminado.')).catch(console.error);
          delete client.lockit[message.channel.id];
        }, ms(time));

      }).catch(error => {
        console.log(error);
      });
    });
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ld'],
  permLevel: 2
};

exports.help = {
  name: 'lockdown',
  description: 'This will lock a channel down for the set duration, be it in hours, minutes or seconds.',
  usage: 'lockdown <duration>'
};