exports.run = (client, message, args, Discord, prefix) => {
	let miembro = message.mentions.members.first();

	let role = message.guild.roles.find("name", "Muted");
	let perms = message.member.hasPermission("BAN_MEMBERS") || message.member.hasPermission('KICK_MEMBERS') || message.member.id === '349257432247173130';
	let user = message.mentions.users.first();
	var rainbow = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
	const rql = new Discord.RichEmbed()
	.setAuthor(message.author.tag, message.author.avatarURL)
	.setColor(rainbow)
	.setDescription("<:error:499066389626355714> No tienes permisos para usar el comando"+" `unmute`\n"+"<:transparente:499217465461440543> Permisos requeridos:"+"`BAN_MEMBERS` o `KICK_MEMBERS`")
	if(!perms) return message.channel.send(rql);
	const el = new Discord.RichEmbed()
	.setAuthor(message.author.tag, message.author.avatarURL)
	.setColor(0x1aed91)
	.setDescription('Muy pocos argumentos dados.\n \nUsa: \n' + "`" + prefix+"unmute <user>"+"`" ) 
	if(message.mentions.users.size < 1) return message.channel.send(el).catch(console.error);
	
	miembro.removeRole(role).catch(console.error);
	message.channel.send(`**${user.tag}** ha sido desmuteado exitosamente!`);
};