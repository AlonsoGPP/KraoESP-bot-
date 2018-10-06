module.exports.run = async (client, message, args, Discord, prefix) => {
var nombres = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ";
message.channel.send(nombres + "<br>" + "<br>");
var expresionRegular = /\s*;\s*/;
var listaNombres = nombres.split(expresionRegular);
message.channel.send(listaNombres);
}