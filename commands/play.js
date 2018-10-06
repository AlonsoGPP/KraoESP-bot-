exports.run = (client, message, args, Discord) =>{
    if(!args[1]) return message.reply("Debes proporcionar un enlace a una canción.")
    const ytdl = require('ytdl-core')
    const streamOptions = {
        seek: 0,
        volume: 1
    }
    var musicUrls=[];

if(message.author.bot) return;
let url = arg[1];
let voiceChannel = message.guild.channels.find(channel => channel.id === '496512969891512320');

if(ytdl)
    
}