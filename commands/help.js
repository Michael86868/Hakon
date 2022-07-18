module.exports = {
    name: `help`,
    description: `Type !help and all commands will be displayed!`,
    viewiable: false,
    execute(message, args,commands, Embed){
        for(let i = 0;i<commands[0].length;i++){
            Embed.addFields(
                {
                    name: `!${commands[0][i]}`,
                    value: `${commands[1][i]}`,
                    inline: false,
                }
            );
        }
        message.channel.send(Embed);
    }
}