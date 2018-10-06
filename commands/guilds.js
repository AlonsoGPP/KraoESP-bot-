exports.run = (client, message, args) => {
    if (message.member.id === '349257432247173130') {
    let miembros = 0;
    let Servidores = client.guilds.map(serv => `${serv.name} (${serv.id}), Miembros: ${serv.memberCount}.`).join('\n-');
    client.guilds.some(serv => {
        miembros2 = miembros + serv.memberCount;
    });
message.channel.send("```fix\n"+"Lista de servidores:\n"+"-"+ Servidores + "\n```" );
} else {
    message.channel.send(` <:error:499066389626355714> Comando disponible solo para el creador del bot.`);
}

};

