exports.run = (client, message, args, Discord) => {
   if (message.member.id === '349257432247173130') {
      let user = message.mentions.users.first();
      if(!user){
            var say2 = args.slice(1).join(' ');
            let ID = message.content.split(' ')[1];
            let rs = client.users.get(ID) 
            rs.send(say2).catch(console.log(`Mensaje enviado correctamente a  ${rs.tag}`))
            message.channel.send(`Mensaje enviado correctamente a **${rs.tag}**, con el mensaje: **${say2}**`);
      }
    let say = args.slice(1).join(' ');
          
   if(user){ 
user.send(`${say}`).catch(console.log(`Mensaje enviado exitosamente a ${user.tag}`));
message.channel.send(`Mensaje enviado correctamente a: **${user.tag}**, con el mensaje: **${say}**`);

}     
}};