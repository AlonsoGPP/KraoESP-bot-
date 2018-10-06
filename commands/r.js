exports.run = (client, message, args, Discord) => {
  let perms = message.member.hasPermission("ADMINISTRATOR") || message.member.id === '349257432247173130';
  var rainbow = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
  const rql = new Discord.RichEmbed()
 .setAuthor(message.author.tag, message.author.avatarURL)
 .setColor(rainbow)
 .setDescription("<:error:499066389626355714> No tienes permisos para usar el comando"+" `r`\n"+"<:transparente:499217465461440543> Permisos requeridos:"+"`ADMINISTRATOR`")
  if(!perms) return message.channel.send(rql);


  let say = args.join(' ');
message.delete();  
message.channel.send(`${say}`);
};   