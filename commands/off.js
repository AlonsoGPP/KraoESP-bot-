exports.run = async (client, message, args, Discord) => {
    if (message.member.id === '349257432247173130') {
        let perms = message.member.hasPermission("SEND_MESSAGES");
        if(!perms) return message.channel.send("**" + message.author.username + "**"+ "," + " no parece que puedas usar eso.");
    let razon = args.join(' ');
    if(!razon) return message.channel.send('Porfavor escriba un razón , `;off [razón]`');
    var rainbow = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6)
    
    message.channel.send("Apagando BOT... ")
    .then(m => {
        const embed = new Discord.RichEmbed() 
        .addField("<:apagado:494690885968199691>Bot apagado satisfactoriamente!:", `Razón: **${razon}**\nTiempo: **10-30 minutos**  ` )
        .setAuthor(message.author.username, message.author.avatarURL)
        .setColor(rainbow)
        .setFooter("Comando ejecutado!", client.user.avatarURL)
        .setTimestamp()
    
        m.edit({embed});

    });

    await message.channel.send(' 󠀀󠀀').then(mens => {mens.delete(1)});
 
   await
    console.error(`Se a cortado la señal por Alonso`)
    function Crash() {client.destroy().then(() => {process.exit();});};
    setTimeout(Crash, 1000);   
}   

};
