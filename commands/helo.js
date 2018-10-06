exports.run = (client, message, args, Discord) => {
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
    } else{
    if(commandsp === )
    }
}