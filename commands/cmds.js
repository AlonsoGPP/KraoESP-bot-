exports.run = (client, message, args, Discord, prefix) => {

if(!message.guild) return;
var apodo = message.guild.members.get(message.author.id).displayName
	var foto = message.author.avatarURL
    const raquel = new Discord.RichEmbed() 
        .setAuthor(client.user.username, client.user.avatarURL)
        .setColor(0x00d496)
        .setFooter(`${apodo} |  V.1.5.0`, foto)
        .setThumbnail(client.user.avatarURL)
        .setTimestamp()
        .addField("Lista de comandos!<a:deah:496678783965724672>", "Comandos disponibles:")
        .addField("Administración:", "`" +prefix+"remrol"+'[@miembro][nombre o mencion del rol]' +"`"+" Remover un rol.\n"+"`"+prefix+'roladd'+'[@miembro][nombre o mencion del rol]'+"`"+" Asignar un rol.\n"+"`"+ prefix+'lock[tiempo]'+"`"+" bloquear un canal en caso de flood masivo*.\n"+"`"+prefix+'r[palabra]'+"`"+" Repetir todo lo que escriba." , true)
        .addField("Moderación:", "`"+prefix+'kick [@miembro]'+"`"+' Expulsar a un usuario.\n'+"`"+prefix+'ban[@miembro][razon]'+"`"+' Prohibir usuario.\n'+"`"+prefix+'nick[@miembro][apodo]'+"`"+' Modificar el apodo de un miembro.\n'+"`"+prefix+'limpiar[n# mensajes]'+"`"+' Borrar mensajes(2 - 100 mensajes).\n'+"`"+prefix+'tempmute[@miembro][tiempo][razón]'+"`"+' Silenciado temporal.\n'+"`"+prefix+'unmute[@miembro]` Quitar el silenciado de un miembro.\n'+ '`'+prefix+'serverinfo` Ver la información del servidor.', true)
        .addField("Para todo el mundo:", "`"+prefix+'8ball [pregunta]'+"`"+'Pregunta algo al bot!. \n'+'Muchos mas comandos próximamente!\n'+'*Para mas funciones consultelo en help.'+'\n *Correciones ortográficas.', true);
    message.channel.send(raquel);
    };
    