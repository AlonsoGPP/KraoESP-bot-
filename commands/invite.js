exports.run = async (client, message, args, Discord) => {
    let id = args.join(' ');
client.channels.get(`${id}`).createInvite().then(invite =>
        message.channel.send(invite.url)
        
    );
    
};
