exports.run = (client,message, args, Discord )=>{
    const fs = require('fs');
    let datos = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
    let aux = message.content.split(' ')[1];
    if(aux === 'msgbienvenida'){
        if(message.content === 'on'){ 
            datos[message.guild.id].configuracion = aux;            
        }
    }
    };