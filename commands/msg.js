exports.run = (client, message, args, Discord) => {
    if (message.member.id === '349257432247173130') {
    let msj = args.join(' ');
    message.delete()
   message.guild.members.some(members => {
       members.user.send(`${msj}`).catch(console.error);
   })
   }
};      