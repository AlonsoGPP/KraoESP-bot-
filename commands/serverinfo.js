exports.run = (client,message, args, Discord )=>{
    let srvowner = message.guild.owner.user.tag
    let idcomp = args.join(' ');
    var perms = message.member.hasPermission("KICK_MEMBERS") || message.member.id === '349257432247173130';
    const raquel = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL)
    .setColor([66, 185, 244])
    .setDescription("<:error:499066389626355714> No tienes permisos para usar el comando"+" `serverinfo`\n"+"<:transparente:499217465461440543> Permisos requeridos:"+"`KICK_MEMBERS`")
     if(!perms) return message.channel.send(raquel);
    var fechaYhora = new Date().toLocaleString().split(' ');
    let srvcount = message.guild.memberCount
    var humandscount = message.guild.members.filter(member => !member.user.bot).size;
    var bots = message.guild.members.filter(botss => botss.user.bot).size;
    var idsvr = message.guild.id;
    var rolesn = message.guild.roles.size;
    var useron = message.guild.members.filter(member => member.presence.status === 'online').size;
    var regio = message.guild.region;
    const emojiList = message.guild.emojis.map((e, x) => (x + ' = ' + e) + ' | ' +e.name).join('\n')
    const emojiListsimple = message.guild.emojis.map(e=>e.toString()).join(" ");
    var meh = message.guild.emojis.size
    var listrol = message.guild.roles.map(roles => `${roles.name}`).join(', ');
    
    if(idcomp.length > 3){
        var proc = client.guilds.get(idcomp);
        var pa = proc.roles.map(roles => `${roles.name}`).join(', ')
        const ang = new Discord.RichEmbed()
        .setAuthor(`Información del servidor: ${proc.name} desde un servidor ext.`,message.author.avatarURL)
        .setColor([66, 185, 244])
        .setFooter(client.user.username + `| V.1.3.9  `, `${client.user.avatarURL}`)
        .setThumbnail(proc.iconURL)
        .setTimestamp()
        .addField(`Dueño del servidor`, `${proc.owner.user.tag}`,true)
        .addField(`ID del dueño:`, `${proc.owner.id}`, true)
        .addField(`ID srv:`, `${proc.id}`, true)
        .addField(`Miembros:`, `${proc.memberCount}`, true)
        .addField(`Humanos:`, `${proc.members.filter(member => !member.user.bot).size}`, true)
        .addField(`Bots:`, `${proc.members.filter(botss => botss.user.bot).size}`, true)
        .addField(`Total de Roles`, `${proc.roles.size}`, true)
        .addField(`Región:`, `${proc.region}`, true)
        .addField(`Canales:`, `${message.guild.channels.size}`, true)
        .addField(`Creado en:`, `${proc.createdAt.toLocaleDateString()}`, true)
        .addField(`Roles:`, `${pa}`)
        message.channel.send(ang);
        const p = new Discord.RichEmbed()
        .setColor([66, 185, 244])
        .setDescription(`**Emojis:**\n${proc.emojis.map(e=>e.toString()).join(" ")}`)
        message.channel.send(p);
    }else{
    
    
    if (emojiListsimple.length > 1023){
        const info3 = new Discord.RichEmbed()
        .setAuthor(`Información del servidor: ${message.guild.name}`,message.author.avatarURL)
        .setColor([66, 185, 244])
        .setFooter(client.user.username + `| V.1.3.9  `, `${client.user.avatarURL}`)
        .setThumbnail(message.guild.iconURL)
        .setTimestamp()
        .addField(`Dueño del servidor`, `${srvowner}`,true)
        .addField(`ID del dueño:`, `${message.guild.owner.id}`, true)
        .addField(`ID srv:`, `${idsvr}`, true)
        .addField(`Miembros:`, `${srvcount}`, true)
        .addField(`Humanos:`, `${humandscount}`, true)
        .addField(`Bots:`, `${bots}`, true)
        .addField(`Total de Roles`, `${rolesn}`, true)
        .addField(`Región:`, `${regio}`, true)
        .addField(`Canales:`, `${message.guild.channels.size}`, true)
        .addField(`Creado en:`, `${message.guild.createdAt.toLocaleDateString()}`, true)
        .addField(`Roles:`, `${listrol}`)
        message.channel.send(info3);
        const adddi = new Discord.RichEmbed()
        .setColor([66, 185, 244])
        .setDescription(`**Emojis:**\n${emojiListsimple}`)
        message.channel.send(adddi);
    } else {
    if(meh === 0 ){
        const infoq = new Discord.RichEmbed()
    .setAuthor(`Información del servidor: ${message.guild.name}`,message.author.avatarURL)
    .setColor([66, 185, 244])
    .setFooter(client.user.username + `| V.1.3.9 • ${fechaYhora} `, `${client.user.avatarURL}`)
    .setThumbnail(message.guild.iconURL)
    .setTimestamp()
    .addField(`Dueño del servidor`, `${srvowner}`,true)
    .addField(`ID del dueño:`, `${message.guild.owner.id}`, true)
    .addField(`ID srv:`, `${idsvr}`, true)
    .addField(`Miembros:`, `${srvcount}`, true)
    .addField(`Humanos:`, `${humandscount}`, true)
    .addField(`Bots:`, `${bots}`, true)
    .addField(`Total de Roles`, `${rolesn}`, true)
    .addField(`Región:`, `${regio}`, true)
    .addField(`Canales:`, `${message.guild.channels.size}`, true)
    .addField(`Creado en:`, `${message.guild.createdAt.toLocaleDateString()}`, true)
    .addField(`Roles:`, `${listrol}`)
    .addField(`Emojis:`, `**No hay emojis en este servidor**`, true);
    message.channel.send(infoq);
    } else {
        const info = new Discord.RichEmbed()
        .setAuthor(`Información del servidor: ${message.guild.name}`,message.author.avatarURL)
        .setColor([66, 185, 244])
        .setFooter(client.user.username + `| V.1.3.9  `, `${client.user.avatarURL}`)
        .setThumbnail(message.guild.iconURL)
        .setTimestamp()
        .addField(`Dueño del servidor`, `${srvowner}`,true)
        .addField(`ID del dueño:`, `${message.guild.owner.id}`, true)
        .addField(`ID srv:`, `${idsvr}`, true)
        .addField(`Miembros:`, `${srvcount}`, true)
        .addField(`Humanos:`, `${humandscount}`, true)
        .addField(`Bots:`, `${bots}`, true)
        .addField(`Total de Roles`, `${rolesn}`, true)
        .addField(`Región:`, `${regio}`, true)
        .addField(`Canales:`, `${message.guild.channels.size}`, true)
        .addField(`Creado en:`, `${message.guild.createdAt.toLocaleDateString()}`, true)
        .addField(`Roles:`, `${listrol}`)
        .addField(`Emojis:`, `${emojiListsimple}`)
        
        message.channel.send(info);
    }
    
    }}};