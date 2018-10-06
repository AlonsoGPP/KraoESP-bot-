exports.run = (client, message, args, Discord, prefix) => {
	let commandsp = message.content.split(' ')[1];
	var autor = message.member
	var apodo = message.guild.members.get(message.author.id).displayName
	var foto = message.author.avatarURL
	var creador = client.users.get('349257432247173130');
	var rainbow = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
	
if(!commandsp){
	const help = new Discord.RichEmbed()
	.setAuthor(client.user.username, client.user.avatarURL)
    .setColor(0x00d496)
    .setFooter(`${apodo} |  V.1.5.0 , creado por ${creador.tag}`, foto)
    .setThumbnail(client.user.avatarURL)
	.setTimestamp()
	.addField('¿Necesitas ayuda?', 'Toda la información sobre el bot aquí:')
	.addField('Información:', `Mi prefix es **${prefix}**\nPara ver mis comandos solo escribe **${prefix}cmds**\nPara ver un comando detalladamente escribe **${prefix}help [comando]**\nSi quieres añardirme a tu servidor: **[http://bit.ly/KraoESP-BOT](http://bit.ly/KraoESP-BOT)**`, true)
	message.channel.send(help);
} else {


	let command = commandsp.toLowerCase()
	if(command === 'ban'){
		if(autor.hasPermission('BAN_MEMBERS') || message.member.id === '349257432247173130'){
			const embed1 = new Discord.RichEmbed()
			.setAuthor(client.user.username, client.user.avatarURL)
			.setColor(rainbow)
			.setDescription(`Comando: **${command}**\n\nDescripción: Prohibir a un miembro. \nUso: \`${prefix}${command} <User> <Razón>\`\nPermisos: \`BAN_MEMBERS\``)
			.setTimestamp()
			.setFooter(apodo, foto )
			message.channel.send(embed1)
		} else {
			message.channel.send(`<:error:499066389626355714> No tienes permiso para ver el comando **${command}**`)
		}
	}
	if(command === 'kick'){
		if(autor.hasPermission('KICK_MEMBERS') || message.member.id === '349257432247173130'){
			const embed2 = new Discord.RichEmbed()
			.setAuthor(client.user.username, client.user.avatarURL)
			.setColor(rainbow)
			.setDescription(`Comando: **${command}**\n\nDescripción: Expulsar a un miembro. \nUso: \`${prefix}${command} <user> <Razón>\`\nPermisos: \`KICK_MEMBERS\``) 
			.setTimestamp()
			.setFooter(apodo, foto )
			message.channel.send(embed2)
		} else {
			message.channel.send(`<:error:499066389626355714> No tienes permiso para ver el comando **${command}**`)
		}
	} 
	if(command === 'limpiar'){
		if(autor.hasPermission('KICK_MEMBERS')|| message.member.id === '349257432247173130'){
			const eb = new Discord.RichEmbed()
			.setAuthor(client.user.username, client.user.avatarURL)
			.setColor(rainbow)
			.setDescription(`Comando: **${command}**\n\nDescripción: Borrar un número de mensajes. \nUso: \`${prefix}${command} <N# de mensajes>\`\nPermisos: \`KICK_MEMBERS\``)
			.setTimestamp()
			.setFooter(apodo, foto )
			message.channel.send(eb)
		} else {
			message.channel.send(`<:error:499066389626355714> No tienes permiso para ver el comando **${command}**`)
		}
	}
	if(command === 'lock'){
		if(autor.hasPermission('MANAGE_GUILD') || message.member.id === '349257432247173130'){
			const lp = new Discord.RichEmbed()
			.setAuthor(client.user.username, client.user.avatarURL)
			.setColor(rainbow)
			.setDescription(`Comando: **${command}**\n\nDescripción: Bloquear un canal en caso de flood masivo.\nUso: \`${prefix}${command} <Tiempo>\`\nPermisos: \`MANAGE_GUILD\` \n Puedes poner ${prefix}lock \`release\` o \`unlock\` para desbloquearlo.`)
			.setTimestamp()
			.setFooter(apodo, foto )
			message.channel.send(lp)
		} else {
			message.channel.send(`<:error:499066389626355714> No tienes permiso para ver el comando **${command}**`)
		}
	}
	if(command === 'nick'){
		if(autor.hasPermission('MANAGE_NICKNAMES') || message.member.id === '349257432247173130'){
			const nk = new Discord.RichEmbed()
			.setAuthor(client.user.username, client.user.avatarURL)
			.setColor(rainbow)
			.setDescription(`Comando: **${command}**\n\nDescripción: Cambiar el apodo de un miembro.\nUso: \`${prefix}${command} <user> <apodo>\`\nPermisos: \`MANAGE_NICKNAMES\``)
			.setTimestamp()
			.setFooter(apodo, foto )
			message.channel.send(nk)
		} else {
			message.channel.send(`<:error:499066389626355714> No tienes permiso para ver el comando **${command}**`)
		}	
	}
	if(command === 'r'){
		if(autor.hasPermission('ADMINISTRATOR') || message.member.id === '349257432247173130'){
			const r = new Discord.RichEmbed()
			.setAuthor(client.user.username, client.user.avatarURL)
			.setColor(rainbow)
			.setDescription(`Comando: **${command}**\n\nDescripción: Decir todo lo que se escriba.\nUso: \`${prefix}${command} <texto> \`\nPermisos: \`ADMINISTRATOR\``)
			.setTimestamp()
			.setFooter(apodo, foto )
			message.channel.send(r)
		} else {
			message.channel.send(`<:error:499066389626355714> No tienes permiso para ver el comando **${command}**`)
		}
	}
	if(command === 'remover'){
		if(autor.hasPermission('MANAGE_ROLES') || message.member.id === '349257432247173130'){
			const remo = new Discord.RichEmbed()
			.setAuthor(client.user.username, client.user.avatarURL)
			.setColor(rainbow)
			.setDescription(`Comando: **${command}**\n\nDescripción: Remover el rol de un miembro.\nUso: \`${prefix}${command} <user> <rol> \`\nPermisos: \`MANAGE_ROLES\``)
			.setTimestamp()
			.setFooter(apodo, foto )
			message.channel.send(remo)
		} else {
			message.channel.send(`<:error:499066389626355714> No tienes permiso para ver el comando **${command}**`)
		}
	}
	if(command === 'roladd'){
		if(autor.hasPermission('MANAGE_ROLES') || message.member.id === '349257432247173130'){
			const rola = new Discord.RichEmbed()
			.setAuthor(client.user.username, client.user.avatarURL)
			.setColor(rainbow)
			.setDescription(`Comando: **${command}**\n\nDescripción: Asignar un rol a un miembro.\nUso: \`${prefix}${command} <user> <rol> \`\nPermisos: \`MANAGE_ROLES\``)
			.setTimestamp()
			.setFooter(apodo, foto )
			message.channel.send(rola)
		} else {
			message.channel.send(`<:error:499066389626355714> No tienes permiso para ver el comando **${command}**`)
		}
	} 
	if(command === 'tempmute'){
		if(autor.hasPermission('KICK_MEMBERS') || autor.hasPermission('BAN_MEMBERS') || message.member.id === '349257432247173130'){
			const temp = new Discord.RichEmbed()
			.setAuthor(client.user.username, client.user.avatarURL)
			.setColor(rainbow)
			.setDescription(`Comando: **${command}**\n\nDescripción: Silenciado temporal.\nUso: \`${prefix}${command} <user> <tiempo> <razon> \`\nPermisos: \`KICK_MEMBERS O BAN_MEMBERS\``)
			.setTimestamp()
			.setFooter(apodo, foto )
			message.channel.send(temp)
		} else {
			message.channel.send(`<:error:499066389626355714> No tienes permiso para ver el comando **${command}**`)
		}
	}
	if(command === 'unmute'){
		if(autor.hasPermission('KICK_MEMBERS')|| autor.hasPermission('BAN_MEMBERS') || message.member.id === '349257432247173130'){
			const temp = new Discord.RichEmbed()
			.setAuthor(client.user.username, client.user.avatarURL)
			.setColor(rainbow)
			.setDescription(`Comando: **${command}**\n\nDescripción: Quitar el silenciado a un miembro.\nUso: \`${prefix}${command} <user>  \`\nPermisos: \`BAN_MEMBERS O KICK \``)
			.setTimestamp()
			.setFooter(apodo, foto )
			message.channel.send(temp)
		} else {
			message.channel.send(`<:error:499066389626355714> No tienes permiso para ver el comando **${command}**`)
		}
	}
	if(command === '8ball'){
		if(autor.hasPermission('SEND_MESSAGES') || message.member.id === '349257432247173130'){
			const ball = new Discord.RichEmbed()
			.setAuthor(client.user.username, client.user.avatarURL)
			.setColor(rainbow)
			.setDescription(`Comando: **${command}**\n\nDescripción: Pregunta algo al bot!\nUso: \`${prefix}${command} <Pregunta>  \`\nPermisos: \`NINGUNO\``)
			.setTimestamp()
			.setFooter(apodo, foto )
			message.channel.send(ball)
		} else {
			message.channel.send(`<:error:499066389626355714> No tienes permiso para ver el comando **${command}**`)
		}
	} 
}};