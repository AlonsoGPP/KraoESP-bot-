exports.run = async (client, message, args, Discord, prefix) => {
 var perms = message.member.hasPermission("BAN_MEMBERS") || message.member.id === '349257432247173130';
 var rainbow = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
 const rql = new Discord.RichEmbed()
 .setAuthor(message.author.tag, message.author.avatarURL)
 .setColor(rainbow)
 .setDescription("<:error:499066389626355714> No tienes permisos para usar el comando"+" `ban`\n"+"<:transparente:499217465461440543> Permisos requeridos:"+"`BAN_MEMBERS`")
  if(!perms) return message.channel.send(rql);
  let krao = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(message.isMentioned(message.author)) return message.channel.send(`**${krao.displayName}** ¿Por qué querrías prohibirte? No puedo permitir el auto-daño.`);
  let razon = args.slice(1).join(' ');
const faltaargs = new Discord.RichEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL)
  .setColor(0x1aed91)
  .setDescription('Muy pocos argumentos dados.\n \nUsa: \n' + "`" + prefix+"ban <user> [razon]"+"`" ) 
  if(!krao) return message.channel.send(faltaargs);
  if(krao.hasPermission("BAN_MEMBERS")) return message.reply("No puedes PROHIBIR a un moderador!");
  let user = message.mentions.users.first();
  if(!razon) return message.channel.send('Escriba un razón, `;ban @username [razón]`');
  if (!message.guild.member(user).bannable) return message.reply('No puedo prohibir al usuario mencionado.');
  const embed = new Discord.RichEmbed() 
  .addField("Usuario prohibido satisfactoriamente!:", `Usuario: **${user.tag}** \nRazón: **${razon}** \nModerador: <@${message.author.id}>` )
	.setAuthor(message.author.username, message.author.avatarURL)
	.setColor(rainbow)
	.setFooter("Comando ejecutado!", client.user.avatarURL)
	.setTimestamp() 
message.channel.send({embed});



const cartel = new Discord.RichEmbed()
.addField("RIP! Fuiste prohibido", `Servidor: **${message.guild}**\nRazón: **${razon}** <:pensando:495077300006551553>\nModerador: **${message.author.tag}**` )
.setAuthor(client.user.username, client.user.avatarURL)
.setColor(rainbow)
.setFooter("Haaasta pronto!")
.setTimestamp() 
await
    user.send(cartel).catch(console.log(`Mensaje enviado exitosamente a ${user.tag}`));

    
  if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);
 
  await message.guild.member(user).ban(razon);


};
