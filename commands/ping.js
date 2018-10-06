exports.run = (client, message, args, Discord) => {
	let ping = Math.floor(message.client.ping);
 
		message.channel.send(`Obteniendo ping!.`).then(mens => {
			const embed = new Discord.RichEmbed()
			.setColor(0x1aed91)
			.setDescription(`:incoming_envelope: Ping Mensajes: \`${Math.floor(mens.createdTimestamp - Date.now())}ms\` \n :satellite_orbital: Ping DiscordAPI: \`${ping} ms\``) 
			setTimeout( function(){mens.edit(`Obteniendo ping!..`)}, 50 );
			setTimeout( function(){mens.edit(`Obteniendo ping!...`)}, 150 );
			setTimeout( function(){mens.edit(embed)}, 250 );		
	})	
					
	
};