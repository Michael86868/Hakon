module.exports = {
    name: 'ping',
    description: "type !ping and answer will be displayed!",
    viewiable: true,
    execute(message, args){
        message.channel.send('pong!');
    }
}