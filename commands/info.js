exports.run = (client, message, args, Discord) => {
    if (message.member.id === '349257432247173130') {
    var rainbow = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6) 
    const embed = new Discord.RichEmbed()
    .addField(`Estadisticas del bot:`,`•N° de servidores: **${client.guilds.size}**\n•N° de canales: **${client.channels.size}**\n•N° de miembros: **${client.users.size}**  `)
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor(rainbow)
    .setFooter("Información Del Bot!", client.user.avatarURL)
    .setTimestamp() 
 message.channel.send({embed});
}};