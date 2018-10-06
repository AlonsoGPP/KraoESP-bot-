exports.run = async (client, message, args, Discord, prefix) => {
var perms = message.member.hasPermission("KICK_MEMBERS") || message.member.id === '349257432247173130';
var rainbow = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
const rql = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL)
    .setColor(rainbow)
    .setDescription("<:error:499066389626355714> No tienes permisos para usar el comando"+" `kick`\n"+"<:transparente:499217465461440543> Permisos requeridos:"+"`KICK_MEMBERS`")
	if(!perms) return message.channel.send(rql);
let krao = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
let user = message.mentions.users.first();
const noarg = new Discord.RichEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL)
  .setColor(0x1aed91)
  .setDescription('Muy pocos argumentos dados.\n \nUsa: \n' + "`"+prefix+"kick <user> [razon]"+"`" ) 
  if(!krao) return message.channel.send(noarg);
  if(krao.hasPermission("KICK_MEMBERS")) return message.reply("No puedes expulsar a un moderador!");
  
let razon = args.slice(1).join(' ');
	if (!razon) return message.channel.send('Escriba una razón, `;kick @username [razón]`');
	if (!message.guild.member(user).kickable) return message.reply('No puedo expulsar al usuario mencionado.');

const embed = new Discord.RichEmbed() 
	.addField('Usuario expulsado satisfactoriamente:', `Usuario: **${user.tag}** \nRazón: **${razon}** \nModerador: <@${message.author.id}> ` ) 
	.setAuthor(message.author.username, message.author.avatarURL)
	.setColor(rainbow)
	.setFooter("Comando ejecutado!", client.user.avatarURL)
	.setTimestamp() 
message.channel.send({embed});
   const rip = new Discord.RichEmbed()
    .addField("Ouch! Fuiste Expulsado.", `Servidor: **${message.guild}**\nRazón: **${razon}** <:pensando:495077300006551553>\nModerador: **${message.author.tag}**` )
    .setAuthor(client.user.username, client.user.avatarURL)
    .setColor(rainbow)
    .setFooter("Haaasta pronto!")
	.setTimestamp() 
await	
 user.send(rip).catch(console.log(`[INFO]: Mensaje enviado correctamente a ${user.tag} [msg de kick]`)); 
	
	if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);
 
	await
	message.guild.member(user).kick(razon);
};