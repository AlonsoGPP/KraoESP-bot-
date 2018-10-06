const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const fs = require('fs')
let datos = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
var rainbow = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
var prefix = config.prefix;

// Notifica a la consola que el bot está listo y establece el set presence.
client.on('ready', () => {
  let registros = client.guilds.get('365898020312580108').channels.get('508745920142376980');
  console.log(`[INFO]: ${client.user.tag} está listo. Inicializado correctamente con ${client.users.size} usuarios, en ${client.channels.size} canales de ${client.guilds.size} servidores.`);
  registros.send(`[INFO]: **${client.user.tag}** está listo. Inicializado correctamente con **${client.users.size}** usuarios, en **${client.channels.size}** canales de **${client.guilds.size}** servidores.`)

});

//En un mensaje
client.on("message", message => {

  if (!message.guild) return;
    if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;

  // Definiendo los argumentos
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Procesador de comandos
  try {
    let registros = client.guilds.get('365898020312580108').channels.get('508745920142376980');
    console.log("[INFO]: " + message.author.tag + " ejecuto '" + command + "'");
    registros.send(`[INFO]:  **${message.author.tag}** ejecuto   **${command}**  `);
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args, Discord, prefix);
  } catch (err) {
    let registros = client.guilds.get('365898020312580108').channels.get('508745920142376980');
    console.log("[ERROR]: '" + command + "' ese comando no existe!.");
    console.error("[ERROR]: " + err.message);
    registros.send(`[ERROR]: ${command} no existe o esta mal escrito,err: ${err.message}`)

  
  }

});

//Cuando se une un miembro a un guild.
client.on("guildMemberAdd", member => {
  let registros = client.guilds.get('365898020312580108').channels.get('');
  member.send(`Bienvenido ${member} al servidor **${member.guild}** , wooh!, Difruta tu estadia!`).catch(console.log(`[INFO]: Mensaje de bienvenida del ${member.user.tag} al servidor ${member.guild}.`) || registros.send(`[info]: Mensaje de bienvenida del **${member.user.tag}** al servidor **${member.guild}**`));
});

//Dispara cuando el bot se une a una nueva guild.
client.on('guildCreate', (estructura) => {
  let registros = client.guilds.get('365898020312580108').channels.get('540722133127528488');
  let creador = estructura.owner.user;
  const gildnew = new Discord.RichEmbed()
  .setAuthor(client.user.username, client.user.avatarURL)
  .setColor(rainbow)
  .setTimestamp()
  .addField('Nueva guild!', `Nombre: **${estructura.name}** \n Creador: ${estructura.owner.user.tag} \nMencion: <@${estructura.owner.user.id}> \nUsuarios: ${estructura.memberCount}.  `)
  registros.send(gildnew)
  creador.send(`Gracias por añadirme a tu servidor <3`)
});

client.on('messageDelete', (msg)=>{
  if(msg) return;
  let registros = client.guilds.get('365898020312580108').channels.get('540722133127528488');
  const RichEmbd = new Discord.RichEmbed()
  .setAuthor(client.user.username, client.user.avatarURL)
  .setColor(rainbow)
  .setTimestamp()
  .addField(`**Mensaje log**\n contenido: **${msg}** author:<@${msg.author.id}> `)
  registros.send(RichEmbd);
});
// dispara con una mensaje
client.on('message', msg =>{
let alv = msg.content.substring(`${client.user}`.length);
if (alv.length > 2) return;
if(msg.isMentioned(client.user)){
msg.channel.send('Mi prefix es'+" `"+prefix+"`")  }

if (!msg.guild) {
  if(msg.author.bot) return;
  if (client.guilds.get('505791461401427978').channels.get('540722133127528488') || msg.author.id !== '349257432247173130') {
      let suggestions = client.guilds.get('505791461401427978').channels.get('540722133127528488');
      
     
         var msgd = new Discord.RichEmbed()
          .setAuthor(`Mensaje de  ${msg.author.tag}.`, msg.author.displayAvatarURL)
          .setColor(rainbow)
          .addField(`Mensaje:`, msg.content)
          .addField(`Autor:`, `Tag: **${msg.author.tag}**\nId: **${msg.author.id}**\n Mencion: **${msg.author}** `)
          .setTimestamp() 
           suggestions.send(msgd);
          
  }
}});
client.login(config.token);