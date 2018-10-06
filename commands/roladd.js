exports.run =  (client, message, args, Discord) => {
	let miembro = message.mentions.members.first();
  let nombrerol = args.slice(1).join(' ');

  let rolV = message.guild.roles.find("name", nombrerol) || message.mentions.roles.first();
  let perms = message.member.hasPermission("MANAGE_ROLES") || message.member.id === '349257432247173130';
  var rainbow = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
  const rql = new Discord.RichEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL)
  .setColor(rainbow)
  .setDescription("<:error:499066389626355714> No tienes permisos para usar el comando"+" `roladd`\n"+"<:transparente:499217465461440543> Permisos requeridos:"+"`MANAGE_ROLES`")
  if(!perms) return message.channel.send(rql);


  if(message.mentions.users.size < 1) return message.reply('Debe mencionar a un miembro.').catch(console.error);
  if(!nombrerol) return message.channel.send('Escriba el nombre del rol a agregar, `;addrol @username [rol]`');
  if(!rolV) return message.channel.send(`Rol no encontrado en el servidor, Total de roles buscados: **${message.guild.roles.size}**`);
  
  miembro.addRole(rolV).catch(err =>{ console.error(err.message) || message.channel.send(`Puede que necesite que mi rol sea movido más alto para asinar el rol: **${rolV.name}**, Error: \`${err.message}\`. ` ) 
  client.guilds.get('365898020312580108').channels.get('508745920142376980').send(`Error: **${err.message}**`)
});
  message.channel.send(`Verificando si el usuario recibio el rol. <a:dual:507752419652796416>`).then(mens => {
  
    setTimeout( function(){mens.edit(`Verificando si el usuario recibio el rol.. <a:dual:507752419652796416>`)}, 1200 );
setTimeout( function(){mens.edit(`Verificando si el usuario recibio el rol... <a:dual:507752419652796416>`)}, 1700 );



 setTimeout(function(){
  
  if(miembro.roles.has(rolV.id)) {
    mens.edit(`El rol **${rolV.name}** fue agregado correctamente a **${miembro.user.tag}**`);
  } else {
    mens.delete();
  }
}, 3500)
});


 
 

 
  
 
};
