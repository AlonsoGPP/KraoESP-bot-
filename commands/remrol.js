exports.run = (client, message, args, Discord) => {
	let miembro = message.mentions.members.first();
	let nombrerol = args.slice(1).join(' ');
  
	let role = message.guild.roles.find("name", nombrerol) || message.mentions.roles.first();
	let perms = message.member.hasPermission("MANAGE_ROLES") || message.member.id === '349257432247173130';
	var rainbow = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
	const rql = new Discord.RichEmbed()
	.setAuthor(message.author.tag, message.author.avatarURL)
	.setColor(rainbow)
	.setDescription("<:error:499066389626355714> No tienes permisos para usar el comando"+" `remover`\n"+"<:transparente:499217465461440543> Permisos requeridos:"+"`MANAGE_ROLES`")
	if(!perms) return message.channel.send(rql);
	 
	if(message.mentions.users.size < 1) return message.reply('Debe mencionar a un miembro.').catch(console.error);
	if(!nombrerol) return message.channel.send('Escriba el nombre del rol a agregar, `;addrol @username [rol]`');
	if(!role) return message.channel.send(`Rol no encontrado en el servidor, Total de roles buscados: **${message.guild.roles.size}**`);
	
	miembro.removeRole(role).catch(console.error);
	message.channel.send(`El rol **${role.name}** fue removido correctamente de **${miembro.user.username}**.`);
  
  };
