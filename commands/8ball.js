exports.run = (client, message, args, Discord, prefix) => {
    let alv = message.content.substring(`${prefix}8ball `.length);
     if (alv.length <= 0) return message.reply(`Deves hacerme una pregunta o.o`);
  function doMagic8BallVoodoo() {
    var rand = ['Sí.', 'No.','Claro que no!.', 'Tal ves', 'Quieres saberlo...', 'Sin duda ...'];

    return rand[Math.floor(Math.random()*rand.length)];
}


{
    let meh = message.content.split(' ')[1];
    let command = meh.toLowerCase()
    
    if(command === 'si'){
        function doMagic8BallVood() {
        var ran = ['Sí', 'No']
        return ran[Math.floor(Math.random()*ran.length)];
        }
        message.channel.send('🔮 '+ doMagic8BallVood());
    }else{
        message.channel.send('🔮 '+  doMagic8BallVoodoo());
    }
}};