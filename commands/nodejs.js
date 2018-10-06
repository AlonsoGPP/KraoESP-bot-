exports.run = (client, message, args, Discord) => {
    if (message.member.id === '349257432247173130') {
    let razon = args.join(' ');
    var rainbow = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
    if(!razon) return message.channel.send('Escriba un razón, `;off [razón]`');
    message.channel.send("Apagando BOT... :red_circle:")
    .then(m => {
        const embed = new Discord.RichEmbed() 
        .addField("<:apagado:494690885968199691>Bot apagado satisfactoriamente!:", `Razón: **${razon}**\nTiempo: **10-30 minutos**  ` )
        .setAuthor(message.author.username, message.author.avatarURL)
        .setColor(rainbow)
        .setFooter("Comando ejecutado!", client.user.avatarURL)
        .setTimestamp()
    
        m.edit({embed});

    });

 }};