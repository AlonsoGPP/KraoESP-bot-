module.exports.run = async (client, message, args, Discord, prefix) => {
  var perms = message.member.hasPermission("BAN_MEMBERS", "KICK_MEMBERS") || message.member.hasPermission('KICK_MEMBERS') || message.member.id === '349257432247173130';
  var rainbow = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
  const rql = new Discord.RichEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL)
  .setColor(rainbow)
  .setDescription("<:error:499066389626355714> No tienes permisos para usar el comando"+" `tempmute`\n"+"<:transparente:499217465461440543> Permisos requeridos:"+"`BAN_MEMBERS` o `KICK_MEMBERS` ")
  if(!perms) return message.channel.send(rql);
  
    const ms = require("ms");

    let mutetime = args[1];
    const el = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL)
    .setColor(0x1aed91)
    .setDescription('Muy pocos argumentos dados.\n \nUsa: \n' + "`" + prefix+"tempmute <user> <tiempo> [razon]"+"`" ) 
    if(!mutetime) return message.channel.send(el);

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  let razon = args[2];
  if(!tomute) return message.reply("No se pudo encontrar al usuario.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("No puedes silenciar a un moderador!");
  let muterole = message.guild.roles.find(`name`, "Muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role


 await(tomute.addRole(muterole.id));
const embed = new Discord.RichEmbed() 
  .addField("Usuario silenciado satisfactoriamente!:",`Usuario: **${tomute}** \nRazón: **${razon}**\nTiempo: **${ms(ms(mutetime))}**`)
	.setAuthor(message.author.username, message.author.avatarURL)
	.setColor(rainbow)
	.setFooter("Comando ejecutado!", client.user.avatarURL)
	.setTimestamp() 
message.channel.send({embed});

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.user.id}> ha terminado el tiempo de silenciado!`);
  }, ms(mutetime));



 
};

