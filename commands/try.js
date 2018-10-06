exports.run = (client, message, args) => {
    let id = args.join(' ');
    if (message.member.id === '349257432247173130') {
        let a = client.guilds.get(id)
    let miembros = 0;
    let channel4 = a.channels.map(serv => `${serv.name} (${serv.id})`).join('\n-');
    client.guilds.some(serv => {
        miembros2 = miembros + serv.memberCount;
    });
message.channel.send("```fix\n"+"Lista de servidores:\n"+"-"+ channel4 + "\n```" );
} else {
    message.channel.send(` <:error:499066389626355714> Comando disponible solo para el creador del bot.`);
}};
