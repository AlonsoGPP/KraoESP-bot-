exports.run = (client, message, args, Discord) => {
    if (message.member.id === '349257432247173130') {
  var a = message.guild.roles.map(rv => `${rv.name}`).join('\n-');
    let say = args.join(' ');
  message.delete();  
  message.channel.send(`${a}`);
  }};
  
       
       
    