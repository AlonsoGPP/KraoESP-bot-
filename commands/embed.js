exports.run = (client, message, args, Discord) => {
   
    let say = args.join(' ');
  message.delete();  
  var rainbow = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
const embed = new Discord.RichEmbed()
.setTitle(`${say}`)
.setColor(rainbow)
  message.channel.send({embed});
  };
  
       
       