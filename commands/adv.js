const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

 
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply(`**${message.author.tag}**, no parece que puedas usar  eso!.`);
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("Porfavor mencione a un miembro!");
  if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("No puedes advertir a este usuario!");
  let reason = args.join(" ").slice(22);

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });

  let warnEmbed = new Discord.RichEmbed()
  .setDescription("Warns")
  .setAuthor(message.author.username)
  .setColor("#fc6400")
  .addField("Usuario advertido", `<@${wUser.id}>`)
  .addField("advertido en", message.channel)
  .addField("Numero de advertencias", warns[wUser.id].warns)
  .addField("Razon", reason);

  let warnchannel = message.guild.channels.find(`name`, "anms");
  if(!warnchannel) return message.reply("no puedo encontrar el canal.");

  warnchannel.send(warnEmbed);

  if(warns[wUser.id].warns == 2){
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole) return message.reply("No hay un rol de mute.");
    
    let mutetime = "10s";
    await(wUser.addRole(muterole.id));
    message.channel.send(`<@${wUser.id}> ha sido tenporalmente silenciado`);

    setTimeout(function(){
      wUser.removeRole(muterole.id)
      message.reply(`<@${wUser.id}> ha sido silenciado.`)
    }, ms(mutetime))
  }
  if(warns[wUser.id].warns == 3){
    message.guild.member(wUser).ban(reason);
    message.reply(`<@${wUser.id}> ha sido baneado.`)
  }

}

module.exports.help = {
  name: "warn"
}