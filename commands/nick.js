const Discord = require('discord.js');
exports.run = (client, message, args, Discord) => {
    var perms = message.member.hasPermission("MANAGE_NICKNAMES") || message.member.id === '349257432247173130';
    var rainbow = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
    const rql = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL)
    .setColor(rainbow)
    .setDescription("<:error:499066389626355714> No tienes permisos para usar el comando"+" `nick`\n"+"<:transparente:499217465461440543> Permisos requeridos:"+"`MANAGE_NICKNAMES`")
      if(!perms) return message.channel.send(rql);
    let users = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!users) return message.reply("Debe mencionar a alguien.");
      if(users.hasPermission("BAN_MEMBERS")) return message.reply("No puedes modificar el apodo de este miembro!");
    let nickn = args.slice(1).join(' ');
    let user = message.mentions.users.first();
    var rainbow = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
      if(!nickn) return message.channel.send('Escriba un razón, `;ban @username [apodo]`');
    const embed = new Discord.RichEmbed() 
    .addField("`✅`Cambio de Apodo:", `De: **${users.displayName}** => A: **${nickn}**  \nMod:<@${message.author.id}>  ` )
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor(rainbow)
      .setFooter("Comando ejecutado!", client.user.avatarURL)
      .setTimestamp() 
    message.channel.send({embed});
      if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);
    message.guild.member(user).setNickname(nickn);
};