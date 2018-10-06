exports.run = (client, message, args, Discord, prefix) => {
    var perms = message.member.hasPermission("MANAGE_MESSAGES") || message.member.id === '349257432247173130';
    var rainbow = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
    const elzbt = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL)
    .setColor(rainbow)
    .setDescription("<:error:499066389626355714> No tienes permisos para usar el comando"+" `limpiar`\n"+"<:transparente:499217465461440543> Permisos requeridos:"+"`MANAGE_MESSAGES`")
    if(!perms) return message.channel.send(elzbt);
    
    async function purge() {
       
  
       

  
        
        if (isNaN(args[0])) {
            const rql = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL)
            .setColor(0x1aed91)
            .setDescription('Muy pocos argumentos dados.\n \nUsa: \n' + "`"+prefix+"limpiar <N° de mensajes>"+"`" ) 
            message.channel.send(rql).catch(console.log('[ERROR]: No especifico la cantidad de mensajes a borrar.'));
            
            return;
        }
  
        const fetched = await message.channel.fetchMessages({limit: args[0]});
        console.log(`[INFO]: ${fetched.size} mensajes encontrados, borrando... `);
        message.channel.send(`¡He borrado \`${fetched.size}\` mensajes  para ti!`) .then(mens => {mens.delete(3000)});
        message.delete();
        
  
        
        message.channel.bulkDelete(fetched)
      
            .catch(error => message.channel.send(`Error: ${error}`)); 
           
  
    }
  
   
    purge(); 
  
  };
 