module.exports = {
    name: `choose`,
    description: `For example, type "!choose RP | programming" and answer will be displayed!`,
    viewiable: true,
    execute(message, args, Embed){
        args = args.split("|");
        Embed
            .addFields(
                {
                    name: 'Choice',
                    value: `Your choice: ${args[Math.floor(Math.random()*args.length)]}`,
                    inline: false,
                }
            )
        message.channel.send(Embed);
    }
}